import React, {useEffect, useState} from 'react';

const Component1 = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/1')
            .then(value => value.json())
            .then(value => setCharacters(value.results.characters))
    }, [])


    console.log(characters)


    return (
        <div>

        </div>
    );
};

export default Component1;