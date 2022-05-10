import { TopBar } from "features/navigation";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {RotatingSquares} from "features/loaders"

const LazyComingSoon = lazy(() => import("./features/loaders/coming-soon"));

export default function App() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Coming soon</title>
      </Helmet>

      <TopBar />

      <main>
        {/* <Suspense fallback={<p>Loading ...</p>}>
          <LazyComingSoon />
        </Suspense> */}
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
          <div style={{width: "100px", height: "100px"}}>

        <RotatingSquares />
          </div>

        </div>
      </main>
    </>
  );
}
