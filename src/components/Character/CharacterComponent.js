import React from 'react';
import stylesheet from './CharacterComponent.css';

const CharacterComponent = ({id, name, status, species, gender, image}) => {
    return (
        <div>
            <h1>Name: {name} Id: {id}</h1>
            <ul>
                <li>Status: {status}</li>
                <li>Species: {species}</li>
                <li>Gender: {gender}</li>
            </ul>
            <img src={image} alt={name}/>
        </div>
    );
};

export default CharacterComponent;
