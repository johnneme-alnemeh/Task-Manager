import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faClipboard } from '@fortawesome/free-solid-svg-icons'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './style.css'
import App from './App.vue'

library.add(faClipboard)
library.add(faHeart)

const app = createApp(App);
app.use(createPinia());
app.use(Toast);
app.mount('#app');