import React, {useEffect, useState} from 'react';

const Character = ({character}) => {
    const [character1, setCharacter1] = useState(null);

    useEffect(() => {
        fetch(character)
            .then(value => value.json())
            .then(value => setCharacter1(value))
    }, [character]);

    return (
        <div>
            {
                character1 &&
                <div>
                <div>id: {character1.id}</div>
                <div>name: {character1.name}</div>
                <img src={character1.image}/>
                </div>
            }
        </div>
    );
};

export default Character;