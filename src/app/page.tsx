import Link from "next/link";
import { getToolsByCategory } from "@/lib/tools";

const categoryIcons: Record<string, string> = {
  Formatters: "{ }",
  Encoders: "B64",
  Generators: "#",
  Converters: "<>",
  Testers: "?=",
};

export default function HomePage() {
  const categories = getToolsByCategory();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Free Online{" "}
          <span className="text-primary">Developer Tools</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Fast, clean, and privacy-friendly. JSON Formatter, Base64 Encoder,
          UUID Generator, and more. No signup. No ads. Works offline.
        </p>
      </section>

      {/* Tool Grid */}
      <section>
        {Object.entries(categories).map(([category, categoryTools]) => (
          <div key={category} className="mb-10">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="font-mono text-primary">
                {categoryIcons[category] || ">"}
              </span>
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-mono text-primary shrink-0 mt-0.5">
                      {tool.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SEO Content */}
      <section className="mt-16 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Why DevTools Hub?
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 text-left mt-6">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Lightning Fast</h3>
            <p>
              Built with Next.js and optimized for speed. Every tool loads
              instantly with zero bloat.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">100% Private</h3>
            <p>
              All processing happens in your browser. Your data never leaves
              your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Dark Mode</h3>
            <p>
              Easy on the eyes with automatic dark mode support. Perfect for
              late-night coding sessions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
