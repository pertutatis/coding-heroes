import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const HOST = 'http://api.openweathermap.org/data/2.5'
const PATH = '/weather?id=2509954&units=metric&lang=es&APPID=2f43d1ad988c0c47f9216bf57834edbd'

const HTTP = axios.create({
  baseURL: HOST,
  headers: {
    'Accept': 'application/json'
  }
})

HTTP.get(PATH)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
