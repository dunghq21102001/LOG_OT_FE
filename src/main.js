import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import functionCustom from './utilities/functionCustom'
import swal2 from './utilities/swal2'
import axios from 'axios';
import App from './App.vue'
import router from './router'

const app = createApp(App)


// nơi khai báo các package ở phạm vi global
window.functionCustom = functionCustom
window.swal2 = swal2
window.axios = axios

app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)

app.mount('#app')
