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
    acceptFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    acceptUnFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
    getProfile(userId: number) {
        console.warn('Obsolete message,поменяйте апишку для профиля  ')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`,{status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

