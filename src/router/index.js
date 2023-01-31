import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/newpage',
      name: '新增頁面',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path:'a',
          component: () => import('../views/ComponentA.vue')         
        },
        {
          path:'b',
          component: () => import('../views/ComponentB.vue')         
        },
        {
          path:'dynamicRouter',
          component: () => import('../views/DynamicRouter.vue')
        },
        {
          path:'c',
          component: () => import('../components/ComponentC.vue')         
        },
        {
          path:'namedView',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path:'d2a',
              components:{
                left: () => import('../views/ComponentD.vue'),
                right: () => import('../views/ComponentA.vue')    
              }
            },
            {
              path:'b2a',
              components:{
                left: () => import('../views/ComponentB.vue'),
                right: () => import('../views/ComponentA.vue')    
              }
            }
          ]
        }
      ]
    }
  ]
})

export default router
