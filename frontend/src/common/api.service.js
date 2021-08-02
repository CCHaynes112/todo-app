import axios from 'axios'
import JwtService from "@/common/jwt.service";


const LOCAL_URL = 'http://localhost:8080'
const PROD_URL = 'http://api.ch-tasks.com/v1'

export const axiosClient = axios.create({
    baseURL: window.location.origin === LOCAL_URL ? LOCAL_URL : PROD_URL
})

const ApiService = {
    setHeader() {
        axiosClient.defaults.headers["Authorization"] = `Token ${JwtService.getToken()}`
    },
    query(resource, params) {
        return axiosClient.get(resource, params).catch((err) => {
            throw new Error(`ApiService ${err}`);
        })
    },
    get(resource, slug = "") {
        return axiosClient.get(`${resource}/${slug}`).catch((err) => {
            throw new Error(`ApiService ${err}`);
        })
    },
    post(resource, data) {
        return axiosClient.post(`${resource}`, data).catch((err) => {
            throw new Error(`ApiService ${err}`);
        })
    },
    patch(resource, slug, data) {
        return axiosClient.patch(`${resource}/${slug}`, data).catch((err) => {
            throw new Error(`ApiService ${err}`);
        })
    },
    put(resource, data) {
        return axiosClient.put(`${resource}`, data).catch((err) => {
            throw new Error(`ApiService ${err}`);
        })
    },
    delete(resource, slug) {
        return axiosClient.delete(`${resource}/${slug}`).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    }
}

export default ApiService;

export const TaskService = {
    query(params) {
        return ApiService.query("tasks", {
            params: params
        });
    },
    get(slug) {
        return ApiService.get("tasks", slug);
    },
    create(data) {
        return ApiService.post("tasks", { task: data });
    },
    update(slug, data) {
        return ApiService.update("tasks", slug, { task: data });
    },
    delete(slug) {
        return ApiService.delete(`tasks`, slug);
    }
}

export const AuthService = {
    login() {
        return ApiService.post("auth/login");
    },
    register() {
        return ApiService.post("auth/register");
    }
}