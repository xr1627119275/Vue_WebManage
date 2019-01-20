import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import UnAuthorized from '@/components/DeviceManage/UnAuthorized'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: 'unauthorized',
      children: [
        {
          path: 'unauthorized',
          component: UnAuthorized
        }
      ]
    }
  ]
})
