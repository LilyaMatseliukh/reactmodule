import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users.users),
    create: (user) => axiosService.post(urls.users.users, user),
    getById: (id) => axiosService.get(urls.users.users + `/${id}`),
    deleteById: (id) => axiosService.delete(urls.users.users + `/${id}`),
    sorted: (order) => axiosService.get('/users/sorted')
};