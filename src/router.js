import Vue from "vue";
import Router from "vue-router";
import Scansione from "scansione.vue"
import Lista from "lista.vue"
import Visualizza from "visualizza.vue"
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/scansione',
            name:'scansione',
            component: Scansione
        },
        {
            path:'/',
            name:'lista',
            component: Lista
        },
        {
            path:'/visualizza',
            name:'visualizza',
            component: Visualizza
        }
    ]
})