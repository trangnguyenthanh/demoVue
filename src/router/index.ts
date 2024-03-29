import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import terms from "../rules/terms.vue"
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/', 
    component: () => import('@/login/loginPage.vue')

  },

  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
