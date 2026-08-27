import { useState } from "react";
import { Button, type ButtonProps } from "@birbalkr/buildui";
import { CodeBlock } from "../../Components/CodeBlock";

const themes: NonNullable<ButtonProps["theme"]>[] = [
  "primary",
  "secondary",
  "tertiary",
];
const sizes: NonNullable<ButtonProps["size"]>[] = ["sm", "md", "lg"];

function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      <div className="mt-2 flex overflow-hidden rounded-md border border-line">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`flex-1 px-3 py-1.5 font-mono text-xs transition-colors ${
              value === opt
                ? "bg-ink text-paper"
                : "bg-paper-raised text-ink-soft hover:text-ink"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ButtonPlayground() {
  const [theme, setTheme] = useState<NonNullable<ButtonProps["theme"]>>(
    "primary"
  );
  const [size, setSize] = useState<NonNullable<ButtonProps["size"]>>("md");
  const [text, setText] = useState("Click me");

  const code = `<Button
  text="${text}"
  theme="${theme}"
  size="${size}"
/>`;

  return (
    <div className="grid gap-6 rounded-md border border-line bg-paper-raised p-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-5">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
            text
          </span>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink outline-none focus:border-accent"
          />
        </div>
        <SegmentedControl label="theme" options={themes} value={theme} onChange={setTheme} />
        <SegmentedControl label="size" options={sizes} value={size} onChange={setSize} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="bracket flex flex-1 items-center justify-center border border-line-soft bg-paper py-10">
          <Button text={text || "Button"} theme={theme} size={size} />
        </div>
        <CodeBlock code={code} label="output" />
      </div>
    </div>
  );
}
