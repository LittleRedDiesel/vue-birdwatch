import Vue from "vue";
import VueRouter from "vue-router";
import BirdCreate from "../views/BirdCreate.vue";
import BirdList from "../views/BirdList.vue";
import BirdShow from "../views/BirdShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bird-list",
    component: BirdList
  },
  {
    path: "/bird",
    name: "bird-show",
    component: BirdShow
  },
  {
    path: "/bird/create",
    name: "bird-create",
    component: BirdCreate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
