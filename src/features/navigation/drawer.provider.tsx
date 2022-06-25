import { createContext, FC, PropsWithChildren, useReducer } from "react";
import DrawerReducer, { IDrawerContext, IDrawerState } from "./drawer.reducer";

const initialState: IDrawerState = { opened: false };

export const DrawerContext = createContext<IDrawerContext>({
  ...initialState,
  toggle: () => {},
});

const DrawerProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(DrawerReducer, initialState);

  const toggleDrawer = () => {
    dispatch({ action: "toggle" });
  };

  return (
    <DrawerContext.Provider value={{ ...state, toggle: toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
