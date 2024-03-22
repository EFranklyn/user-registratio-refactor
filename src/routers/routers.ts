
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage/HomePage.vue';
import Teste from '../views/Teste.vue';
import FormUser from '../views/FormUser/FormUser.vue';

export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'About',
    path: '/about',
    component: Teste,
  },
  {
    name: 'Form',
    path: '/create-user',
    component: FormUser,
  }
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});

