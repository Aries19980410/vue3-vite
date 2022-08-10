import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes/index'
const app = createApp(App)
app.use(ElementPlus)

app.use(router)

app.mount('#app')
