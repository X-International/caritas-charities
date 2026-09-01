"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

const MIN_PASSWORD_LENGTH = 8;

type PageState = "loading" | "ready" | "expired" | "success";

export default function AdminResetPasswordPage() {
  const router = useRouter();
  const [pageState, setPageState] = useState<PageState>("loading");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // Listen for the PASSWORD_RECOVERY auth event triggered by the recovery link
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setPageState("ready");
      }
    });

    // Also check if there's already a valid session (user arrived with recovery token)
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setPageState("ready");
      } else {
        // Allow a moment for the auth state change listener to fire
        setTimeout(() => {
          setPageState((current) => (current === "loading" ? "expired" : current));
        }, 2000);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!newPassword || !confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      setError(`Your password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("The passwords you entered do not match. Please try again.");
      return;
    }

    setSubmitting(true);

    try {
      const supabase = createClient();
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        setError("Unable to update your password. The reset link may have expired. Please request a new one.");
        setSubmitting(false);
        return;
      }

      // Sign out after password change so the user signs in with the new password
      await supabase.auth.signOut();
      setPageState("success");
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  // Auto-redirect after success
  useEffect(() => {
    if (pageState === "success") {
      const timer = setTimeout(() => {
        router.push("/admin/login");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [pageState, router]);

  return (
    <div className="min-h-screen bg-[#f9f6f0] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 space-y-6">
        {/* Branding */}
        <div className="text-center space-y-3">
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

        {/* Loading State */}
        {pageState === "loading" && (
          <div className="text-center space-y-3 py-4">
            <div className="w-8 h-8 border-3 border-gray-300 border-t-[#b10017] rounded-full animate-spin mx-auto" />
            <p className="text-sm text-gray-600">Verifying your reset link…</p>
          </div>
        )}

        {/* Expired / Invalid Link State */}
        {pageState === "expired" && (
          <div className="text-center space-y-4 py-2">
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
              Link Expired
            </Heading>

            <p className="text-sm text-gray-700 leading-relaxed">
              This password reset link is invalid or has expired. Request a new password reset link.
            </p>

            <div className="pt-2">
              <Button href="/admin/login" variant="primary" size="md" className="w-full justify-center">
                RETURN TO SIGN IN
              </Button>
            </div>
          </div>
        )}

        {/* Success State */}
        {pageState === "success" && (
          <div className="text-center space-y-4 py-2">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <Heading level={1} variant="article" color="dark" className="text-2xl font-bold">
              Password Updated
            </Heading>

            <p className="text-sm text-gray-700 leading-relaxed">
              Your password has been changed successfully. You will be redirected to sign in shortly.
            </p>

            <div className="pt-2">
              <Button href="/admin/login" variant="primary" size="md" className="w-full justify-center">
                SIGN IN NOW
              </Button>
            </div>
          </div>
        )}

        {/* Reset Form State */}
        {pageState === "ready" && (
          <>
            <div className="text-center space-y-1">
              <Heading level={1} variant="article" color="dark" className="text-2xl font-bold pt-2">
                Reset Your Password
              </Heading>
              <p className="text-xs sm:text-sm text-gray-600">
                Enter a new password for your Charity Office dashboard account.
              </p>
            </div>

            {/* Error Feedback Region */}
            {error && (
              <div
                role="alert"
                aria-live="polite"
                className="bg-red-50 border border-red-200 text-[#b10017] text-xs p-3.5 rounded-xl text-center font-medium space-y-1"
              >
                <p className="font-bold">Password Update Failed</p>
                <p className="text-red-700 font-normal">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="new-password"
                  className="block text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  required
                  disabled={submitting}
                  autoComplete="new-password"
                  minLength={MIN_PASSWORD_LENGTH}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b10017] focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors disabled:opacity-60"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="confirm-password"
                  className="block text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  disabled={submitting}
                  autoComplete="new-password"
                  minLength={MIN_PASSWORD_LENGTH}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b10017] focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors disabled:opacity-60"
                />
              </div>

              <p className="text-[11px] text-gray-500">
                Must be at least {MIN_PASSWORD_LENGTH} characters.
              </p>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={submitting}
                  className="w-full justify-center"
                >
                  {submitting ? "UPDATING PASSWORD..." : "UPDATE PASSWORD"}
                </Button>
              </div>
            </form>
          </>
        )}

        <hr className="border-gray-200" />

        {/* Footer */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs font-semibold text-gray-500 hover:text-[#b10017] transition-colors"
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
