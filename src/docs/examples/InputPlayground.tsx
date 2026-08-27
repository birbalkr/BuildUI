import { useState } from "react";
import { Input, type InputProps } from "@birbalkr/buildui";
import { CodeBlock } from "../../Components/CodeBlock";

const sizes: NonNullable<InputProps["size"]>[] = ["sm", "md", "lg"];

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
                        type="button"
                        onClick={() => onChange(opt)}
                        className={`flex-1 px-3 py-1.5 font-mono text-xs transition-colors ${value === opt
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

export function InputPlayground() {
    const [label, setLabel] = useState("Username");
    const [placeholder, setPlaceholder] = useState("Enter your username");
    const [size, setSize] = useState<NonNullable<InputProps["size"]>>("md");

    const code = `<Input
  label="${label}"
  placeholder="${placeholder}"
  size="${size}"
/>`;

    return (
        <div className="grid gap-6 rounded-md border border-line bg-paper-raised p-6 lg:grid-cols-[1fr_1.2fr]">
            {/* Controls */}
            <div className="space-y-5">
                {/* Label */}
                <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                        label
                    </span>

                    <input
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink outline-none focus:border-accent"
                    />
                </div>

                {/* Placeholder */}
                <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                        placeholder
                    </span>

                    <input
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)}
                        className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink outline-none focus:border-accent"
                    />
                </div>

                {/* Size */}
                <SegmentedControl
                    label="size"
                    options={sizes}
                    value={size}
                    onChange={setSize}
                />
            </div>

            {/* Preview */}
            <div className="flex flex-col gap-4">
                <div className="bracket flex flex-1 items-center justify-center border border-line-soft bg-paper px-8 py-10">
                    <div className="w-full max-w-md">
                        <Input
                            label={label}
                            placeholder={placeholder}
                            size={size}
                        />
                    </div>
                </div>

                <CodeBlock code={code} label="output" />
            </div>
        </div>
    );
}