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
              d="M12 21s-6.5-4.35-9-8.4C1.16 9.65 2.75 6 6.5 6c2.05 0 3.36 1.15 4.01 2.1C11.16 7.15 12.47 6 14.5 6c3.75 0 5.34 3.65 3.5 6.6C18.5 16.65 12 21 12 21z"
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
            className="w-full md:w-auto min-w-45 inline-flex items-center justify-center bg-[#b10017] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider hover:bg-red-900 transition-colors"
          >
            Donate Now →
          </button>
        </div>
      </div>
    </section>
  );
}