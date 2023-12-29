const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episode';
const character = '/character';

const urls = {
    episodes,
    episodeById: (id) => `${episodes}/${id}`,
    characters: {
        getById: (id) => `${character}/${id}`
    }
};

export {
    baseURL,
    urls
};