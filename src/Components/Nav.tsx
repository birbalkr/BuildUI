import { Link, useLocation } from "react-router";
// import logo from "../../ass/logo.png";
import logo1 from "../assets/logo1.png";

export function Nav() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      pathname === path
        ? "text-ink"
        : "text-ink-soft hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-10 justify-center items-center pb-10">
            <img src={logo1} alt="logo" className="h-20"/>
          </div>
        </Link>

        <nav className="flex items-center gap-7">
          <Link to="/docs" className={linkClass("/docs")}>
            Docs
          </Link>
          <a
            href="https://www.npmjs.com/package/@birbalkr/buildui"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            npm
          </a>
          <a
            href="https://github.com/birbalkr/buildui-npm"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <Link
            to="/docs"
            className="rounded-md bg-ink px-4 py-2 font-mono text-xs font-medium text-paper transition-colors hover:bg-accent-deep"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
