import { PropTable } from "../../../../Components/PropTable";
import { CodeBlock } from "../../../../Components/CodeBlock";
import { DocsHeader, DocsPager } from "../../../../Components/DocsHeader";
import { AlertPlayground } from "../../../examples/AlertPlayground";

export function AlertDocs() {
  return (
    <div>
      <DocsHeader
        eyebrow="Component"
        title="Alert"
        description="Displays contextual feedback and notifications with different types and sizes. Supports both text and JSX children."
      />

      <div className="space-y-10">
        {/* Playground */}
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Playground
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
            Change the props on the left, watch the real Alert component and
            its output update on the right.
          </p>

          <div className="mt-4">
            <AlertPlayground />
          </div>
        </section>

        {/* Props */}
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Props
          </h2>

          <div className="mt-3">
            <PropTable
              rows={[
                {
                  prop: "text",
                  type: "string",
                  description: "Main alert message displayed above the children.",
                },
                {
                  prop: "type",
                  type:
                    '"success" | "info" | "warning" | "error" | "danger" | "neutral" | "loading" | "announcement" | "update" | "confirmation" | "offline" | "security" | "maintenance"',
                  default: '"info"',
                  description: "Controls the visual style and semantic type of the alert.",
                },
                {
                  prop: "size",
                  type: '"sm" | "md" | "lg"',
                  default: '"md"',
                  description: "Controls the padding and font-size scale.",
                },
                {
                  prop: "children",
                  type: "ReactNode",
                  description:
                    "Optional JSX content rendered below the text.",
                },
                {
                  prop: "className",
                  type: "string",
                  description:
                    "Additional Tailwind or CSS classes applied to the alert.",
                },
                {
                  prop: "...props",
                  type: "HTMLAttributes<HTMLDivElement>",
                  description:
                    "Supports native div attributes such as id, role, aria attributes, and data attributes.",
                },
              ]}
            />
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Examples
          </h2>

          <div className="mt-3 max-w-lg">
            <CodeBlock
              label="app.tsx"
              code={`<Alert
  text="Changes saved successfully!"
  type="success"
/>

<Alert
  text="Please check your connection."
  type="warning"
  size="sm"
/>

<Alert type="error">
  Something went wrong. Please try again.
</Alert>

<Alert
  text="System maintenance is scheduled."
  type="maintenance"
  size="lg"
/>`}
            />
          </div>
        </section>

        {/* Imperative API */}
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Imperative API
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
            Use the alert API to trigger temporary notifications from
            anywhere in your application.
          </p>

          <div className="mt-3 max-w-lg">
            <CodeBlock
              label="app.tsx"
              code={`import { alert } from "@birbalkr/buildui";

alert.success("Profile updated successfully");

alert.info("New update available");

alert.warning("Your session will expire soon");

alert.error("Unable to save changes");

alert.clear();`}
            />
          </div>
        </section>

        {/* Container */}
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Alert Container
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
            Add AlertContainer once near the root of your application to
            display alerts triggered through the imperative API.
          </p>

          <div className="mt-3 max-w-lg">
            <CodeBlock
              label="main.tsx"
              code={`import {
  AlertContainer,
} from "@birbalkr/buildui";

function App() {
  return (
    <>
      <YourApp />

      <AlertContainer />
    </>
  );
}`}
            />
          </div>
        </section>
      </div>

      <DocsPager
        prev={{ href: "/docs/input", label: "Input" }}
      />
    </div>
  );
}