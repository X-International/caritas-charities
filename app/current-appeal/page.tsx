import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentAppealClient from "./CurrentAppealClient";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Emergency Appeal & Response: Famine in Kotido & Moroto | Caritas Kampala",
  description:
    "Emergency relief drive and response for families facing famine in Kotido and Moroto dioceses, Karamoja.",
  path: "/current-appeal",
  image: "/images/current%20appeal/Caritas_Kampala_Current_Appeal_details.jpg",
});

export default function CurrentAppealPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <CurrentAppealClient />
      </main>

      <Footer />
    </div>
  );
}
