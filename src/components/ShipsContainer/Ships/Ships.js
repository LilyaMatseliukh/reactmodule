import React, {useEffect, useState} from 'react';
import Ship from "../Ship/Ship";
import {axiosInstance} from "../../../services/ship.api.service";

const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        // fetch('https://api.spacexdata.com/v3/launches/')
        //     .then(value => value.json())
        //     .then(value => setShips(value))

    }, [])

    const filteredShipsArray = ships.filter(ship => ship.launch_year !== '2020');
    console.log(filteredShipsArray)

    return (
        <div>
            {
                filteredShipsArray.map(ship => <Ship key={ship.flight_number} ship={ship}/>)
            }
        </div>
    );
};

export default Ships;