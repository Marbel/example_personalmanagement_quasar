import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'Vacation', component: () => import('pages/Vacation.vue') },
      {
        path: 'Personal',
        component: () => import('pages/Personal.vue'),
        children: [
          { path: 'View', component: () => import('pages/Personal/View.vue') }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
