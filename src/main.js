import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 导入element样式和组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入unicode图标
import '@/assets/iconfont/iconfont.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 全局组成element-plus
app.use(ElementPlus, { size: 'small' })

app.use(createPinia())
app.use(router)

app.mount('#app')
