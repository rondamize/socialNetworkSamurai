import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        "api-key": "45b73825-6be3-4981-821c-33679ddd684d"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersApi = {
    getUsers(currentPage=1, usersPerPage=10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${usersPerPage}`)
            .then(response => {
                return response.data;
            });
    },
    unfollowUser(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    followUser(id) {
        return axiosInstance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const AuthorisationApi = {
    Auth() {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}

export const ProfileApi = {
    getProfile(id) {
        return axiosInstance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(id) {
        return axiosInstance.get(`profile/status/${id}`)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data;
            });
    }
}