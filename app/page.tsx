import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caritas Kampala Charities Department",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  );
}
