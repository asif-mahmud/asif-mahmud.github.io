import { Reducer } from "react";
import { Theme, ThemeAction, ThemeActionType, ThemeState } from "./types";

function setDocumentTheme(oldTheme: Theme, newTheme: Theme) {
  document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
}

const ThemeReducer: Reducer<ThemeState, ThemeAction> = (state, action) => {
  switch (action.type) {
    case ThemeActionType.SwitchTheme: {
      const newTheme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
      setDocumentTheme(state.theme, newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    }

    case ThemeActionType.SetTheme: {
      if (!action.payload) {
        return state;
      }

      const newTheme = action.payload ?? Theme.Light;
      setDocumentTheme(state.theme, newTheme);
      return { ...state, theme: newTheme };
    }

    default: {
      return state;
    }
  }
};

export default ThemeReducer;
