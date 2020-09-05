import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "8e56d24b-a385-49e3-992f-359217276cbe"
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
    }
}
