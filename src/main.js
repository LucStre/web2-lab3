import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CurrConverter from "./components/CurrConverter.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("curr-converter", CurrConverter);
app.mount("#app");
