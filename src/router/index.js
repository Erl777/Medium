import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authorization from "../views/Authorization";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: Authorization
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
