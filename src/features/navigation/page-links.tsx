import { Link } from "@tanstack/react-location";

export default function PageLinks() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <a
        href="https://github.com/asif-mahmud"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="https://gitlab.com/gSwag/emacs-configuration"
        target="_blank"
        rel="noopener noreferrer"
      >
        Emacs config
      </a>
      <Link to="/devnotes">Dev notes</Link>
      <Link to="/exploits">Exploits</Link>
    </>
  );
}
