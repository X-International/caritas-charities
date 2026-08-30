import React from "react";
import CharityShopSlider from "./CharityShopSlider";
import Button from "@/components/ui/Button";

export default function CharityShopSection() {
  return (
    <section className="site-container py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Slider */}
        <div className="lg:col-span-7">
          <CharityShopSlider />
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <p className="text-[#b10017] font-bold text-xs uppercase tracking-widest">
              CHARITY SHOP
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Shop with Purpose, Change Lives.
            </h2>
          </div>
          
          <div className="space-y-4 text-[#4f4f4f] text-base sm:text-lg leading-relaxed">
            <p>
              Our Charity Shop offers quality pre-loved items, handmade crafts, books and more, all at affordable prices. Every purchase helps us support vulnerable people and communities in need.
            </p>
            <p>
              Visit our Charity Shop and be part of work that brings hope and dignity.
            </p>
          </div>

          <div className="pt-2">
            <Button
              href="/get-involved/charity-shop"
              variant="primary"
              size="lg"
            >
              VISIT OUR CHARITY SHOP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
