import Vue from 'vue'
import VueRouter from 'vue-router'
import TasksView from '../views/TasksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TasksView',
    component: TasksView
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
