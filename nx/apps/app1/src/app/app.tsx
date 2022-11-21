import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <p>{count}</p>
      <input type="button" value="Increment" onClick={handleClick} />
    </>
  );
}

export default App;
