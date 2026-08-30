export interface EventItem {
  id: string;
  title: string;
  category: string;
  description: string;
  dateStr: string; // "YYYY-MM-DD"
  timeString: string;
  location: string;
  image: string;
  imageAlt: string;
}

export const initialEvents: EventItem[] = [
  {
    id: "breakfast-meeting-2026",
    title: "Breakfast Meeting",
    category: "MEETING",
    description:
      "A morning gathering to share updates, strengthen collaboration, and discuss priorities for the work ahead.",
    dateStr: "2026-11-13",
    timeString: "8:00 AM – 10:00 AM",
    location: "Caritas Kampala Offices",
    image: "/images/Event 06/Caritas_Kampala_54.jpg",
    imageAlt: "Participants gathered around a meeting table during the Charity Office breakfast meeting",
  },
  {
    id: "chaconet-meeting-2026",
    title: "Chaconet Meeting",
    category: "MEETING",
    description:
      "A meeting for Chaconet partners to review progress, share updates, and strengthen coordination across the network.",
    dateStr: "2026-12-10",
    timeString: "9:00 AM – 12:00 PM",
    location: "Caritas Kampala Offices",
    image: "/images/Event 05/Caritas_Kampala_28.jpg",
    imageAlt: "Chaconet partner representatives attending a coordination meeting at Caritas Kampala",
  },
];
