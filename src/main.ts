import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
import router from './router'
import interceptorsApi from '@/common/api/interceptors_api'

const app = createApp(App)

interceptorsApi()

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
