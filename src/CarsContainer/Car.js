import React from 'react';

const Car = ({car, setCarForUpdate, deleter}) => {
    const {id, brand, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={() => deleter(id)}>delete</button>
        </div>
    );
};

export {Car};