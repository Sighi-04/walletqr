import Vue from 'vue'
import router from './router/'
import App from "./App.vue"
Vue.config.productionTip = false
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);
new Vue({
  router,

  //prima pagina
  render: h => h(App)
}).$mount('#app')