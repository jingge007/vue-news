// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import store from './store'
import 'lib-flexible'
import 'vant/lib/vant-css/index.css'
import 'common/style/index.styl'  // 引入样式表
Vue.config.productionTip = false
Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
