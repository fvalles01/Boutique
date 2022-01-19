import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { vfmPlugin } from 'vue-final-modal'

createApp(App).use(router).use(store).use(vfmPlugin).mount('#app')
