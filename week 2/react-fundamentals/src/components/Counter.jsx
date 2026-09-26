import { useState } from 'react';
import styles from '../styles/Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className={styles.container}>
      <h2>Counter Example</h2>
      <div className={styles.display}>{count}</div>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={decrement}>- Decrement</button>
        <button className={`${styles.btn} ${styles.resetBtn}`} onClick={reset}>Reset</button>
        <button className={styles.btn} onClick={increment}>+ Increment</button>
      </div>
    </div>
  );
}

export default Counter;
