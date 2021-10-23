import style from "./index.module.css";
import LoadingSquares from "../LoadingSquares";

export default function PageLoading() {
  return (
    <div className={style.pl}>
      <LoadingSquares />
    </div>
  );
}
