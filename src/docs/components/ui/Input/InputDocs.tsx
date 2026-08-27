import { Input } from "@birbalkr/buildui";
import { PropTable } from "../../../../Components/PropTable";
import { CodeBlock } from "../../../../Components/CodeBlock";
import { DocsHeader, DocsPager } from "../../../../Components/DocsHeader";
import { InputPlayground } from "../../../examples/InputPlayground";

export function InputDocs() {
  return (
    <div>
      <DocsHeader
        eyebrow="Component"
        title="Input"
        description="A labeled text field with a built-in error state. Extends every native input attribute."
      />

      <div className="space-y-10">
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Playground
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
            Change the props on the left, watch the real component and its
            output update on the right.
          </p>
          <div className="mt-4">
            <InputPlayground />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Examples
          </h2>
          <div className="mt-3 grid gap-6 rounded-md border border-line bg-paper-raised p-6 sm:grid-cols-2">
            <Input label="Email" placeholder="you@example.com" size="md" />
            <Input
              label="Username"
              placeholder="taken"
              error="This username is already taken"
              size="md"
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Sizes
          </h2>
          <div className="mt-3 grid gap-6 rounded-md border border-line bg-paper-raised p-6 sm:grid-cols-3">
            <Input label="Small" placeholder="sm" size="sm" />
            <Input label="Medium" placeholder="md" size="md" />
            <Input label="Large" placeholder="lg" size="lg" />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Props
          </h2>
          <div className="mt-3">
            <PropTable
              rows={[
                { prop: "label", type: "string", description: "Field label rendered above the input." },
                { prop: "error", type: "string", description: "Error message; also styles the border red." },
                { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Padding and font-size scale." },
                { prop: "...props", type: "InputHTMLAttributes", description: "value, onChange, disabled, type, etc." },
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Usage
          </h2>
          <div className="mt-3 max-w-lg">
            <CodeBlock
              label="app.tsx"
              code={`import { Input } from '@birbalkr/buildui';

<Input
  label="Email"
  placeholder="you@example.com"
/>`}
            />
          </div>
        </section>
      </div>

      <DocsPager prev={{ href: "/docs/button", label: "Button" }}
        next={{ href: "/docs/alert", label: "Alert" }} />
    </div>
  );
}
