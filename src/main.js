// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from './assets/css/reset.css'
import rem from './assets/js/rem.js'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from '@/vuex/store'

Vue.config.productionTip = false
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='//服务器代理
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
