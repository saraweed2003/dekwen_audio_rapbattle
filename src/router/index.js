import { createRouter, createWebHistory } from "vue-router";

import main from "../Layouts/main.vue";
import auth from "../Layouts/auth.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { layout: main },
      children: [
        {
          path: "/",
          name: "dashboard",
          component: () => import("../views/dashboard.vue"),
        },
        {
          path: "/form",
          name: "form",
          component: () => import("../views/form.vue"),
        },
         {
          path: "/download",
          name: "download",
          component: () => import("../views/downloadFile.vue"),
        },

      ],
    },

    {
 path: "/login",
      name: "login",
      meta: { layout: auth },
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../components/login/login.vue"),
        },
      ],
    },
  ],
});

export default router;
