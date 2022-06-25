import { Reducer } from "react";

export interface IDrawerState {
  opened: boolean;
}
export interface IDrawerContext extends IDrawerState {
  toggle: () => void;
}

export interface IDrawerAction {
  action: "toggle";
}

const DrawerReducer: Reducer<IDrawerState, IDrawerAction> = (state, _) => {
  return { ...state, opened: !state.opened };
};

export default DrawerReducer;
