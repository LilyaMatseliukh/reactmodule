import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const postsService = {
    getByPostId: (postId) => axiosService.get(urls.byPostId(postId))
};

export {postsService};