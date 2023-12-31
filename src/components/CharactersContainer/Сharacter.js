import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppContext} from "../../hooks";

const Character = ({character}) => {
    const [character1, setCharacter1] = useState(null);

    const {setEpisodeName} = useAppContext();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(character)
            .then(value => value.json())
            .then(value => setCharacter1(value))
    }, [character]);

    const back = () => {
        setEpisodeName(null);
        navigate('/episodes');
    }

    return (
        <div>
            {
                character1 &&
                <div>
                <button onClick={back}>back</button>
                <div>id: {character1.id}</div>
                <div>name: {character1.name}</div>
                <img src={character1.image}/>
                </div>
            }
        </div>
    );
};

export {Character};