import {
  createHashHistory,
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { TopBar } from "features/navigation";
import PendingStateView from "./pending-state-view";
import routes, { LocationGenerics } from "./routes";

const location = new ReactLocation<LocationGenerics>({
  history: createHashHistory(),
});

export default function Main() {
  return (
    <Router
      location={location}
      routes={routes}
      defaultPendingMs={0}
      defaultPendingMinMs={2000}
      defaultLoaderMaxAge={10000}
      defaultErrorElement={async (error) => `Error: ${error}`}
      defaultPendingElement={<PendingStateView />}
    >
      <TopBar />
      <main>
        <Outlet />
      </main>
    </Router>
  );
}
