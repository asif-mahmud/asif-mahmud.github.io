import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
// import PageLoading from "./components/PageLoading";

const LazyComingSoon = lazy(() => import("./features/loaders/coming-soon"));

export default function App() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Coming soon</title>
      </Helmet>
      <Suspense fallback={<p>Loading ...</p>}>
        <LazyComingSoon />
      </Suspense>
    </>
  );
}
