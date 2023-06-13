import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: {}
    }),
    getters: {
        getAuth: state => {
            return state.auth
        }
    },
    actions: {
        setAuth() {
        }
    },
})