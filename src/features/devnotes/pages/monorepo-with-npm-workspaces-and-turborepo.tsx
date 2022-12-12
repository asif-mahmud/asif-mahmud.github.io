import { Code } from "features/code";

export default function MonoRepoWithNPMWorkspaceAndTurborepo() {
  return (
    <>
      <h1>Creating monorepo projects with NPM workspaces and turborepo</h1>
      <section>
        <h2>Requirements</h2>
        <p>
          You will need npm version{" "}
          <a href="https://docs.npmjs.com/about-npm">NPM</a>
          which is available with node installer or comes as a built-in package
          manager with node. Rest is pretty simple.
        </p>
        <p>
          At the time of this writing, i've been using node version{" "}
          <b>18.3.0</b> and npm version <b>8.11.0</b>.
        </p>
      </section>
      <section>
        <h2>Setting up</h2>
        <p>Start a project-</p>
        <Code>npm init</Code>
        <p>
          Add <a href="https://turbo.build/repo">turborepo</a> to the repo-
        </p>
        <Code>npm i -D turbo</Code>
        <p>
          Create one or more folders to add projects (here <b>packages</b>{" "}
          folder) in-
        </p>
        <Code>mkdir -pv packages</Code>
        <p>
          Add the folder/s as workspace folders. To do that open up the{" "}
          <b>project.json</b> file and add the following (ofcourse change the
          path as you need)-
        </p>
        <Code>"workspaces": ["packages/*"]</Code>
        <p>
          Create a turborepo config file. Sample can be found{" "}
          <a href="https://turbo.build/repo/docs/getting-started/existing-monorepo#create-a-pipeline">
            here
          </a>
          . Copy the contents in a file named <b>turbo.json</b> at the root of
          the repo folder.
        </p>
      </section>
      <section>
        <h2>Create a project</h2>
        <p>
          Assuming the workspaces folder is named as <b>packages</b>, you can
          add new projects under it by-
        </p>
        <Code>npm init -w packages/new-project</Code>
        Replace <i>new-project</i> with the project name.
      </section>
      <section>
        <h2>Package management</h2>
        <p>
          To add/remove packages to a workspace add <code>-w new-project</code>
          with each npm install/uninstall command. Replace <i>
            new-project
          </i>{" "}
          with project name.
        </p>
      </section>
      <section>
        <h2>npx</h2>
        <p>
          Good news is <b>npx</b> command also respects{" "}
          <code>-w new-project</code>
          flag. So you can run commands inside a project folder without actually
          moving into that project folder. <code>npx</code> will take care of
          current path.
        </p>
      </section>
      <section>
        <h2>Adding turbo commands to scripts option</h2>
        <p>You can run turbo's commands/pipelines like this-</p>
        <Code>npx turbo build</Code>
        <code>build</code> being the command/pipeline of turbo.
        <p>
          Another way is to add <code>turbo build</code> or similar commands at
          the <b>scripts</b> options of <b>package.json</b> file and run them
          with <code>npm run build</code> type commands.
        </p>
      </section>
    </>
  );
}
