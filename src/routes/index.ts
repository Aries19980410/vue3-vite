import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
    meta: {
      title: '首页'
    },
  },
  {
    path: '/user',
    name: "User",
    component: () => import('../views/user.vue'),
    meta: {
      title: '用户'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/notFind/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '首页'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


//路由守卫
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
//   if (to.path !== '/login' && !token) {
//     console.log('1')
//     next('/login');
//   } else {
//     console.log('2')
//     if (to.name === 'Login' && token) {
//       router.push('/')
//     } else {
//       next();
//     }
//   }
// });


export default router