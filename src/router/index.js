import Vue from "vue";
import Vuetify from '../plugins/vuetify'
import VueRouter from "vue-router";
//import Home from "../components/Views/Home.vue";
//import About from "../components/Views/About.vue";
import Login from "../components/Login.vue"
import Register from '../components/Register.vue'
import Index from "../components/Index.vue"
import Show from '../components/Show.vue'
import Detail from '../components/Detail.vue'
import SorryPage1 from '../components/Sorry/page1.vue'
import SorryPage2 from '../components/Sorry/page2.vue'
import SorryPage3 from '../components/Sorry/page3.vue'
import SorryPage4 from '../components/Sorry/page4.vue'
import SorryPage5 from '../components/Sorry/page5.vue'
import SorryPage6 from '../components/Sorry/page6.vue'
import Vxtest from '../components/Vxtest/vxtest.vue'

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  { 
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/about",
    name: "about", 
    component: () =>
    import(/* webpackChunkName: "about" */ "../components/Views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/reg",
    name: "Register",
    component: Register
  },
  {
    path: "/show",
    name: "show",
    component: Show
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/sorry",
    name: "sorry-page1",
    component: SorryPage1
  },
  {
    path: "/sorry2",
    name: "sorry-page2",
    component: SorryPage2
  },
  {
    path: "/sorry3",
    name: "sorry-page3",
    component: SorryPage3
  },
  {
    path: "/sorry4",
    name: "sorry-page4",
    component: SorryPage4
  },
  {
    path: "/sorry5",
    name: "sorry-page5",
    component: SorryPage5
  },
  {
    path: "/sorry6",
    name: "sorry-page6",
    component: SorryPage6
  },
  {
    path: "/vxtest",
    name: "vxtest",
    component: Vxtest
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
