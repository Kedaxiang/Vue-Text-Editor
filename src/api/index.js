import axios from 'axios'
import Vue from 'vue'

const baseUrl = process.env.API_ROOT || ''
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true

axios.interceptors.response.use(res => {
  if(String(res.data.status)[0] != '2'){  // 所有错误的状态码都做统一的异常处理
      Vue.prototype.$message.error(res.data.message)
  }
  return res
}, err => {
  return err
})

Vue.prototype.axios = axios;


// 登录
export const login = data => axios.post('/admin/login', data);

// 获取
export const 