import React from 'react';
import {useState} from "react";

const App = () => {
    let [counter, setCounter] = useState({value: 0});
    const onClickDecrement = () => {
        counter.value--;
        setCounter({...counter});
    }
    const onCLickIncrement = () => {
        counter.value++;
        setCounter({...counter});
    }

    return (
        <div className="App">
            <h1>counter: {counter.value}</h1>
            <button onClick={onCLickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>
        </div>
    );
};

export {App};
