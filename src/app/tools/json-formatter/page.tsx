import type { Metadata } from "next";
import { JsonFormatterClient } from "./client";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator Online",
  description:
    "Format, validate, and minify JSON data instantly. Free online JSON beautifier with syntax highlighting and error detection. No signup required.",
  keywords: [
    "json formatter",
    "json formatter online",
    "json beautifier",
    "json validator",
    "json minify",
    "format json",
    "json pretty print",
  ],
  openGraph: {
    title: "JSON Formatter & Validator Online | DevTools Hub",
    description:
      "Format, validate, and minify JSON data instantly. Free online JSON beautifier with error detection.",
  },
};

export default function JsonFormatterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          JSON Formatter & Validator
        </h1>
        <p className="text-muted-foreground">
          Paste your JSON below to format, validate, or minify it instantly.
        </p>
      </div>

      <JsonFormatterClient />

      <section className="mt-12 prose prose-sm max-w-none text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">
          What is JSON Formatter?
        </h2>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data format used
          for data exchange between servers and web applications. A JSON
          formatter takes raw or minified JSON and adds proper indentation and
          line breaks, making it easy to read and debug. Our tool also validates
          your JSON and shows exactly where errors occur.
        </p>
        <h2 className="text-lg font-semibold text-foreground mt-6">
          Features
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Format / beautify JSON with customizable indentation (2 or 4 spaces)</li>
          <li>Validate JSON and highlight errors with line numbers</li>
          <li>Minify / compress JSON to reduce size</li>
          <li>Copy result to clipboard with one click</li>
          <li>Works entirely in your browser — no data sent to servers</li>
        </ul>
      </section>
    </div>
  );
}
