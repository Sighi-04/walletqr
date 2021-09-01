import Vue from 'vue'
//import App from './App.vue'
//import Scansione from './components/scansione.vue'
import Lista from './components/lista.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(Lista), //prima pagina
}).$mount('#app')


