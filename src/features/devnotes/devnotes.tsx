import { Link } from "@tanstack/react-location";

const Links = [
  "setup-database-server-client-using-docker",
  "setup-headless-chrome-service-using-docker",
];

export default function DevNotes() {
  return (
    <>
      <section>
        <h1>Development notes</h1>
        <p>
          These are the development notes I have been taking from 2022. Didn't
          keep the exact dates along with them. Previous ones are not lost in
          the blackhole. I keep these things here cause ease of access from
          anywhere I go. So these are not put that much elborately like a
          properly written blog post or something.
        </p>
      </section>
      <section>
        <h2>Links</h2>
        <ul className="link-list">
          {Links.map((link) => (
            <li key={link}>
              <Link to={`${link}`}>
                {link.charAt(0).toUpperCase() +
                  link.substring(1).replaceAll("-", " ").toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
