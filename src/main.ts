import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import http from '@/utils/http.ts'
import router from './router'


const app = createApp(App)

app.config.globalProperties.$axios = http

app.use(router)
app.use(ElementPlus)
app.mount('#app')
