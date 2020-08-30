import axios from 'axios'

const httpRequest = axios.create({
    baseURL: 'https://vndreamers-dev.herokuapp.com',
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }
)

export default httpRequest