import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export const metadata = {
  title: "Contact Us | Caritas Kampala",
  description:
    "Reach out to Caritas Kampala Charities Department for donations, relief enquiries, and office directions.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">CONTACT US</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Our team is ready to assist you with donation drop-offs, partnerships, and general enquiries.
            </p>
          </div>
        </section>

        {/* Contact Info & Directions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Direct Lines */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#b10017]">Office Location &amp; Drop-offs</h2>
              <div className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl space-y-3 border border-amber-200/60">
                <p className="font-bold text-gray-900 text-lg">Caritas Kampala Main Office</p>
                <p className="text-gray-700 text-sm">Old Ggaba Road, Nsambya</p>
                <p className="text-gray-700 text-sm">(next to the American Embassy)</p>
                <p className="text-gray-700 text-sm">Kampala, Uganda</p>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#b10017] pt-4">Direct Contact Lines</h2>
              <div className="space-y-3 text-sm">
                <a href="tel:+256762506906" className="flex justify-between items-center bg-gray-50 hover:bg-red-50 p-4 rounded-xl border border-gray-200 font-mono font-bold text-gray-900 transition-colors">
                  <span>Donation Hotline</span>
                  <span className="text-[#b10017]">+256 762 506 906</span>
                </a>
                <a href="https://wa.me/256792176443" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center bg-gray-50 hover:bg-red-50 p-4 rounded-xl border border-gray-200 font-mono font-bold text-gray-900 transition-colors">
                  <span>WhatsApp Line</span>
                  <span className="text-[#b10017]">+256 792 176 443</span>
                </a>
                <a href="tel:+256392176443" className="flex justify-between items-center bg-gray-50 hover:bg-red-50 p-4 rounded-xl border border-gray-200 font-mono font-bold text-gray-900 transition-colors">
                  <span>Main Office Desk</span>
                  <span className="text-[#b10017]">+256 392 176 443</span>
                </a>
              </div>
            </div>

            {/* Quick Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#b10017]">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Your Name</label>
                  <input type="text" placeholder="John Doe" required className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" required className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#b10017] text-white font-bold py-3.5 rounded-full uppercase tracking-wider text-xs hover:bg-red-900 transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Google Map Roadmap View */}
      <section
        aria-label="Caritas Kampala Office Location Map"
        className="rounded-3xl mx-4 my-4 sm:mx-6 sm:my-6 lg:mx-8 lg:my-8 overflow-hidden bg-gray-100 shadow-lg shadow-gray-200/80 h-56 sm:h-72 lg:h-80"
      >
        <GoogleMap />
      </section>

      <Footer />
    </div>
  );
}
