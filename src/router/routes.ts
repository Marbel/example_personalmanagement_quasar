import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'Vacation', component: () => import('pages/Vacation.vue') },
      {
        path: 'Employee',
        component: () => import('pages/Employee.vue'),
        children: [
          { path: 'Dashboard/:id', component: () => import('pages/Employee/EmployeeDashboard.vue'), props: true }
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
