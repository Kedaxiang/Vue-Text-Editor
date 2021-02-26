import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import BigHome from '../views/BigHome'

// import Home from '../views/Home/Home'

Vue.use(Router);

// 解决二级菜单中路由跳转时的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/bighome', component: BigHome, redirect: '/home', children: [
        {path: '/home/home', component: () => import("../views/home/Home")},
        {path: '/home/user', component: () => import("../views/home/User")},
        
        {path: '/home/course', component: () => import("../views/course/Task")},
        {path: '/home/addCourse', component: () => import("../views/course/addCourse")},
        
        {path: '/experts/home', component: () => import("../views/assessmentExperts/Home")},
        {path: '/experts/guide', component: () => import("../views/assessmentExperts/Guide")},
        {path: '/experts/report', component: () => import("../views/assessmentExperts/Report")},
      ]
    },
  ]
})

export default router;