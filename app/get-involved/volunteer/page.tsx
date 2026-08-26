import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Volunteer With Us | Caritas Kampala Charities Office",
  description:
    "See how you can offer your time and skills to support the Charities Office's work across the Archdiocese of Kampala.",
  path: "/get-involved/volunteer",
});

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-caritas-red text-white section-lg">
          <div className="site-container space-y-4">
            <Breadcrumb
              items={[
                { label: "HOME", href: "/" },
                { label: "GET INVOLVED", href: "/get-involved" },
                { label: "VOLUNTEER" },
              ]}
            />
            <Heading level={1} variant="page" color="white">
              Volunteer
            </Heading>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-lg text-center">
          <Lead variant="hero" color="muted">
            Content coming soon.
          </Lead>
        </section>
      </main>

      <Footer />
    </div>
  );
}
