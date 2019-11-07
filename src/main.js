import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lazyload from 'vue-lazyload'
import lading from '../public/loding.gif'

Vue.use(Lazyload, {
  lading: lading
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
