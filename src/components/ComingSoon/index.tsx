import style from "./ComingSoon.module.css";
import { Helmet } from "react-helmet";

export default function ComingSoon() {
  return (
    <>
      <Helmet>
        <title>Absurd Me | Coming soon</title>
      </Helmet>
      <div className={style.cs}>
        Coming soon
        <div className={style.csd}>
          <div className={style.d1}>.</div>
          <div className={style.d2}>.</div>
          <div className={style.d3}>.</div>
        </div>
      </div>
    </>
  );
}
