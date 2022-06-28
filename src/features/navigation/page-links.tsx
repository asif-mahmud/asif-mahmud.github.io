import RouterLink from "./router-link";

export default function PageLinks() {
  return (
    <>
      <RouterLink to="/" label="Home" />
      <RouterLink to="/about" label="About" />
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
      <RouterLink to="/devnotes" label="Dev notes" />
      <RouterLink to="/exploits" label="Exploits" />
    </>
  );
}
