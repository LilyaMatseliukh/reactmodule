import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => axiosService.get(urls.post.base),
    getById: (id) => axiosService.get(urls.post.byId(id))
}

export {postService};