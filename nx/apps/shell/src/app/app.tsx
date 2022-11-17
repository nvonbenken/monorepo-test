import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const App1 = React.lazy(() => import('app1/Module'));

const App2 = React.lazy(() => import('app2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/app1">App1</Link>
        </li>

        <li>
          <Link to="/app2">App2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/app1" element={<App1 />} />

        <Route path="/app2" element={<App2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
