import { Burger } from "features/icons";
import { ThemeSwitch } from "features/theme";
import PageLinks from "./page-links";
import useDrawer from "./use-drawer";

export default function TopBar() {
  const { toggle } = useDrawer();

  return (
    <nav className="topbar">
      <div className="topbar-content-wrapper">
        <PageLinks />

        <ThemeSwitch />
        <button className="burger-menu" onClick={toggle}>
          <Burger />
        </button>
      </div>
    </nav>
  );
}
