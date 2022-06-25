import { useLocation } from "@tanstack/react-location";
import classNames from "classnames";
import { Cross } from "features/icons";
import { useEffect } from "react";
import PageLinks from "./page-links";
import useDrawer from "./use-drawer";

export default function Drawer() {
  const { opened, toggle } = useDrawer();
  const {
    current: { href },
  } = useLocation();

  useEffect(() => {
    if (opened) {
      toggle();
    }
  }, [href]);

  return (
    <aside className={classNames("drawer", { opened })}>
      <nav>
        <button className="close-button" onClick={toggle}>
          <Cross />
        </button>
        <PageLinks />
      </nav>
    </aside>
  );
}
