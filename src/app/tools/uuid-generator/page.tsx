import type { Metadata } from "next";
import { UuidClient } from "./client";

export const metadata: Metadata = {
  title: "UUID Generator Online - Generate UUID v4",
  description:
    "Generate random UUIDs (v4) instantly. Bulk generate up to 100 UUIDs with customizable format options. Free online UUID/GUID generator.",
  keywords: [
    "uuid generator",
    "uuid v4 generator",
    "guid generator",
    "bulk uuid generator",
    "random uuid",
    "uuid online",
  ],
  openGraph: {
    title: "UUID Generator Online | DevTools Hub",
    description:
      "Generate random UUIDs (v4) instantly. Bulk generate up to 100 UUIDs for free.",
  },
};

export default function UuidGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">UUID Generator</h1>
        <p className="text-muted-foreground">
          Generate random UUIDs (v4) instantly. Bulk generate up to 100 at once.
        </p>
      </div>

      <UuidClient />

      <section className="mt-12 prose prose-sm max-w-none text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">
          What is a UUID?
        </h2>
        <p>
          A UUID (Universally Unique Identifier) is a 128-bit identifier that is
          unique across all devices and time. UUID v4 uses random numbers, making
          collisions virtually impossible. UUIDs are commonly used as database
          primary keys, session tokens, and unique identifiers in distributed
          systems.
        </p>
        <h2 className="text-lg font-semibold text-foreground mt-6">
          Features
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Generate UUID v4 (random) instantly</li>
          <li>Bulk generate up to 100 UUIDs at once</li>
          <li>Toggle uppercase / lowercase format</li>
          <li>Toggle hyphens on / off</li>
          <li>Copy single UUID or all UUIDs with one click</li>
          <li>Generated entirely in your browser using crypto.randomUUID()</li>
        </ul>
      </section>
    </div>
  );
}
