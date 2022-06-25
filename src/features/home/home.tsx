import { PageLinks } from "features/navigation";
import { Helmet } from "react-helmet-async";

import MeJPG from "../../../public/images/me.jpg";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shimon's site | Home</title>
      </Helmet>

      <div className="home">
        <img alt="Oops!" src={MeJPG} />

        <div className="links">
          <PageLinks />
        </div>
      </div>
    </>
  );
}
