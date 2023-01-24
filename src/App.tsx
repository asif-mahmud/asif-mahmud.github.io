import { Main } from "features/routing";
import { Helmet } from "react-helmet-async";

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "",
  age: 0,
};

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
