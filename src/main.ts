import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import { i18n } from '@/i18n'
import reveal from '@/plugins/reveal'

const app = createApp(App)
app.use(i18n)
app.directive('reveal', reveal)

document.documentElement.lang = i18n.global.locale.value

app.mount('#app')
