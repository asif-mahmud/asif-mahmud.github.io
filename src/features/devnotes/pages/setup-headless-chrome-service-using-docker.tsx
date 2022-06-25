import { Code } from "features/code";

export default function SetupHeadlessChromeServiceUsingDocker() {
  return (
    <>
      <h1>Running headless chrome as a background browser service</h1>
      <section>
        <h2>Source</h2>
        <p>
          Dockerhub link -{"  "}
          <a
            href="https://hub.docker.com/r/browserless/chrome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://hub.docker.com/r/browserless/chrome/
          </a>
        </p>
      </section>
      <section>
        <h2>Setup</h2>
        <p>
          Run the following command to start a docker image to run headless
          chrome service -
        </p>
        <Code>
          sudo docker run -p 3003:3000 --restart always browserless/chrome
        </Code>
      </section>
    </>
  );
}
