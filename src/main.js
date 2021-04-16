import { createApp } from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'

import './scss/style.scss'
import './assets/fonts/roboto.css'

const app = createApp(AppLayout);

app.use(router);
app.use(store);

app.mount("#app");