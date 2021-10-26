import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import VueAxios from "vue-axios";
import Axios from "axios";

createApp(App).use(router).mount("#app");
createApp.use(VueAxios, Axios);
