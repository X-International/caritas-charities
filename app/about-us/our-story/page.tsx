import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = {
  title: "Who we are | Caritas Kampala",
  description:
    "Learn about who we are at Caritas Kampala.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
