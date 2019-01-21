// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import url from './url'

Vue.use(vuex)
Vue.use(VueAxios, axios)
Vue.use(VueCookies)

const store = new vuex.Store({
  state: {
    url,
    access_token: VueCookies.get('access_token'),
    CurrentUserName: '',
    CurrentUserId: ''
  },
  mutations: {
    setToken (state, data) {
      state.access_token = data
    },
    setUserName (state, data) {
      state.CurrentUserName = data
    },
    setUserId (state, data) {
      state.CurrentUserId = data
    }
  }
})

axios.defaults.headers.common['X-CSRFToken'] = VueCookies.get('csrftoken') ? VueCookies.get('csrftoken') : ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

require('font-awesome-webpack')

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
