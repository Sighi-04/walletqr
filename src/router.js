import Vue from "vue"
import Router from "vue-router"
import Scansione from "./components/scansione.vue"
import Visualizza from "./components/visualizza.vue"
import Lista from "./components/lista.vue"
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'scansione',
            component: Scansione
        },{
            path:'/',
            name:'visualizza',
            component: Visualizza
        },{
            path:'/',
            name:'lista',
            component: Lista
        }
    ]
})