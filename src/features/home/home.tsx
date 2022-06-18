import { Link } from "@tanstack/react-location";
import { Helmet } from "react-helmet-async";

import MeJPG from "../../../public/images/me.jpg";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Home</title>
      </Helmet>

      <div className="home">
        <img alt="Oops!" src={MeJPG} />

        <div className="links">
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
        </div>
      </div>
    </>
  );
}
