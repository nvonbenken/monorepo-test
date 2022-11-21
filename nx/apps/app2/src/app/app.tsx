// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useSelector } from 'react-redux';

export function App() {
  const { selectedAccount } = useSelector((state: any) => state.global);
  console.log(selectedAccount);
  return (
    <>
      <p>Global State Data: </p>
      <p>{selectedAccount.name}</p>
    </>
  );
}

export default App;
