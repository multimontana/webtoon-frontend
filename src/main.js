import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import Paginate from 'vuejs-paginate'
import { i18n } from './plugins/i18n'
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.config.productionTip = false

Vue.component('paginate', Paginate)
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
