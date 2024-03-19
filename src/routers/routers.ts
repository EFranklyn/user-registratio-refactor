
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import HomePage from '../components/HomePage/HomePage.vue';
import Teste from '../components/Teste.vue';
import FormUser from '../components/FormUser/FormUser.vue';

export interface RouteSchema {
    name: string;
    isDefault: boolean;
    path: string;
    component: any;
  }  
 
  export const routes: RouteSchema[] = [
    {
      name: 'Home',
      isDefault: true,
      path: '/',
      component:  HomePage,
    },
    {
      name: 'About',
      isDefault: false,
      path: '/about',
      component: Teste,
    },
    {
      name: 'Form',
      isDefault: false,
      path: '/create-user',
      component: FormUser,

    }
  ];


  export const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export const RoutesConfig = routes

