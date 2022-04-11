import { Helmet } from "react-helmet-async";

export default function ComingSoon() {
  return (
    <>
      <Helmet>
        <title>Asif Mahmud Shimon | Coming Soon</title>
      </Helmet>

      <div className="coming-soon">
        <p>
          Coming soon
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    </>
  );
}
