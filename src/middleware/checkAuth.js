import { useAuthStore } from '../stores/auth'
export default function auth({ next, router }) {
    const user = JSON.parse(sessionStorage.getItem('auth'))

    const authStore = useAuthStore()
    if (user) {
        authStore.setAuth(user)
        return next()
    }
    else window.location.href = "/login"

}
