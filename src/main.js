import Vue from 'vue'
import router from './router/'
import App from "./App.vue"
Vue.config.productionTip = false

new Vue({
  router,

  //prima pagina
  render: h => h(App)
}).$mount('#app')