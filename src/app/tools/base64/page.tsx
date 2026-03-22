import type { Metadata } from "next";
import { Base64Client } from "./client";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder Online",
  description:
    "Encode and decode Base64 strings online for free. Supports text and file conversion with instant results. No signup required.",
  keywords: [
    "base64 decode",
    "base64 encode",
    "base64 decoder",
    "base64 encoder",
    "base64 online",
    "base64 converter",
  ],
  openGraph: {
    title: "Base64 Encoder / Decoder Online | DevTools Hub",
    description:
      "Encode and decode Base64 strings online for free. Instant results with no signup.",
  },
};

export default function Base64Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Base64 Encoder / Decoder
        </h1>
        <p className="text-muted-foreground">
          Encode text to Base64 or decode Base64 strings instantly.
        </p>
      </div>

      <Base64Client />

      <section className="mt-12 prose prose-sm max-w-none text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">
          What is Base64?
        </h2>
        <p>
          Base64 is a binary-to-text encoding scheme that represents binary data
          in an ASCII string format. It is commonly used to embed images in
          HTML/CSS, transmit data over text-based protocols like email (MIME),
          and encode authentication credentials in HTTP headers.
        </p>
        <h2 className="text-lg font-semibold text-foreground mt-6">
          Features
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Encode text to Base64 instantly</li>
          <li>Decode Base64 strings back to plain text</li>
          <li>File to Base64 conversion with Data URI output</li>
          <li>Copy result to clipboard with one click</li>
          <li>100% client-side — your data never leaves your browser</li>
        </ul>
      </section>
    </div>
  );
}
