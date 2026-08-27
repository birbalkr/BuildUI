import { Link } from "react-router";

export function DocsHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        {description}
      </p>
    </div>
  );
}

export function DocsPager({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-line pt-6">
      {prev ? (
        <Link
          to={prev.href}
          className="group font-mono text-xs text-ink-soft transition-colors hover:text-ink"
        >
          <span className="mr-1.5 inline-block transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next.href}
          className="group font-mono text-xs text-ink-soft transition-colors hover:text-ink"
        >
          {next.label}
          <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
