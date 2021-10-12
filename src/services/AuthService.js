import axios from 'axios'

axios.defaults.withCredentials = false
const API_URL = 'http://localhost:8800/api/v1/'

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + 'login', {
                email,
                password
            })
            .then(response => {
                console.log(response.data)

                if (response.data.status === 0) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
            })
    }

    register(name, email, password) {
        return axios
            .post(API_URL + 'register', {
                name,
                email,
                password
            })
            .then(response => {
                console.log(response.data)

                if (response.data.status === 0) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
            })
    }
}

export default new AuthService()