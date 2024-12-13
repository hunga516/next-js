import axios from "axios";

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// export const get = (path, optional = {}) => {
//     return request.get(path, optional)
//         .then(res => res.data)
// }

export const get = async (path, optional = {}) => {
    const response = await request.get(path, optional)
    return response.data
}

export default request