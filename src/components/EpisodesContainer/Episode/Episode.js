import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';
import {useAppContext} from "../../../hooks";

const Episode = ({episode}) => {
    const {id, name, episode: chapter} = episode;

    // const characters = episode.characters;
    //
    // console.log(characters);

    const navigate = useNavigate();

    const {episodeName, setEpisodeName} = useAppContext();

    const click = () => {
        setEpisodeName(name);
        console.log(episodeName)
        navigate('/characters', {state: id});
    }

    return (
        // <div className={css.Episode} onClick={() => navigate('/characters', {state: id})}>
        <div className={css.Episode} onClick={click}>
            id: {id}
            <br/>
            name: {name}
            <br/>
            chapter: {chapter}
            <br/>
        </div>
    );
};

export {Episode};