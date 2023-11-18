import React from 'react';

import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, deleter}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} deleter={deleter}/>)}
        </div>
    );
};

export {Cars};