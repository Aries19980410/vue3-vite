import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';
const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/redirect.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
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
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('../views/index.vue'),
        name: 'Index',
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        component: () => import('../views/system/user/index.vue'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


//路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    next('/login');
  } else {
    if (to.name === 'Login' && token) {
      router.push('/')
    } else {
      next();
    }
  }
});


export default router