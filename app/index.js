import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Register from './routes/register.vue';
import Login from './routes/login.vue';
import User from './routes/user-index.vue';
import Ribbits from './routes/ribbits-index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  // Setup router to respond to /register
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  // Setup router to respond to /login
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // Setup router to respond to /users
  {
    path: '/users',
    name: 'User',
    component: User,
  },
  // Setup router to respond to /ribbits
  {
    path: '/ribbits',
    name: 'Ribbits',
    component: Ribbits,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
