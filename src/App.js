import React, {useEffect, useState} from 'react';

const App = () => {

    const [characters, setCharacter] = useState([]);

    let x = 0; // 1 2

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(({results}) => {
                // console.log(value.results)

                // const {results} = value;
                // console.log(results);

                setCharacter(results);
                console.log('.');
            });
    }, [x]);

    return (
        <div>
            {/*{*/}
            {/*    characters.map(character => (<div key={character.id}>{character.name} <p>{character?.asd?.xxx}</p></div>))*/}
            {/*}*/}

            {
                characters.map(character => (
                    <div key={character.id}>
                        {character.name}
                        {character.asd && <p>{character.asd.xxx}</p>}
                    </div>
                ))
            }
        </div>
    );
};

export {App};
