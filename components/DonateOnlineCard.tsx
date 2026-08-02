export default function DonateOnlineCard() {
  return (
    <section className="pt-6 sm:pt-8 pb-2 sm:pb-4">
      <div className="bg-[#ebe3d7] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b10017] rounded-full flex items-center justify-center shrink-0 self-start md:self-auto">
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <h2 className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl md:text-[28px] leading-tight">
            Give Online
          </h2>
          <p className="text-sm sm:text-base text-black leading-relaxed max-w-2xl">
            Give securely online through our payment partner. You'll be taken to a secure page to complete your donation.
          </p>
        </div>

        <div className="md:ml-auto w-full md:w-auto md:pl-4">
          <button
            type="button"
            className="group w-full md:w-auto min-w-45 inline-flex items-center justify-center gap-2 bg-[#b10017] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider border-2 border-[#b10017] transition-all duration-200 hover:bg-white hover:text-[#b10017]"
          >
            <span>Donate Now</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}