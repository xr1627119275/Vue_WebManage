// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(VueAxios, axios)
Vue.use(VueCookies)

axios.create({
  timeout: 1000,
  responseType: 'json',
  headers: {'X-CSRFToken': VueCookies.get('csrftoken')}
})

require('font-awesome-webpack')

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
