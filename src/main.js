import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2'
import functionCustom from './utilities/functionCustom'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import swal from './utilities/swal2'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import i18n from './utilities/i18n'
import vueClickOutsideElement from 'vue-click-outside-element'
import CountryFlag from 'vue-country-flag-next'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faUserSecret, faMagnifyingGlass, faChevronRight, faExpand, faMoon, faBell, faEye, faEyeSlash, faSortUp, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faUserSecret, faMagnifyingGlass, faChevronRight, faExpand, faMoon, faBell, faEye, faEyeSlash, faSortUp, faSun, faBars, faXmark)



// nơi khai báo các package ở phạm vi global
window.functionCustom = functionCustom
window.swal = swal
window.axios = axios

// nơi khai báo các component ở phạm vi global
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('country-flag', CountryFlag)

app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vueClickOutsideElement)

app.mount('#app')
