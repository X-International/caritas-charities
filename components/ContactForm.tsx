"use client";

import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";
import { FormLabel, TextInput, Select, TextArea, FormHelperText } from "@/components/ui/Form";

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const searchParams = useSearchParams();
  const urlSubject = searchParams.get("subject");
  const [subject, setSubject] = useState(urlSubject || "");

  useEffect(() => {
    if (urlSubject) {
      setSubject(urlSubject);
    }
  }, [urlSubject]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "loading" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Client-side validation checks
    if (!name) {
      setSubmission({ status: "error", message: "Please enter your name." });
      return;
    }
    if (!email) {
      setSubmission({ status: "error", message: "Please enter your email address." });
      return;
    }
    if (!subject) {
      setSubmission({ status: "error", message: "Please select a subject from the dropdown menu." });
      return;
    }
    if (!message) {
      setSubmission({ status: "error", message: "Please enter your message." });
      return;
    }

    trackEvent(ANALYTICS_EVENTS.contactFormSubmit, { form: "contact" });

    const data = Object.fromEntries(formData.entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12_000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
        code?: string;
      } | null;

      if (!response.ok) {
        if (response.status === 429 || result?.code === "RATE_LIMITED") {
          throw new Error(
            "We have received several requests from this connection. Please wait a few minutes and try again."
          );
        }
        throw new Error(
          result?.error ||
            "We were unable to send your message at this time. Please try again or contact the Charity Office using the telephone or email details shown on this page."
        );
      }

      form.reset();
      setSubject("");
      setSubmission({ status: "success" });
      trackEvent(ANALYTICS_EVENTS.contactFormResult, { form: "contact", result: "success" });
    } catch (error) {
      const message =
        error instanceof Error && error.name === "AbortError"
          ? "The request took too long. Please check your connection and try again."
          : error instanceof Error
          ? error.message
          : "We were unable to send your message at this time. Please try again or contact the Charity Office using the telephone or email details shown on this page.";
      setSubmission({ status: "error", message });
      trackEvent(ANALYTICS_EVENTS.contactFormResult, { form: "contact", result: "error" });
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <FormLabel htmlFor="name" required>Name</FormLabel>
          <TextInput
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="e.g. Maria Namuli"
            aria-required="true"
          />
        </div>
        <div>
          <FormLabel htmlFor="email" required>Email Address</FormLabel>
          <TextInput
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            spellCheck={false}
            required
            maxLength={254}
            placeholder="e.g. jane@example.com"
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <FormLabel htmlFor="phone" optional>Phone Number</FormLabel>
        <TextInput
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          maxLength={30}
          placeholder="e.g. +256 700 000 000"
        />
      </div>

      <div>
        <FormLabel htmlFor="subject" required>Subject</FormLabel>
        <Select
          id="subject"
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-required="true"
        >
          <option value="" disabled>Select a subject...</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Donations & Giving">Donations &amp; Giving</option>
          <option value="Current Appeal">Current Appeal</option>
          <option value="Volunteer Enquiry">Volunteer Enquiry</option>
          <option value="Partnership Enquiry">Partnership Enquiry</option>
          <option value="Charity Shop">Charity Shop</option>
          <option value="Chaconet Network">Chaconet Network</option>
          <option value="Programmes & Services">Programmes &amp; Services</option>
          <option value="Media & Communications">Media &amp; Communications</option>
          <option value="Website Feedback">Website Feedback</option>
          <option value="Other">Other</option>
        </Select>
      </div>

      <div>
        <FormLabel htmlFor="message" required>Message</FormLabel>
        <TextArea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          placeholder="How can we help?"
          aria-required="true"
        />
      </div>

      {/* Invisible Honeypot Field for Spam Protection */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden opacity-0 pointer-events-none absolute -z-10 w-0 h-0"
      />

      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={submission.status === "loading"}
          disabled={submission.status === "loading"}
          className="w-full min-[380px]:w-auto"
        >
          {submission.status === "loading" ? "SENDING..." : "SEND MESSAGE"}
        </Button>

        <FormHelperText>
          By submitting this form, you agree that the Charity Office may use the information you provide to respond to your enquiry.{" "}
          <Link href="/privacy-policy" className="text-[#b10017] underline hover:no-underline font-medium">
            Privacy Policy
          </Link>.
        </FormHelperText>

        {submission.status === "error" && (
          <div
            id="contact-form-error"
            role="alert"
            aria-live="assertive"
            className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 space-y-1 text-sm font-sans"
          >
            <p className="font-bold text-[#b10017]">Message Could Not Be Sent</p>
            <p className="text-gray-700 font-normal leading-relaxed">{submission.message}</p>
          </div>
        )}

        {submission.status === "success" && (
          <div
            role="status"
            aria-live="polite"
            className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 space-y-1 text-sm font-sans"
          >
            <p className="font-bold text-[#006b5d]">Message Sent</p>
            <p className="text-teal-800 font-normal leading-relaxed">
              Thank you for contacting the Charity Office. Your message has been sent successfully and our team will respond as soon as reasonably possible.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
