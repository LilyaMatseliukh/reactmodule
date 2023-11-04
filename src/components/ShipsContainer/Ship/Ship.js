import React from 'react';

import css from './Ship.module.css';

const Ship = ({ship}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = ship;

    return (
        <div className={css.Ship}>
            <div>Mission Name: {mission_name}</div>
            <div>Mission Year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Ship;