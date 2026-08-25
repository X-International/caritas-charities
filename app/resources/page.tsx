import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Resources | Caritas Kampala Charities Office",
  description:
    "Explore news, photo gallery, publications, and FAQs from the Charities Office of Caritas Kampala.",
  path: "/resources",
});

export default function ResourcesIndexPage() {
  redirect("/resources/news");
}
