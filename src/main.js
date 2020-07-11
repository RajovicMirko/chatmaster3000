import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { getComponent } from "@c/componentMap";
Vue.prototype.$getComponent = getComponent;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
