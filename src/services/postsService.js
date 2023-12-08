import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getByUsedId: (userId) => axiosService.get(urls.posts.byUserId(userId)),
    // getById: (userId, id) => axiosService.get(urls.posts.byId(userId, id))
    getById: (id) => axiosService.get(urls.posts.byId(id))
};

export {postsService};