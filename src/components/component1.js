import React from 'react';
import Character from "./character";
// import * as constants from "constants";

const Component1 = () => {

        // let charactersArray = [
        //     'https://rickandmortyapi.com/api/character/2',
        //     'https://rickandmortyapi.com/api/character/35',
        //     'https://rickandmortyapi.com/api/character/38'
        // ]
        //
        // const [characters1, setCharacters1] = useState([]);
        //
        // useEffect(() => {
        //     charactersArray.map(character => {
        //         fetch(character)
        //             .then(value => value.json())
        //     });
        // }, []);
        //
        // console.log(characters1)

        let charactersArray = [
            'https://rickandmortyapi.com/api/character/2',
            'https://rickandmortyapi.com/api/character/35',
            'https://rickandmortyapi.com/api/character/38'
        ]


        return (
            <div>
                {
                    charactersArray.map(character => <Character character={character}/>)
                }
            </div>
        );
    }
;

export default Component1;