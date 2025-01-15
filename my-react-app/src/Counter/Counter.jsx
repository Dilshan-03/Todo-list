import React, {useState} from 'react'
import styles from './Counter.module.css'
function Counter(){

    const [count, setCount]=useState(0);
    const reduceCnt = () => setCount(count - 1);
    const increaseCnt = () => setCount (count + 1);
    const resetCnt= ()=> setCount(0);
    return(
        <div className={styles.counter_container}>
             <p>{count}</p>
             <button className={styles.counter_button} onClick={reduceCnt}>Decrement</button>
             <button className={styles.counter_button} onClick={resetCnt}>Reset</button>
             <button className={styles.counter_button} onClick={increaseCnt}>Increment</button>
        </div>
    );
}
export default Counter