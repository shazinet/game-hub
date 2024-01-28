import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4a0759f479e24aa1bd70e4e9b8893a1f'
    }
})