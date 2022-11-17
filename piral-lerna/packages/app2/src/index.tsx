import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "shell";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/app2", Page);

  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/app2">App 2</Link>);
  app.registerTile(() => <div>Tile from app 2</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
