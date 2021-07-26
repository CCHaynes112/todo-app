import axios from 'axios'

if (window.location.origin === 'http://localhost:8080') {
    axios.defaults.baseURL = 'http://127.0.0.1:8000';
} else {
    axios.defaults.baseURL = "http://api.ch-tasks.com"
}

export class TaskClient {
    get(params) {
        return axios.get(
            '/v1/todos',
            { params: params }
        )
    }
    delete(id) {
        return axios.delete(
            `/v1/todos/${id}`
        )
    }
    patch(id, taskFields) {
        return axios.patch(
            `/v1/todos/${id}`,
            taskFields
        )
    }
    post(data) {
        return axios.post(
            '/v1/todos',
            data
        )
    }
}