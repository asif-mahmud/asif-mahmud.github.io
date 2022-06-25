import { useContext } from "react";
import { DrawerContext } from "./drawer.provider";
import { IDrawerContext } from "./drawer.reducer";

export default function useDrawer(): IDrawerContext {
  return useContext(DrawerContext);
}
