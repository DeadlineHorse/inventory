import axios from 'axios'

const api = axios.create({
        
    baseURL: 'http://127.0.0.1:8000/api/',

    headers: {

        'x-api-version': '0.0.0'

    }

})

export default api