import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index.js";

const app = createApp(App);

app.use(router);
app.use(store).mount("#app");

