import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import { createRouter, createWebHistory } from "vue-router";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
