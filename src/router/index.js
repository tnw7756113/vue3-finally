import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Userboard',
    component: () => import('../views/frontend/UserboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/IndexView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/frontend/AboutView.vue')
      },
      {
        path: 'productList',
        component: () => import('../views/frontend/ProductList.vue')
      },
      {
        path: 'productList/:productId',
        component: () => import('../views/frontend/UserProduct.vue')
      },
      {
        path: 'faq',
        component: () => import('../views/frontend/FAQ.vue')
      },
      {
        path: 'favourite',
        component: () => import('../views/frontend/FavouriteView.vue')
      },
      {
        path: 'userCart',
        component: () => import('../views/frontend/UserCart.vue')
      },
      {
        path: 'userCheckInfo',
        component: () => import('../views/frontend/UserCheckInfo.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/frontend/UserCheckout.vue')
      }
    ]
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
