import React from 'react';

import {Car} from "./Car";
import {click} from "@testing-library/user-event/dist/click";

const Cars = ({cars, setCarForUpdate, click}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} click={click}/>)}
        </div>
    );
};

export {Cars};