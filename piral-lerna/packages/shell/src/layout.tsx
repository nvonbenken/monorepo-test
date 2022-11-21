import * as React from "react";
import { Link } from "react-router-dom";
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  MenuItemProps,
  createInstance,
} from "piral";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
);

const defaultTiles = <></>;

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/not-found">
        Knowledge
      </Link>
    </MenuItem>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/not-found">
        Support
      </Link>
    </MenuItem>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/not-found">
        Account Name
      </Link>
    </MenuItem>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => {
    const instance = createInstance();
    return (
      <div>
        <input
          type="button"
          value="Set value"
          onClick={() => instance.root.setData("foo", "bar")}
        />
        <div className="tiles">
          {defaultTiles}
          {children}
        </div>
      </div>
    );
  },
  DashboardTile: ({ columns, rows, children }) => (
    <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
  ),
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <div style={{ display: "flex" }}>
        <Menu type="general" />
        <div className="container" style={{ marginTop: "40px" }}>
          {children}
        </div>
      </div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <div style={{ width: "250px" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Piral
          </Link>
          <ul className="flex-grow" style={{ listStyle: "none" }}>
            {children}
          </ul>
          <ul className="flex-grow" style={{ listStyle: "none" }}>
            {defaultMenuItems}
          </ul>
        </div>
      </div>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => (
    <div className="notifications">{children}</div>
  ),
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && (
          <div className="notification-toast-title">{options.title}</div>
        )}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};
