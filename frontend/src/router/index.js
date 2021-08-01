import Vue from 'vue'
import VueRouter from 'vue-router'

import TasksView from '../views/TasksView.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tasks',
    name: 'TasksView',
    component: TasksView
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
