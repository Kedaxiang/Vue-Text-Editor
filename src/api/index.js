import axios from 'axios'
import Vue from 'vue'

const baseUrl = process.env.API_ROOT || ''
axios.defaults.baseURL = baseUrl;

axios.interceptors.response.use(res => {
  return res
}, err => {
  return err
})

Vue.prototype.axios = axios;


// 登录
export const login = data => axios.post('/admin/login', data);
