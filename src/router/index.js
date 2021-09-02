import Vue from "vue";
import VueRouter from "vue-router";
import lista from "../components/lista.vue";
import scansione from "../components/scansione.vue";
import visualizza from "../components/visualizza.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "lista",
    component: lista,
  },
  {
    path: "/scansione",
    name: "scansione",
    component: scansione,
  },
  {
    path: "/lista",
    name: "lista",
    component: lista,
  },
  {
    path: "/visualizza",
    name: "visualizza",
    component: visualizza
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;