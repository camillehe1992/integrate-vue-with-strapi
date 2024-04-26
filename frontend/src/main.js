import {createApp} from "vue";
import {createVuetify} from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "@/styles/main.scss";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {aliases, mdi} from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

// ECharts
import * as echarts from "echarts";

const app = createApp(App).use(vuetify).use(echarts).use(store).use(router);

app.config.globalProperties.$echarts = echarts;
app.mount("#app");
