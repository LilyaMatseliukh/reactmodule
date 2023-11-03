import React, {useEffect, useState} from 'react';

const ShipsLaunch = () => {
    const [shipsLaunch, setShipsLaunch] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setShipsLaunch(value))
    }, [])

    console.log(shipsLaunch)

    const filteredArray = shipsLaunch.filter(!(launch_year === 220))

    return (
        <div>
            {

            }
        </div>
    );
};

export default ShipsLaunch;