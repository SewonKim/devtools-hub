"use client";

import { useState } from "react";

const SAMPLE_JSON = `{
  "name": "DevTools Hub",
  "version": "1.0.0",
  "tools": ["JSON Formatter", "Base64", "UUID"],
  "features": {
    "darkMode": true,
    "offline": true
  }
}`;

export function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const format = () => {
    if (!input.trim()) {
      setError("Please enter JSON data.");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid JSON";
      setError(msg);
      setOutput("");
    }
  };

  const minify = () => {
    if (!input.trim()) {
      setError("Please enter JSON data.");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid JSON";
      setError(msg);
      setOutput("");
    }
  };

  const validate = () => {
    if (!input.trim()) {
      setError("Please enter JSON data.");
      return;
    }
    try {
      JSON.parse(input);
      setError("");
      setOutput("Valid JSON!");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid JSON";
      setError(msg);
      setOutput("");
    }
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const loadSample = () => {
    setInput(SAMPLE_JSON);
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={format}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Format
        </button>
        <button
          onClick={validate}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:opacity-80 transition-opacity border border-border"
        >
          Validate
        </button>
        <button
          onClick={minify}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:opacity-80 transition-opacity border border-border"
        >
          Minify
        </button>
        <button
          onClick={copy}
          disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:opacity-80 transition-opacity border border-border disabled:opacity-40"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          onClick={clear}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:opacity-80 transition-opacity border border-border"
        >
          Clear
        </button>
        <button
          onClick={loadSample}
          className="px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground transition-colors"
        >
          Load Sample
        </button>

        <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
          <label htmlFor="indent">Indent:</label>
          <select
            id="indent"
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="bg-accent border border-border rounded px-2 py-1 text-sm text-foreground"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
          </select>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-mono">
          {error}
        </div>
      )}

      {/* Editor */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-muted-foreground">
            Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            className="w-full h-80 p-4 rounded-lg bg-card border border-border text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-primary/50"
            spellCheck={false}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-muted-foreground">
            Output
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here..."
            className="w-full h-80 p-4 rounded-lg bg-muted border border-border text-sm font-mono resize-y focus:outline-none"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
