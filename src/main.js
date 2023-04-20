import { createApp } from 'vue'
import App from './App.vue'
import route from './router.js'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(route).mount('#app')
