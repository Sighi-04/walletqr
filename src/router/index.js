import Vue from "vue";
import VueRouter from "vue-router";
import lista from "../components/lista.vue";
import scansione from "../components/scansione.vue";
import visualizza from "../components/visualizza.vue";
import dettagli from "../components/dettagli.vue";
import gestioneDati from '../components/gestioneDati.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "lista",
    component: lista,
    props: true
  },
  {
    path: "/scansione",
    name: "scansione",
    component: scansione,
    props: true
  },
  {
    path: "/visualizza",
    name: "visualizza",
    component: visualizza,
    props: true
  },
  {
    path:"/dettagli",
    name:"dettagli",
    component: dettagli,
    props: true
  },
  {
    path:"/backup",
    name: "gestioneDati",
    component: gestioneDati,
  }
];

const router = new VueRouter({
  routes,
});

export default router;