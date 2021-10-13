import axios from "axios"

import authHeader from './auth-header'

axios.defaults.withCredentials = false
const API_URL = 'http://localhost:8800/api/v1/'

class TaskService {
    tasks() {
        return axios.get(API_URL + 'task', { headers: authHeader() })
    }

    markComplete(id) {
        return axios.get(API_URL + 'task/complete/' + id, { headers: authHeader() })
    }

    deleteTask(id) {
        return axios.delete(API_URL + 'task/' + id, { headers: authHeader() })
    }
}

export default new TaskService()