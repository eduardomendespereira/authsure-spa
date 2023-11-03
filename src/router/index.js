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
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/clients',
        name: 'clients',
        component: () => import('@/views/Clients.vue'),
      },
      {
        path: '/realms',
        name: 'realms',
        component: () => import('@/views/Realms.vue'),
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('@/views/Roles.vue'),
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('@/views/Users.vue'),
      },
      {
        path: '/sessions',
        name: 'sessions',
        component: () => import('@/views/Sessions.vue'),
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
