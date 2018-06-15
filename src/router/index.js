import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import SingleArticle from '../components/SingleArticle';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
      {
        name:"singlearticle",
    path:'/singlearticle',
          component: SingleArticle,
          meta:{
              title: 'Enjoy!'
          }
      },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
