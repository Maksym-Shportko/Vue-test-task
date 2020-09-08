import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout:'empty'},
    component: ()=> import('../components/Auth/LogginModal.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout:'empty'},
    component: ()=> import('../components/Auth/RegisterModal.vue'),
  },
  {
    path: '/',
    name: 'Home',
    meta: {layout:'main'},
    component: ()=> import('../views/Home.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
