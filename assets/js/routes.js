import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
        path:'/', name:'home', component:Home
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            /*{
                path:'/', name:'home', component:Home
            },*/
        ]
      },
  ]
});

export default router;