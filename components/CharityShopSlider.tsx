"use client";

import ImageSlider, { type SliderSlide } from "./ImageSlider";

const slides: SliderSlide[] = [
  {
    id: 1,
    image: "/images/Charity Shop/Caritas_Kampala_22.jpg",
    alt: "Clothing displayed on racks inside the Caritas Kampala Charity Shop in Nsambya",
  },
  {
    id: 2,
    image: "/images/Charity Shop/Caritas_Kampala_41.jpg",
    alt: "Inside the Second Hand Charity Shop in Nsambya",
  },
  {
    id: 3,
    image: "/images/Charity Shop/Caritas_Kampala_57.jpg",
    alt: "Donated items and clothing arranged at the Charity Shop",
  },
  {
    id: 4,
    image: "/images/Charity Shop/Caritas_Kampala_58.jpg",
    alt: "Shop interior and arrangement at the Caritas Kampala Charity Shop in Nsambya",
  },
  {
    id: 5,
    image: "/images/Charity Shop/Caritas_Kampala_59.jpg",
    alt: "Displayed goods and pre-loved items at the Caritas Kampala Charity Shop",
  },
];

export default function CharityShopSlider() {
  return <ImageSlider slides={slides} label="Charity Shop photo slider" />;
}
