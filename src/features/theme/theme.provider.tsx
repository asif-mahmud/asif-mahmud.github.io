import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useReducer,
} from "react";
import ThemeReducer from "./theme.reducer";
import {
  Theme,
  ThemeActionType,
  ThemeContextType,
  ThemeState,
  ThemeStorageKey,
} from "./types";

const initialState: ThemeState = {
  theme: Theme.Light,
};

const initialContextValue: ThemeContextType = {
  state: initialState,
  switchTheme: () => {},
};

export const ThemeContext = createContext(initialContextValue);

const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const switchTheme = () => {
    dispatch({ type: ThemeActionType.SwitchTheme });
  };

  useEffect(() => {
    const prevTheme =
      window.localStorage.getItem(ThemeStorageKey) || Theme.Light;
    dispatch({
      type: ThemeActionType.SetTheme,
      payload: prevTheme as Theme,
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(ThemeStorageKey, state.theme);
  }, [state]);

  return (
    <ThemeContext.Provider value={{ state, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
