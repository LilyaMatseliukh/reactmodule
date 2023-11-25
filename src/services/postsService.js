import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getByPostId: (postId) => axiosService.get(urls.posts.byPostId(postId))
};

export {postsService};