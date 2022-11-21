import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <div>
        <input type="button" value="Increment" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
