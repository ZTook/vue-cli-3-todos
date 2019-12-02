import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from '@vue/cli-plugin-vuex'
import router from "./router";
import VueParticles from 'vue-particles'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vscreen from 'vue-screen'
import './registerServiceWorker'
import store from './store/index.js'

Vue.use(Vscreen,'materialize')
Vue.use(VueParticles)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  icons: {
    iconfont: ['md', 'mdi', 'fa']
  },
  render: h => h(App)
}).$mount('#app')
