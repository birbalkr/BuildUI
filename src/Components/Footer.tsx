export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-soft">
          @birbalkr/buildui — MIT licensed
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.npmjs.com/package/@birbalkr/buildui"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-ink-soft transition-colors hover:text-ink"
          >
            npm ↗
          </a>
          <a
            href="https://github.com/birbalkr/buildui-npm"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-ink-soft transition-colors hover:text-ink"
          >
            github ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
