import '@babel/polyfill';
import Vue from 'vue'
import App from 'App';
import store from './store';
import router from './route';
import VueCookie from "./lib/VueCookie.js";
import './scss/global/global.scss';

Vue.use(VueCookie);

new Vue({
    el: '#app',
    store,
    router,
    render: h=>h(App),
}); 
console.log(111)