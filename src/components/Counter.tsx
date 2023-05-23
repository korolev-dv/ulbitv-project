import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {

    const [count, SetCount] = useState(0);

    function increment() {
        SetCount(count + 1);        
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>Увеличить</button>    
        </div>
    )
}