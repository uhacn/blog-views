import axios from 'axios'

export default function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截
  instance.interceptors.request.use(config => {
    if (sessionStorage.token) {
      config.headers.authorization = 'Bearer '+sessionStorage.getItem('token');
    }
    return config
  }, err => {
    console.log('请求失败', err)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    return Promise.reject(err);
    // console.log('响应失败', err)
  })

  // 3.发送真正的网络请求
  return instance(config)
}
