import { useState } from "react";

interface CodeBlockProps {
  code: string;
  label?: string;
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="overflow-hidden rounded-md border border-line bg-ink">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
          {label ?? "code"}
        </span>
        <button
          onClick={handleCopy}
          className="font-mono text-[11px] text-white/50 transition-colors hover:text-white"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-relaxed text-white/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
