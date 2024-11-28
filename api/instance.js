import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.codetau.com/api',
    headers: {
        'content-type': 'application/json'
    }
})

export default instance