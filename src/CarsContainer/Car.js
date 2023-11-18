import React from 'react';
import {click} from "@testing-library/user-event/dist/click";

const Car = ({car, setCarForUpdate, click}) => {
    const {id, brand, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => {
                setCarForUpdate(car)
                click(id)
            }}>update
            </button>
            <button>delete</button>
        </div>
    );
};

export {Car};