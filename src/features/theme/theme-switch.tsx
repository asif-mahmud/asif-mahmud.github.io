import { MoonIcon, SunIcon } from "features/icons";
import useTheme from "./use-theme";
import { Theme } from "./types";

export default function ThemeSwitch() {
  const { theme, switchTheme } = useTheme();

  return (
    <div className="theme-switch" onClick={switchTheme}>
      <div>
        {theme === Theme.Light && <SunIcon fill="none" stroke="white" />}

        {theme === Theme.Dark && <MoonIcon fill="none" stroke="white" />}
      </div>
    </div>
  );
}
