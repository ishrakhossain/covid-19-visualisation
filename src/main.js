import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import Navbar from './components/Navbar';
import Api from './components/Api';
import axios from 'axios';
import firebase from 'firebase/app';
import Login from './components/Login';
import Register from './components/Register';
import secret from './components/secret';
import 'firebase/auth';
Vue.prototype.$axios = axios;
Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyArHT6kNyZ_XWe3TDD328f0KWwogfphYIE",
  authDomain: "covid19-visualization-51f69.firebaseapp.com",
  databaseURL: "https://covid19-visualization-51f69-default-rtdb.firebaseio.com",
  projectId: "covid19-visualization-51f69",
  storageBucket: "covid19-visualization-51f69.appspot.com",
  messagingSenderId: "666029485307",
  appId: "1:666029485307:web:d16b0e420e650edc1b945e"
};
firebase.initializeApp(firebaseConfig);

const routes = [
  {
    path: '/', component: Navbar
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/register', component: Register
  },
  {
    path: '/secret', name: "secret" , component: secret,
    meta: {requiresAuth: true}
  },
  {path: '/chart', component: Api},
  
]
const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next('/login');
  }else{
    next()
  }
})
let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if(!app){
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
    
  }
})
