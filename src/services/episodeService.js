import {axiosService} from "./axiosService";

import {urls} from "../constants";

const episodeService = {
    getAll: (page='1') => axiosService.get(urls.episodes, {params: {page}}),
    getById: (id) => axiosService.get(urls.episodeById(id))
};

export {episodeService};