import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com',
    headers: {}
});

const getAllShips = () => {
    return axiosInstance.get('/v3/launches/')
}

export {axiosInstance, getAllShips};

