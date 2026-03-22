import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About DevTools Hub - free online developer tools.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">About DevTools Hub</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          DevTools Hub is a collection of free online tools built for developers
          and designers. Our goal is to provide fast, clean, and
          privacy-friendly utilities that you can use every day.
        </p>
        <p>
          Every tool runs entirely in your browser. We never send your data to
          any server. Your code, your data, your privacy.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-4">
          Our Principles
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Speed first</strong> — Every
            tool is optimized for instant loading and real-time processing.
          </li>
          <li>
            <strong className="text-foreground">Privacy by default</strong> —
            All processing happens client-side. No data is ever transmitted.
          </li>
          <li>
            <strong className="text-foreground">No clutter</strong> — Clean
            interface with minimal distractions so you can focus on your work.
          </li>
          <li>
            <strong className="text-foreground">Always free</strong> — Core
            tools will always be free to use with no signup required.
          </li>
        </ul>
        <h2 className="text-lg font-semibold text-foreground pt-4">Contact</h2>
        <p>
          Have feedback or suggestions? We&apos;d love to hear from you. Reach
          out via GitHub or email.
        </p>
      </div>
    </div>
  );
}
