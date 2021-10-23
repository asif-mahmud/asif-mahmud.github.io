import style from "./index.module.css";

export default () => {
  return (
    <div className={style.w}>
      <div className={`${style.b} ${style.b1}`}></div>
      <div className={`${style.b} ${style.b2}`}></div>
      <div className={`${style.b} ${style.b3}`}></div>
      <div className={`${style.b} ${style.b4}`}></div>
    </div>
  );
};
