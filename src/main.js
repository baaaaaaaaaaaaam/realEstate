import { createApp } from 'vue'
import App from './App.vue'
import router from './route';
import {callAPI}  from './compositions/useCallAPI'
const app =  createApp(App);
let today = new Date().toISOString().substr(0,7).replace('-','');
app.config.globalProperties.$callAPI=callAPI;
app.config.globalProperties.$today=today;
 app.use(router);
app.mount('#app')

