import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/hooks';
import { setEntity } from './redux/global.slice';

const App1 = React.lazy(() => import('app1/Module'));

const App2 = React.lazy(() => import('app2/Module'));

export function App() {
  const dispatch = useAppDispatch();

  return (
    <React.Suspense fallback={null}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px', margin: '10px' }}>
          <Link to="/">Home</Link>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link to="/app1">App1</Link>
            </li>

            <li>
              <Link to="/app2">App2</Link>
            </li>
          </ul>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link to="/">Knowledge</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Account Name</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <input
                  type="button"
                  value="Set Account"
                  onClick={() =>
                    dispatch(setEntity({ id: '12345', name: 'Test Account' }))
                  }
                />
              </div>
            }
          />

          <Route path="/app1" element={<App1 />} />

          <Route path="/app2" element={<App2 />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
