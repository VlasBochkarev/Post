import React, {useState} from 'react';
import {Button} from "antd";
import s from './counter.module.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Хук — это специальная функция, которая позволяет «подцепиться» к возможностям React. Например, хук useState предоставляет функциональным компонентам доступ к состоянию React.</h1>
            <h1>const [count, setCount] = useState({count})</h1>
            <h2 className={s.counter}>Счетчик : {count}</h2>
            <div className={s.counter}>
                <div>
                    <Button onClick={increment} type="primary" >Increment</Button>
                </div>
                <div>
                    <Button onClick={decrement} type="primary" >Decrement</Button>
                </div>
            </div>

        </div>
    );
};

export default Counter;