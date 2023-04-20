import axios from "axios";

//const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/' ,
    headers: {
        "API-KEY": "8c1e219f-9ff2-4bd6-a600-b07406352fbd"
    }

});

export const usersAPI ={
    getUsers (currentPage = 1, pageSize = 9) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data);
}}

export const getUsers2 = (currentPage = 1, pageSize = 9) => {
    return instance.get( `follow?page=${currentPage} &count=${pageSize}`)
        .then(response => response.data);
}
