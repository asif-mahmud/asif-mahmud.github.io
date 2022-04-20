import { ThemeSwitch } from "features/theme";

export default function TopBar() {
  return (
    <nav className="topbar">
      <ThemeSwitch />
    </nav>
  );
}
