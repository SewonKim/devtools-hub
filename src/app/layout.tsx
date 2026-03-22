import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devtools-hub.vercel.app"),
  title: {
    template: "%s | DevTools Hub",
    default: "DevTools Hub - Free Online Developer Tools",
  },
  description:
    "Fast, clean, free online developer tools. JSON Formatter, Base64 Encoder/Decoder, UUID Generator and more. No ads, dark mode, works offline.",
  keywords: [
    "developer tools",
    "online tools",
    "json formatter",
    "base64 decoder",
    "uuid generator",
    "free developer tools",
  ],
  openGraph: {
    type: "website",
    siteName: "DevTools Hub",
    title: "DevTools Hub - Free Online Developer Tools",
    description:
      "Fast, clean, free online developer tools. JSON Formatter, Base64, UUID and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevTools Hub - Free Online Developer Tools",
    description:
      "Fast, clean, free online developer tools. JSON Formatter, Base64, UUID and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
