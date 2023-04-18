import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Userboard',
    component: () => import('../views/frontend/UserboardView.vue'),
    children: [
      {
        path: 'productList',
        component: () => import('../views/frontend/ProductList.vue')
      },
      {
        path: 'productList/:productId',
        component: () => import('../views/frontend/UserProduct.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/backend/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/ProductView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/backend/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/CouponView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
