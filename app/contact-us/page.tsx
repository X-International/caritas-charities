import Image from "next/image";
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
        {/* Breadcrumb Container - Matches Navbar Padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#b10017] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                CONTACT US
              </li>
            </ol>
          </nav>
        </div>

        {/* Full-width Two-Column Hero Header */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 mb-8 sm:mb-12">
          {/* Left Column: Image */}
          <div className="order-1 lg:order-1 relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[500px] rounded-t-2xl sm:rounded-t-[32px] lg:rounded-none lg:rounded-r-[32px] overflow-hidden">
            <Image
              src="/images/Event 01/Caritas_Kampala_72.jpg"
              alt="Caritas Kampala community outreach"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Red Content Panel */}
          <div className="order-2 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[500px] bg-[#b10017] text-white rounded-b-2xl sm:rounded-b-[32px] lg:rounded-none lg:rounded-l-[32px] overflow-hidden flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24">
            <div className="max-w-lg">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/90 mb-4 sm:mb-5">
                WE&apos;D LIKE TO HEAR FROM YOU
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-white tracking-tight mb-6 sm:mb-8">
                CONTACT US
              </h1>
              <p className="text-xl sm:text-2xl lg:text-[26px] font-serif text-white leading-snug mb-4 sm:mb-6">
                Whether you have a question, want to support our current appeal, or would like to get involved, we&apos;re here to help.
              </p>
              <p className="text-sm sm:text-base text-white/90 font-sans">
                &mdash; The Charities Department, Caritas Kampala
              </p>
            </div>
          </div>
        </div>

        {/* Main Container for the rest of the page */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info & Directions */}
          <section className="py-12 sm:py-16">
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
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#b10017]">Send Us a Message</h2>
                <p className="text-sm text-gray-600 mt-2">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              </div>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Name <span className="text-[#b10017]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      placeholder="e.g. Maria Namuli" 
                      required 
                      aria-required="true"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017] transition-colors" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address <span className="text-[#b10017]">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="e.g. jane@example.com" 
                      required 
                      aria-required="true"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017] transition-colors" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    PHONE NUMBER (optional)
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="e.g. +256 700 000 000" 
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017] transition-colors" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Subject <span className="text-[#b10017]">*</span>
                  </label>
                  <select 
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    aria-required="true"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017] transition-colors bg-white appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                  >
                    <option value="" disabled>Select a subject...</option>
                    <option value="general">General Enquiry</option>
                    <option value="donations">Donations &amp; Giving</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="media">Media &amp; Press</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Message <span className="text-[#b10017]">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5} 
                    placeholder="How can we help you?" 
                    required 
                    aria-required="true"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#b10017] transition-colors resize-y"
                  ></textarea>
                </div>
                
                <div className="pt-2 space-y-3">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-8 bg-[#b10017] text-white font-bold py-3.5 rounded-full uppercase tracking-wider text-xs hover:bg-white hover:text-[#b10017] border-2 border-[#b10017] transition-all duration-200 shadow-sm"
                  >
                    SEND MESSAGE
                  </button>
                  <p className="text-[11px] text-gray-500 font-sans">
                    By submitting this form, you agree to be contacted about your enquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
          </section>
        </div>
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
