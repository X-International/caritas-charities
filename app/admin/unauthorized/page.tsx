import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Access Not Authorized | Caritas Kampala Charity Office",
  description: "Unauthorized access page for the Charity Office website dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminUnauthorizedPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 space-y-6 text-center">
        {/* Branding */}
        <div className="space-y-3">
          <Image
            src="/images/logos/Caritas_Kampala.png"
            alt="Caritas Kampala Logo"
            width={56}
            height={56}
            className="w-14 h-14 object-contain mx-auto"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b10017] block">
              Caritas Kampala
            </span>
            <span className="text-sm font-semibold text-gray-700 block">
              Charity Office
            </span>
          </div>
        </div>

        {/* Message Panel */}
        <div className="space-y-3 pt-2">
          <div className="w-12 h-12 bg-red-50 text-[#b10017] rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" d="M12 8v4m0 4h.01" />
            </svg>
          </div>

          <Heading level={1} variant="article" color="dark" className="text-2xl font-bold">
            Access Not Authorized
          </Heading>

          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            Your account does not have permission to access the Charity Office website dashboard.
          </p>

          <p className="text-xs text-gray-500 leading-relaxed">
            If you believe you should have access, contact the website administrator.
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Action Button */}
        <div className="pt-1">
          <Button href="/" variant="primary" size="md" className="w-full justify-center">
            RETURN TO PUBLIC WEBSITE
          </Button>
        </div>
      </div>
    </div>
  );
}
