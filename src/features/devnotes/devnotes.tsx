import { RouterLink } from "features/navigation";

const Links = [
  "setup-database-server-client-using-docker",
  "setup-headless-chrome-service-using-docker",
  "monorepo-with-npm-workspaces-and-turborepo",
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
              <RouterLink
                to={`/devnotes/${link}`}
                label={
                  link.charAt(0).toUpperCase() +
                  link.substring(1).replaceAll("-", " ").toLowerCase()
                }
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
