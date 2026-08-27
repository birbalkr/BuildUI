import { useState } from "react";
import {
    Alert,
    type AlertProps,
} from "@birbalkr/buildui";
import { CodeBlock } from "../../Components/CodeBlock";

const types: NonNullable<AlertProps["type"]>[] = [
    "success",
    "info",
    "warning",
    "error",
    "danger",
    "neutral",
    "loading",
    "announcement",
    "update",
    "confirmation",
    "offline",
    "security",
    "maintenance",
];

const sizes: NonNullable<AlertProps["size"]>[] = ["sm", "md", "lg"];

function SegmentedControl<T extends string>({
    label,
    options,
    value,
    onChange,
}: {
    label: string;
    options: T[];
    value: T;
    onChange: (value: T) => void;
}) {
    return (
        <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                {label}
            </span>

            <div className="mt-2 flex flex-wrap overflow-hidden rounded-md border border-line">
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onChange(option)}
                        className={`px-3 py-1.5 font-mono text-xs transition-colors ${value === option
                                ? "bg-ink text-paper"
                                : "bg-paper-raised text-ink-soft hover:text-ink"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export function AlertPlayground() {
    const [type, setType] =
        useState<NonNullable<AlertProps["type"]>>("success");

    const [size, setSize] =
        useState<NonNullable<AlertProps["size"]>>("md");

    const [text, setText] = useState("Success! Your changes were saved.");

    const code = `<Alert
  text="${text}"
  type="${type}"
  size="${size}"
/>`;

    return (
        <div className="grid gap-6 rounded-md border border-line bg-paper-raised p-6 lg:grid-cols-[1fr_1.2fr]">

            {/* Controls */}
            <div className="space-y-5">

                {/* Text */}
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

                {/* Type */}
                <SegmentedControl
                    label="type"
                    options={types}
                    value={type}
                    onChange={setType}
                />

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

                <div className="bracket flex flex-1 items-center justify-center border border-line-soft bg-paper p-10">
                    <Alert
                        text={text || "Alert message"}
                        type={type}
                        size={size}
                    />
                </div>

                <CodeBlock
                    code={code}
                    label="output"
                />
            </div>
        </div>
    );
}