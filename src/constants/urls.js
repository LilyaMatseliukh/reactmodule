const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episode';
// const characters = '/character';

const urls = {
    episodes,
    episodeById: (id) => `${episodes}/${id}`,
    // characters: {
    //     getById: (id) => `${characters}/${id}`
    // }
};

export {
    baseURL,
    urls
};