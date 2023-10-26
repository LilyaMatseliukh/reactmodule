import React from 'react';
import {characters} from "../../data/data";
import CharacterComponent from "../Character/CharacterComponent";

const CharactersComponent = () => {
    return (
        <div>
            {
                characters.map(value => (
                    <CharacterComponent id={value.id} name={value.name} status={value.status} species={value.species} gender={value.gender} image={value.image}/>
                ))
            }
        </div>
    );
};

export default CharactersComponent;
