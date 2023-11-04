import React from 'react';

const Ship = ({ship}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = ship;

    return (
        <div>
            <div>Mission Name: {mission_name}</div>
            <div>Mission Year: {launch_year}</div>
            <div>Mission Patch Small: <img src={mission_patch_small}/></div>
        </div>
    );
};

export default Ship;