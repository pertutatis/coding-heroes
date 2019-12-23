import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HTTP from '@/services/http'

const PATH = '/weather?id=2509954&units=metric&lang=es&APPID=2f43d1ad988c0c47f9216bf57834edbd'

HTTP.get(PATH)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
