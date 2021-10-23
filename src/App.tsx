import {lazy, Suspense} from "react";
import { Helmet } from "react-helmet-async";
import PageLoading from "./components/PageLoading";

const LazyComingSoon = lazy(() => import("./components/ComingSoon"));

export default function App() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Coming soon</title>
      </Helmet>
      <Suspense fallback={<PageLoading />}>
        <LazyComingSoon/>
      </Suspense>
    </>
  );
}
