import Vue from "vue";
import Router from "vue-router";
import Inicio from "@/components/inicio";
import Pais from "@/components/pais";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "inicio", component: Inicio },
    { path: "/pais", name: "Pais", component: Pais }
  ],

  mode: "history"
});
