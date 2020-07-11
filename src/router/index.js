import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// PAGES COMPONENTS
import Login from "@v/Login";
import Register from "@v/Register";
import Chat from "@v/Chat";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      auth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      auth: false,
    },
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const isAuthenticated = false;
  const toPath = to.path;
  const needAuth = to.meta.auth;
  const availableRoutes = routes.map((route) => route.path);

  if (availableRoutes.indexOf(toPath) === -1) {
    if (isAuthenticated) {
      return next({ name: "Chat" });
    } else {
      return next({ name: "Login" });
    }
  }

  if (needAuth && !isAuthenticated) {
    return next({ name: "Login" });
  }

  if (isAuthenticated && to.name !== "Chat") {
    return next({ name: "Chat" });
  }

  next();
});
