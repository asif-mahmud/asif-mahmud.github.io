import { Route, MakeGenerics } from "@tanstack/react-location";

export type LocationGenerics = MakeGenerics<{
  Params: {};
}>;

const routes: Route<LocationGenerics>[] = [
  {
    path: "/",
    element: () => import("features/home").then((mod) => <mod.Home />),
  },
  {
    path: "/about",
    element: () => import("features/about").then((mod) => <mod.About />),
  },
];

export default routes;
