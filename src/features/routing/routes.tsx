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
  {
    path: "/devnotes",
    children: [
      {
        path: "/",
        element: () =>
          import("features/devnotes/devnotes").then((mod) => <mod.default />),
      },
      {
        path: "/setup-database-server-client-using-docker",
        element: () =>
          import(
            "features/devnotes/pages/setup-database-server-client-using-docker"
          ).then((mod) => <mod.default />),
      },
      {
        path: "/setup-headless-chrome-service-using-docker",
        element: () =>
          import(
            "features/devnotes/pages/setup-headless-chrome-service-using-docker"
          ).then((mod) => <mod.default />),
      },
    ],
  },
];

export default routes;
