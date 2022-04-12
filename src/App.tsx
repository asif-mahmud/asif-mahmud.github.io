import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { RotatingSquares } from "features/loaders";
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
      {/* <div */}
      {/*   style={{ */}
      {/*     width: "100px", */}
      {/*     height: "100px", */}
      {/*     marginLeft: "50px", */}
      {/*     marginTop: "50px", */}
      {/*   }} */}
      {/* > */}
      {/*   <div style={{ width: "70px", height: "70px" }}> */}
      {/*     <RotatingSquares /> */}
      {/*   </div> */}
      {/* </div> */}
    </>
  );
}
