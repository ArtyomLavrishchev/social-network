import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cdeea33e-f7dc-46e4-8742-31d419028410"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data.resultCode)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI objet.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}