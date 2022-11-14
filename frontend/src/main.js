import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

import {
  ReactiveBase,
  DataSearch,
  MultiList,
  SingleRange,
  ToggleButton,
  ReactiveList,
} from "@appbaseio/reactivesearch-vue";

Vue.config.productionTip = false;

Vue.use(ReactiveBase);
Vue.use(DataSearch);
Vue.use(MultiList);
Vue.use(SingleRange);
Vue.use(ToggleButton);
Vue.use(ReactiveList);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
