import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;


new Vue({

  router,

  store,




}).$start();
