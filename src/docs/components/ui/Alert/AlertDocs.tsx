import { PropTable } from "../../../../Components/PropTable";
import { ButtonPlayground } from "../../../examples/ButtonPlayground";
import { CodeBlock } from "../../../../Components/CodeBlock";
import { DocsHeader, DocsPager } from "../../../../Components/DocsHeader";

export function AlertDocs() {
  return (
    <div>
      <DocsHeader
        eyebrow="Component"
        title="Button"
        description={
          'Accepts either a text prop or JSX children — children take priority when both are given. Extends every native <button> attribute.'
        }
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
            <ButtonPlayground />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Props
          </h2>
          <div className="mt-3">
            <PropTable
              rows={[
                { prop: "text", type: "string", description: "Button label. Ignored if children is provided." },
                { prop: "theme", type: '"primary" | "secondary" | "tertiary"', default: '"primary"', description: "Visual color treatment." },
                { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Padding and font-size scale." },
                { prop: "children", type: "ReactNode", description: "Overrides text when present." },
                { prop: "...props", type: "ButtonHTMLAttributes", description: "onClick, disabled, className, type, etc." },
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Examples
          </h2>
          <div className="mt-3 max-w-lg">
            <CodeBlock
              label="app.tsx"
              code={`<Button text="Save changes" theme="primary" />
<Button theme="secondary" size="sm">Cancel</Button>
<Button theme="tertiary" disabled>Unavailable</Button>`}
            />
          </div>
        </section>
      </div>

      <DocsPager
        prev={{ href: "/docs", label: "Introduction" }}
        next={{ href: "/docs/input", label: "Input" }}
      />
    </div>
  );
}
