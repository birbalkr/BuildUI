import { Button } from "@birbalkr/buildui";

function Callout({
  className,
  align = "left",
  children,
}: {
  className: string;
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div className={`absolute flex items-center gap-2 ${className}`}>
      {align === "left" && <span className="h-px w-6 bg-line" />}
      <span className="whitespace-nowrap font-mono text-[11px] text-ink-soft">
        {children}
      </span>
      {align === "right" && <span className="h-px w-6 bg-line" />}
    </div>
  );
}

export function SpecPanel() {
  return (
    <div className="bracket relative mx-auto flex h-72 w-full max-w-md items-center justify-center border border-line bg-paper-raised sm:h-80">
      <span className="absolute left-4 top-3 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
        fig. 01 — button/primary
      </span>
      <span className="absolute right-4 top-3 font-mono text-[11px] text-ink-soft">
        01
      </span>

      <div className="relative">
        <Button text="Get started" theme="primary" size="lg" />

        <Callout className="-top-9 left-1/2 -translate-x-1/2" align="left">
          theme: "primary"
        </Callout>
        <Callout className="-bottom-9 left-1/2 -translate-x-1/2" align="left">
          size: "lg"
        </Callout>
        <Callout className="left-[-9.5rem] top-1/2 -translate-y-1/2" align="right">
          rounded-md
        </Callout>
        <Callout className="right-[-8.5rem] top-1/2 -translate-y-1/2" align="left">
          onClick, disabled…
        </Callout>
      </div>

      <span className="absolute bottom-3 left-4 font-mono text-[11px] text-ink-soft">
        @birbalkr/buildui
      </span>
      <span className="absolute bottom-3 right-4 font-mono text-[11px] text-ink-soft">
        1:1
      </span>
    </div>
  );
}
