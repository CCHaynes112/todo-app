import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const ungardedRoutes = [
  'Login',
  'Register',
  'Home'
]

router.beforeEach((to, from, next) => {
  store.dispatch('checkAuth').then(() => {
    if (!ungardedRoutes.includes(to.name) && !store.state.auth.isAuthenticated) {
      next({ name: 'Login' })
    }
    else {
      next()
    }
  })
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
