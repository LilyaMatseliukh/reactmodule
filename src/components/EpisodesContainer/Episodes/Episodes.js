import React, {useEffect, useState} from 'react';
import {createBrowserRouter, useSearchParams} from "react-router-dom";

import {episodeService} from "../../../services/episodeService";
import Episode from "../Episode/Episode";
import css from './Episodes.module.css';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    const [query, setQuery] = useSearchParams({page: '1'});

    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    useEffect(() => {
        // episodeService.getAll().then(({data}) => console.log(data));
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results);
            setPrevNext({prev: data.info.prev, next: data.info.next})
        });
    }, [query.get('page')]);

    // const characters = [
    //     'https://rickandmortyapi.com/api/character/1',
    //     'https://rickandmortyapi.com/api/character/2'
    // ]
    //
    // const [characters1, setCharacters1] = useState([]);
    //
    // useEffect(() => {
    //     characters.forEach(character => {
    //         fetch(character)
    //             .then(value => value.json())
    //             .then(value => setCharacters1(value))
    //     });
    // }, [])
    //
    // console.log(characters1);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev;
        });
    };

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev;
        });
    };

    return (
        <div>
            <div className={css.Episodes}>
                {/*<table className={css.Table}>*/}
                {/*    <tr>*/}
                {
                    episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
                }
                {/*    </tr>*/}
                {/*</table>*/}
            </div>
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
        </div>
    );
};

export default Episodes;