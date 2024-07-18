import axios from 'axios'

const instance = axios.create({
    baseURL:'/api',
    timeout:5000
})

// 响应拦截器
instance.interceptors.response.use(
    res => {
        return res.data
    },
    err=>{
        return Promise.reject(err)
    }
)

export default instance