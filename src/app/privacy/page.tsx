import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DevTools Hub.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
        <p>Last updated: March 2026</p>

        <h2 className="text-base font-semibold text-foreground pt-2">
          Data Processing
        </h2>
        <p>
          All tools on DevTools Hub process data entirely within your web
          browser. No input data (JSON, Base64 strings, UUIDs, etc.) is ever
          transmitted to our servers or any third party. Your data stays on your
          device.
        </p>

        <h2 className="text-base font-semibold text-foreground pt-2">
          Analytics
        </h2>
        <p>
          We use Google Analytics to understand how visitors use our site. This
          collects anonymized usage data such as page views, browser type, and
          general location (country level). No personally identifiable
          information is collected.
        </p>

        <h2 className="text-base font-semibold text-foreground pt-2">
          Cookies
        </h2>
        <p>
          We use minimal cookies: a theme preference (light/dark mode) stored in
          localStorage, and cookies set by Google Analytics for usage tracking.
        </p>

        <h2 className="text-base font-semibold text-foreground pt-2">
          Advertising
        </h2>
        <p>
          We may display ads through Google AdSense to support the free
          operation of this site. Google may use cookies to serve ads based on
          your prior visits. You can opt out of personalized advertising by
          visiting Google&apos;s Ads Settings.
        </p>

        <h2 className="text-base font-semibold text-foreground pt-2">
          Third-Party Services
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics — usage analytics</li>
          <li>Google AdSense — advertising (when applicable)</li>
          <li>Vercel — hosting and CDN</li>
        </ul>

        <h2 className="text-base font-semibold text-foreground pt-2">
          Changes
        </h2>
        <p>
          We may update this privacy policy from time to time. Changes will be
          posted on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
