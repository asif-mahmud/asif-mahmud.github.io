import { Code } from "features/code";

export default function SetupDatabaseServerClientUsingDocker() {
  return (
    <>
      <h1>Setting up database server and client using docker</h1>
      <section>
        <h2>PostgreSQL</h2>
        <Code>
          sudo docker run --name postgres-image -p 5432:5432 -e
          POSTGRES_PASSWORD=root --restart always -d postgres
        </Code>
      </section>
      <section>
        <h2>MySQL</h2>
        <p>(with volume mounted to use host's files)</p>
        <Code>
          sudo docker run --name mysql-image --restart always -p 3306:3306 -e
          MYSQL_ROOT_PASSWORD=root --volume /home/shimon:/mnt/shimon -d mysql
        </Code>
        <p>using bash in mysql image -</p>
        <Code>sudo docker exec -it mysql-image bash</Code>
      </section>
      <section>
        <h2>Adminer (SQL client)</h2>
        <Code>
          sudo docker run --link postgres-image:postgres-image --link
          mysql-image:mysql-image --restart always -p 9000:8080 -e
          ADMINER_DESIGN=pepa-linha -d adminer
        </Code>
      </section>
    </>
  );
}
