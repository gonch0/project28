import React, { useState } from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount]  = useState(0)

    const inc = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button
                className={classes.btn}
                onClick={inc}
            >
                {count}
            </button>

        </div>
    );
};