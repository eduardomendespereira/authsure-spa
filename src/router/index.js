// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    beforeEnter(to, from, next){
      if(localStorage.getItem('auth')){
        const parse = JSON.parse(localStorage.getItem('auth'))
        console.log(parse)
        next()
      }else{
        next({name: 'login'})
      }
    },
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/clients',
        name: 'clients',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Clients.vue'),
      },
      {
        path: '/realms',
        name: 'realms',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Realms.vue'),
      },
      {
        path: '/sessions',
        name: 'sessions',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Sessions.vue'),
      }
    ],
  },
  {
    path: '/login',
    name: `login`,
    component: () => import('@/views/Login.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
