import { Main } from "features/routing";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Coming soon</title>
      </Helmet>

      <Main />
    </>
  );
}
