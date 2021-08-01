import axios from 'axios'

if (window.location.origin === 'http://localhost:8080') {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/v1';
} else {
    axios.defaults.baseURL = "http://api.ch-tasks.com/v1"
}

export class AuthenticationClient {
    login(data) {
        return axios.post(
            '/auth/login/',
            data
        )
    }
    logout(data) {
        return axios.post(
            '/auth/logout/',
            data
        )
    }
}


export class TaskClient {
    get(params) {
        return axios.get(
            '/tasks/',
            { params: params }
        )
    }
    delete(id) {
        return axios.delete(
            `/tasks/${id}/`
        )
    }
    patch(id, taskFields) {
        return axios.patch(
            `/tasks/${id}/`,
            taskFields
        )
    }
    post(data) {
        return axios.post(
            '/tasks/',
            data
        )
    }
}