import Vue from "vue";
import VueRouter from "vue-router";
import lista from "../components/lista.vue";
import scansione from "../components/scansione.vue";
import visualizza from "../components/visualizza.vue";
import dettagli from "../components/dettagli.vue";

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
    path: "/lista",
    name: "lista",
    component: lista,
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;