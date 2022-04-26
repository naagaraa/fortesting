import { createRouter, createWebHistory } from "vue-router";
import Test1View from "../views/Test1View.vue";
import Test2View from "../views/Test2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "test1",
      component: Test1View,
    },
    {
      path: "/test-2",
      name: "test2",
      component: Test2View,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
