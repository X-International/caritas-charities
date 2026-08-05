import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import LocationMap from "@/components/Map";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Caritas Kampala",
  description:
    "Reach out to Caritas Kampala Charities Department for donations, relief enquiries, and office directions.",
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=0.299230886593831,32.593433862503";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Container - Matches Navbar Padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <Breadcrumb items={[
            { label: "HOME", href: "/" },
            { label: "CONTACT US" }
          ]} />
        </div>

        <ContactHero />

        {/* Main Container for the rest of the page */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info & Directions */}
          <section className="py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#b10017]">Visit &amp; Call Us</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Our main office location and direct phone lines.
                  </p>
                </div>

                <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl shadow-sm shadow-gray-200/60 flex items-start gap-5 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b10017] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl mb-2">
                      Caritas Kampala Main Office
                    </p>
                    <address className="not-italic text-black text-sm leading-snug space-y-0.5">
                      <p>Old Ggaba Road, Nsambya</p>
                      <p>(next to the American Embassy)</p>
                      <p>Kampala, Uganda</p>
                    </address>
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#b10017] hover:underline"
                    >
                      Get directions
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl shadow-sm shadow-gray-200/60 flex items-start gap-5 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b10017] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.52 4.56a1 1 0 01-.54 1.21l-2.2.92a11.042 11.042 0 005.52 5.52l.92-2.2a1 1 0 011.21-.54l4.56 1.52a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C10.82 21 3 13.18 3 4V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl mb-2">
                      Direct Contact Lines
                    </p>
                    <div className="space-y-2">
                      <a
                        href="tel:+256762506906"
                        aria-label="Call Appeal Line at +256 762 506 906"
                        className="flex items-center justify-between gap-4 rounded-xl bg-white/40 hover:bg-white/70 px-3 py-2.5 transition-colors"
                      >
                        <span className="text-sm font-semibold text-black">Appeal Line:</span>
                        <span className="font-mono text-sm font-bold text-black shrink-0">+256 762 506 906</span>
                      </a>
                      <a
                        href="https://wa.me/256792176443"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Message Appeal Line (Alt) on WhatsApp at +256 792 176 443"
                        className="flex items-center justify-between gap-4 rounded-xl bg-white/40 hover:bg-white/70 px-3 py-2.5 transition-colors"
                      >
                        <span className="text-sm font-semibold text-black">Appeal Line (Alt):</span>
                        <span className="font-mono text-sm font-bold text-black shrink-0">+256 792 176 443</span>
                      </a>
                      <a
                        href="tel:+256392176443"
                        aria-label="Call Main Office at +256 392 176 443"
                        className="flex items-center justify-between gap-4 rounded-xl bg-white/40 hover:bg-white/70 px-3 py-2.5 transition-colors"
                      >
                        <span className="text-sm font-semibold text-black">Main Office:</span>
                        <span className="font-mono text-sm font-bold text-black shrink-0">+256 392 176 443</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            {/* Quick Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#b10017]">Send Us a Message</h2>
                <p className="text-sm text-gray-600 mt-2">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              </div>
              <ContactForm />
              {/*
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
              */}
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
        <LocationMap />
      </section>

      <Footer />
    </div>
  );
}
