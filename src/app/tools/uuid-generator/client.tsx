"use client";

import { useState, useCallback } from "react";

export function UuidClient() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [copied, setCopied] = useState<number | "all" | null>(null);

  const generate = useCallback(() => {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      let uuid = crypto.randomUUID();
      if (!hyphens) uuid = uuid.replace(/-/g, "");
      if (uppercase) uuid = uuid.toUpperCase();
      result.push(uuid);
    }
    setUuids(result);
  }, [count, uppercase, hyphens]);

  const copyOne = async (uuid: string, index: number) => {
    await navigator.clipboard.writeText(uuid);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopied("all");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        <button
          onClick={generate}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Generate
        </button>
        <button
          onClick={copyAll}
          disabled={uuids.length === 0}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground border border-border hover:opacity-80 transition-opacity disabled:opacity-40"
        >
          {copied === "all" ? "Copied!" : "Copy All"}
        </button>

        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="count" className="text-muted-foreground">
            Count:
          </label>
          <input
            id="count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) =>
              setCount(Math.max(1, Math.min(100, Number(e.target.value))))
            }
            className="w-20 px-2 py-1 rounded border border-border bg-card text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <label className="flex items-center gap-1.5 text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
            className="rounded"
          />
          Uppercase
        </label>

        <label className="flex items-center gap-1.5 text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={hyphens}
            onChange={(e) => setHyphens(e.target.checked)}
            className="rounded"
          />
          Hyphens
        </label>
      </div>

      {/* Results */}
      {uuids.length > 0 && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="max-h-96 overflow-y-auto">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-2 border-b border-border last:border-b-0 hover:bg-accent/50 transition-colors group"
              >
                <span className="font-mono text-sm break-all">{uuid}</span>
                <button
                  onClick={() => copyOne(uuid, i)}
                  className="ml-3 px-2 py-1 text-xs rounded bg-accent text-muted-foreground hover:text-foreground border border-border opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                >
                  {copied === i ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {uuids.length === 0 && (
        <div className="rounded-lg border border-border bg-muted p-12 text-center text-muted-foreground text-sm">
          Click &quot;Generate&quot; to create UUIDs.
        </div>
      )}
    </div>
  );
}
