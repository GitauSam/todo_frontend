import axios from 'axios'

axios.defaults.withCredentials = true
const API_URL = 'http://localhost:8800/api/v1/'

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + 'login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },      
            })
            .then(response => {
                console.log(response)
            })
    }
}

export default new AuthService()