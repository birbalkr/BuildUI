interface Row {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

export function PropTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-paper-raised">
            <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              Prop
            </th>
            <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              Type
            </th>
            <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              Default
            </th>
            <th className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.prop}
              className={i !== rows.length - 1 ? "border-b border-line-soft" : ""}
            >
              <td className="px-4 py-2.5 font-mono text-[13px] text-accent-deep">
                {r.prop}
              </td>
              <td className="px-4 py-2.5 font-mono text-[13px] text-ink-soft">
                {r.type}
              </td>
              <td className="px-4 py-2.5 font-mono text-[13px] text-ink-soft">
                {r.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 text-[13px] leading-relaxed text-ink-soft">
                {r.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
