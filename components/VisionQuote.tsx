import React from 'react';
import { Heading } from '@/components/ui/Typography';

export default function VisionQuote() {
  return (
    <section className="bg-[#f4efe6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} variant="card" color="red" className="text-sm font-bold uppercase tracking-[0.2em] mb-6 font-sans">
          OUR VISION
        </Heading>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-snug italic mb-8">
          &quot;A self-sustaining family of God built on love, solidarity, and reconciliation.&quot;
        </blockquote>
        <p className="text-gray-600 font-medium">
          Charities Office, Caritas Kampala
        </p>
      </div>
    </section>
  );
}
