import { useContext } from "react";
import { ThemeContext } from "./theme.provider";

export default function useTheme() {
  const context = useContext(ThemeContext);

  return { theme: context.state.theme, switchTheme: context.switchTheme };
}
