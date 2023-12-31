import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services";
import {Character} from "./Сharacter";

const Characters = ({id}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        episodeService.getById(id).then(({data}) => setCharacters(data.characters))
    }, [id])

    return (
        <div>
            {
                characters.map(character => <Character character={character}/>)
            }
        </div>
    );
};

export {Characters};