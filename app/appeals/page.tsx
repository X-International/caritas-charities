import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandedPageHeader from "@/components/BrandedPageHeader";
import AppealsListClient from "./AppealsListClient";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Emergency Appeals | Caritas Kampala Charity Office",
  description:
    "View current and past emergency appeals from the Charity Office, including documented responses supporting communities facing crisis.",
  path: "/appeals",
});

export default function AppealsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <BrandedPageHeader
          title="Emergency Appeals"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "#" },
            { label: "Emergency Appeals" },
          ]}
          description="Urgent appeals and documented responses from the Charity Office serving communities in times of crisis."
        />

        <AppealsListClient />
      </main>

      <Footer />
    </div>
  );
}
