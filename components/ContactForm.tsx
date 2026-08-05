"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm transition-colors focus:border-[#b10017] focus:outline-none focus:ring-2 focus:ring-[#b10017]/20";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
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
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error && error.name === "AbortError"
        ? "The request took too long. Please check your connection and try again."
        : error instanceof Error ? error.message : "We could not send your message. Please try again.");
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">Name <span className="text-[#b10017]">*</span></label>
          <input className={inputClass} type="text" id="name" name="name" autoComplete="name" required maxLength={100} placeholder="e.g. Maria Namuli" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">Email Address <span className="text-[#b10017]">*</span></label>
          <input className={inputClass} type="email" id="email" name="email" autoComplete="email" spellCheck={false} required maxLength={254} placeholder="e.g. jane@example.com…" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">Phone Number <span className="font-normal normal-case tracking-normal text-gray-500">(optional)</span></label>
        <input className={inputClass} type="tel" id="phone" name="phone" autoComplete="tel" maxLength={30} placeholder="e.g. +256 700 000 000" />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">Subject <span className="text-[#b10017]">*</span></label>
        <select className={`${inputClass} bg-white`} id="subject" name="subject" required defaultValue="">
          <option value="" disabled>Select a subject...</option>
          <option value="general">General Enquiry</option>
          <option value="donations">Donations &amp; Giving</option>
          <option value="partnerships">Partnerships</option>
          <option value="media">Media &amp; Press</option>
          <option value="other">Something Else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">Message <span className="text-[#b10017]">*</span></label>
        <textarea className={`${inputClass} resize-y`} id="message" name="message" rows={5} required maxLength={4000} placeholder="How can we help you?…" />
      </div>

      <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />

      <div className="space-y-3 pt-2">
        <button type="submit" disabled={status === "loading"} className="w-full rounded-full border-2 border-[#b10017] bg-[#b10017] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#b10017] disabled:cursor-wait disabled:opacity-60 sm:w-auto">
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        <p className="text-[11px] text-gray-500">By submitting this form, you agree to be contacted about your enquiry.</p>
        <p role="status" aria-live="polite" className={`text-sm font-medium ${status === "success" ? "text-[#006b5d]" : status === "error" ? "text-[#b10017]" : "sr-only"}`}>
          {status === "success" ? "Your message was sent successfully." : status === "error" ? errorMessage : ""}
        </p>
      </div>
    </form>
  );
}
