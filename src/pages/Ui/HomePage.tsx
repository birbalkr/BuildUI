import { Link } from "react-router";
import { Button } from "@birbalkr/buildui";
import { CodeBlock } from "../../Components/CodeBlock";
import { SpecPanel } from "../../Components/SpecPanel";

const features = [
  {
    label: "01",
    title: "No CSS import",
    body: "Styles are inlined into the JS bundle at build time. Drop in a component, get correct styles — no separate stylesheet to remember.",
  },
  {
    label: "02",
    title: "Fully typed",
    body: "Every prop, every variant, checked at compile time. Autocomplete tells you exactly what a component accepts.",
  },
  {
    label: "03",
    title: "Tailwind native",
    body: "Built with the same utility classes you already write. Override anything with className — nothing fights you.",
  },
  {
    label: "04",
    title: "Tree-shakeable",
    body: "ESM and CJS both ship. Import one component, ship one component — the rest never reaches your bundle.",
  },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              React · TypeScript · Tailwind CSS
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Components,
              <br />
              specified precisely.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              A small, typed React component library for people who already
              have a Tailwind config. Install it, import it, ship it — the
              styles come with it.
            </p>

            <div className="mt-8 max-w-sm">
              <CodeBlock label="install" code="npm install @birbalkr/buildui" />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link to="/docs">
                <Button text="Read the docs" theme="primary" size="md" />
              </Link>
              <a
                href="https://www.npmjs.com/package/@birbalkr/buildui"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-ink-soft transition-colors hover:text-ink"
              >
                view on npm ↗
              </a>
            </div>
          </div>

          <SpecPanel />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Built for the setup you already have
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.label} className="bg-paper-raised p-6">
                <span className="font-mono text-xs text-accent">{f.label}</span>
                <h3 className="mt-3 font-display text-base font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage preview */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Three lines to a styled button
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                No config file to write, no CSS to link. The theme and size
                variants are typed, so your editor tells you what's valid
                before you run anything.
              </p>
              <Link
                to="/docs"
                className="mt-5 inline-block font-mono text-xs text-accent transition-colors hover:text-accent-deep"
              >
                see the full API →
              </Link>
            </div>
            <CodeBlock
              label="app.tsx"
              code={`import { Button } from '@birbalkr/buildui';

function App() {
  return (
    <Button
      text="Get started"
      theme="primary"
      size="md"
    />
  );
}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
