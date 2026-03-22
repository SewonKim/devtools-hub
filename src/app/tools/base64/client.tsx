"use client";

import { useState, useRef } from "react";

type Mode = "encode" | "decode";

export function Base64Client() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const process = (text: string, m: Mode) => {
    if (!text.trim()) {
      setOutput("");
      setError("");
      return;
    }
    try {
      if (m === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(text))));
      } else {
        setOutput(decodeURIComponent(escape(atob(text.trim()))));
      }
      setError("");
    } catch {
      setError(
        m === "encode"
          ? "Failed to encode. Check your input."
          : "Invalid Base64 string."
      );
      setOutput("");
    }
  };

  const handleInput = (value: string) => {
    setInput(value);
    process(value, mode);
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setInput("");
    setOutput("");
    setError("");
  };

  const swap = () => {
    const newMode = mode === "encode" ? "decode" : "encode";
    const newInput = output;
    setMode(newMode);
    setInput(newInput);
    process(newInput, newMode);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setInput(`[File: ${file.name}]`);
      setOutput(result);
      setError("");
    };
    reader.readAsDataURL(file);
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
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="space-y-4">
      {/* Mode tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => switchMode("encode")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === "encode"
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground border border-border hover:opacity-80"
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => switchMode("decode")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === "decode"
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground border border-border hover:opacity-80"
          }`}
        >
          Decode
        </button>
        <button
          onClick={swap}
          disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground border border-border hover:opacity-80 transition-opacity disabled:opacity-40"
        >
          Swap
        </button>
        <button
          onClick={copy}
          disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground border border-border hover:opacity-80 transition-opacity disabled:opacity-40"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          onClick={clear}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground border border-border hover:opacity-80 transition-opacity"
        >
          Clear
        </button>
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm text-muted-foreground mb-1">
          Or upload a file to encode:
        </label>
        <input
          ref={fileRef}
          type="file"
          onChange={handleFile}
          className="text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border file:border-border file:text-sm file:bg-accent file:text-accent-foreground hover:file:opacity-80"
        />
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
            {mode === "encode" ? "Plain Text" : "Base64 String"}
          </label>
          <textarea
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Enter text to encode..."
                : "Enter Base64 string to decode..."
            }
            className="w-full h-64 p-4 rounded-lg bg-card border border-border text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-primary/50"
            spellCheck={false}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-muted-foreground">
            {mode === "encode" ? "Base64 Output" : "Decoded Text"}
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="Result will appear here..."
            className="w-full h-64 p-4 rounded-lg bg-muted border border-border text-sm font-mono resize-y focus:outline-none"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
