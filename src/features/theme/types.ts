export const ThemeStorageKey = "site/theme";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface ThemeState {
  theme: Theme;
}

export interface ThemeContextType {
  state: ThemeState;
  switchTheme: () => void;
}

export enum ThemeActionType {
  SwitchTheme = "SwitchTheme",
  SetTheme = "SetTheme",
}

export interface ThemeAction {
  type: ThemeActionType;
  payload?: Theme;
}
