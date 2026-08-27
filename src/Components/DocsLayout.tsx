import { Link, Outlet, useLocation } from "react-router-dom";

const nav = [
  {
    heading: "Get started",
    items: [{ href: "/docs", label: "Introduction" }],
  },
  {
    heading: "Components",
    items: [
      { href: "/docs/button", label: "Button" },
      { href: "/docs/input", label: "Input" },
    ],
  },
];

export function DocsLayout() {
  const { pathname } = useLocation();

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-7">
            {nav.map((group) => (
              <div key={group.heading}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {group.heading}
                </p>
                <div className="mt-2 space-y-0.5">
                  {group.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`block rounded px-2 py-1.5 font-mono text-xs transition-colors ${
                          active
                            ? "bg-line-soft text-ink"
                            : "text-ink-soft hover:bg-line-soft hover:text-ink"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
