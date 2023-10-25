import React from 'react';
import {useEffect, useState} from "react";

const App = () => {
    let [counter, setCounter] = useState(0);
    // const [users, setUsers] = useState([]);
    const onClickDecrement = () => {
        counter--;
        setCounter(counter);
    }
    const onCLickIncrement = () => {
        counter++;
        setCounter(counter);
    }

    // useEffect( () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             console.log('asd')
    //             setUsers(value)
    //         })
    // }, [])

    return (
        <div className="App">
            {/*{*/}
            {/*    users.map(value => (*/}
            {/*        <div key={value.id}>{value.name}</div>*/}
            {/*    ))*/}
            {/*}*/}
            <h1>counter: {counter}</h1>
            <button onClick={onCLickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>
        </div>
    );

};

export {App};
