import { Suspense } from "features/loaders";
import { TopBar } from "features/navigation";
import { Helmet } from "react-helmet-async";

const LazyComingSoon = async () => import("./features/loaders/coming-soon");

export default function App() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Coming soon</title>
      </Helmet>

      <TopBar />

      <main>
        <Suspense>{LazyComingSoon}</Suspense>
      </main>
    </>
  );
}
