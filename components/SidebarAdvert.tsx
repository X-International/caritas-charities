'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Automatically expires at the end of November 2026 (Nov 30, 2026 23:59:59 EAT)
const AD_EXPIRATION_DATE = new Date('2026-12-01T00:00:00+03:00');

export default function SidebarAdvert() {
  const [isVisible, setIsVisible] = useState(() => {
    return new Date() < AD_EXPIRATION_DATE;
  });

  useEffect(() => {
    const now = new Date();
    if (now >= AD_EXPIRATION_DATE) {
      const timer = setTimeout(() => setIsVisible(false), 0);
      return () => clearTimeout(timer);
    }

    const msUntilExpiration = AD_EXPIRATION_DATE.getTime() - now.getTime();
    if (msUntilExpiration > 0 && msUntilExpiration < 0x7fffffff) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, msUntilExpiration);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="px-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
          Advertisement
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="relative aspect-[1280/904] w-full overflow-hidden bg-[#1f0e4d]">
          <Image
            src="/images/Miscellany/new_ad.jpeg"
            alt="Advertisement: Viatores Christi and Venture Training Programme"
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
