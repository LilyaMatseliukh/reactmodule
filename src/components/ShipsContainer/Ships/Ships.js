import React, {useEffect, useState} from 'react';

import css from './Ships.module.css';
import Ship from "../Ship/Ship";
import {getAllShips} from "../../../services/ship.api.service";

const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        // fetch('https://api.spacexdata.com/v3/launches/')
        //     .then(value => value.json())
        //     .then(value => setShips(value))

        getAllShips()
            .then(({data}) => setShips(data));
    }, [])

    const filteredShipsArray = ships.filter(ship => ship.launch_year !== '2020');
    console.log(filteredShipsArray)

    return (
        <div className={css.Ship}>
            {
                filteredShipsArray.map(ship => <Ship key={ship.flight_number} ship={ship}/>)
            }
        </div>
    );
};

export default Ships;