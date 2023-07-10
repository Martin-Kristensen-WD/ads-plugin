import { createApp } from 'vue';
import App from './App.vue';
import adPlugin from './plugin.ts';

const app = createApp(App);

app.use(adPlugin);

app.mount('#app');
