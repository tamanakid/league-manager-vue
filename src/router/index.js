import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';
import homeRoutes from './routes/home';

Vue.use(VueRouter);


const routes = [
  ...homeRoutes,
];


const router = new VueRouter({
  mode: 'history',
  routes,
});


// router.beforeEach((to, from, next) => {
//   if ((to.name !== 'home') && (!store.getters['auth/isLoggedIn'])) {
//     next({ name: 'home' });
//   }
// })

export default router;
