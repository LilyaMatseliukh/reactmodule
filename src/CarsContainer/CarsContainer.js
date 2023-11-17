import React, {useEffect, useState} from 'react';

import {carService} from "../services/carService";
import {Cars} from "./Cars";
import {CarForm} from "./CarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    // const [trigger, setTrigger] = useState(null);
    const [trigger, setTrigger] = useState(true);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};