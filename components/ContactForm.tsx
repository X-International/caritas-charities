"use client";

import { FormEvent, useState } from "react";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";
import { FormLabel, TextInput, Select, TextArea, FormHelperText, FormError } from "@/components/ui/Form";

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "loading" });
    trackEvent(ANALYTICS_EVENTS.contactFormSubmit, { form: "contact" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12_000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { code?: string } | null;
        if (response.status === 429 || result?.code === "RATE_LIMITED") {
          throw new Error("We have received several requests from this connection. Please wait a few minutes and try again.");
        }
        throw new Error("Our message service is temporarily unavailable. Please try again or use one of the direct contact lines.");
      }
      form.reset();
      setSubmission({ status: "success" });
      trackEvent(ANALYTICS_EVENTS.contactFormResult, { form: "contact", result: "success" });
    } catch (error) {
      const message = error instanceof Error && error.name === "AbortError"
        ? "The request took too long. Please check your connection and try again."
        : error instanceof Error ? error.message : "We could not send your message. Please try again.";
      setSubmission({ status: "error", message });
      trackEvent(ANALYTICS_EVENTS.contactFormResult, { form: "contact", result: "error" });
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <FormLabel htmlFor="name" required>Name</FormLabel>
          <TextInput type="text" id="name" name="name" autoComplete="name" required maxLength={100} placeholder="e.g. Maria Namuli" aria-required="true" />
        </div>
        <div>
          <FormLabel htmlFor="email" required>Email Address</FormLabel>
          <TextInput type="email" id="email" name="email" autoComplete="email" spellCheck={false} required maxLength={254} placeholder="e.g. jane@example.com…" aria-required="true" />
        </div>
      </div>

      <div>
        <FormLabel htmlFor="phone" optional>Phone Number</FormLabel>
        <TextInput type="tel" id="phone" name="phone" autoComplete="tel" maxLength={30} placeholder="e.g. +256 700 000 000" />
      </div>

      <div>
        <FormLabel htmlFor="subject" required>Subject</FormLabel>
        <Select id="subject" name="subject" required defaultValue="" aria-required="true">
          <option value="" disabled>Select a subject...</option>
          <option value="general">General Enquiry</option>
          <option value="donations">Donations &amp; Giving</option>
          <option value="partnerships">Partnerships</option>
          <option value="media">Media &amp; Press</option>
          <option value="other">Something Else</option>
        </Select>
      </div>

      <div>
        <FormLabel htmlFor="message" required>Message</FormLabel>
        <TextArea id="message" name="message" rows={5} required maxLength={4000} placeholder="How can we help you?…" aria-required="true" />
      </div>

      <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />

      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={submission.status === "loading"}
          className="w-full sm:w-auto"
        >
          Send Message
        </Button>
        <FormHelperText>By submitting this form, you agree to be contacted about your enquiry.</FormHelperText>
        {submission.status === "error" && (
          <FormError id="contact-form-error">{submission.message}</FormError>
        )}
        {submission.status === "success" && (
          <p role="status" aria-live="polite" className="text-sm font-medium text-[#006b5d]">
            Your message was sent successfully.
          </p>
        )}
      </div>
    </form>
  );
}
