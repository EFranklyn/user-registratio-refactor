
import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: import('../views/HomePage/HomePage.vue'),
  },
  {
    name: 'Form',
    path: '/create-user',
    component: import('../views/UserForm/UserForm.vue'),
  }
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});

