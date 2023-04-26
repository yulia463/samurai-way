import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8c1e219f-9ff2-4bd6-a600-b07406352fbd"
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 9) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
        return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

}

