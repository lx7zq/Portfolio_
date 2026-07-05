import './assets/main.css'

import { createApp } from 'vue'

import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import { i18n } from './i18n'

const app = createApp(App)

app.use(i18n)
app.use(MotionPlugin)

app.mount('#app')
