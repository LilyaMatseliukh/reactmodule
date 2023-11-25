import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services/albumsService";
import AlbumComponent from "./AlbumComponent";

const AlbumsComponent = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);


    return (
        <div>
            {
                albums.map(album => <AlbumComponent key={album.id} album={album}/>)
            }
        </div>
    );
};

export default AlbumsComponent;