import { CodeBlock } from "./CodeBlock";
import { DocsHeader, DocsPager } from "./DocsHeader";

export function Introduction() {
  return (
    <div>
      <DocsHeader
        eyebrow="Get started"
        title="Introduction"
        description="A small, typed React component library built on Tailwind CSS. Install it, import it, ship it — the styles come with it."
      />

      <div className="space-y-10">
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Install
          </h2>
          <div className="mt-3 max-w-lg space-y-3">
            <CodeBlock
              label="terminal"
              code="npm install @birbalkr/buildui react react-dom"
            />
            <p className="text-sm leading-relaxed text-ink-soft">
              <code className="font-mono text-[13px] text-accent-deep">react</code> and{" "}
              <code className="font-mono text-[13px] text-accent-deep">react-dom</code> are peer
              dependencies — install them if your project doesn't already have them.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Use a component
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
            No CSS import, no Tailwind config to touch. Styles are inlined
            into the JS bundle at build time.
          </p>
          <div className="mt-4 max-w-lg">
            <CodeBlock
              label="app.tsx"
              code={`import { Button } from '@birbalkr/buildui';

function App() {
  return <Button text="Get started" theme="primary" />;
}`}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Requirements
          </h2>
          <ul className="mt-3 max-w-lg space-y-1.5 text-sm leading-relaxed text-ink-soft">
            <li className="flex gap-2.5">
              <span className="font-mono text-accent">—</span> React 18 or later
            </li>
            <li className="flex gap-2.5">
              <span className="font-mono text-accent">—</span> TypeScript 5+ recommended (fully typed, but not required)
            </li>
            <li className="flex gap-2.5">
              <span className="font-mono text-accent">—</span> Any bundler — ESM and CJS both ship
            </li>
          </ul>
        </section>
      </div>

      <DocsPager next={{ href: "/docs/button", label: "Button" }} />
    </div>
  );
}
