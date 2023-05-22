
<template>
    <div class="bg-[#f3f3f9] dark:bg-[#1a1d21]">
        <HeaderCommon v-if="currentRoute != 'login'" />
        <SideBar v-if="currentRoute != 'login'" />
        <RouterView class="min-h-screen p-5 dark:bg-[#212529] dark:text-white"
            :class="currentRoute == 'login' ? '' : 'mt-5 sm:ml-[32%] md:ml-[22%]'" />
        <ScrollToTop v-if="currentRoute != 'login'" />
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import HeaderCommon from './components/Header.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import { useLanguageStore } from './stores/lang'
import { RouterLink, RouterView } from 'vue-router'
export default {
    setup() {
        const langStore = useLanguageStore()
        return { langStore }
    },
    data() {
        return {
            currentRoute: ''
        }
    },
    computed: {
        currentRoute() {
            return this.currentRoute = this.$route.name
        }
    },
    created() {
        this.getCurrentLang()
    },
    methods: {
        getCurrentLang() {
            this.$i18n.locale = this.langStore.getLocate
        }
    },
    components: { SideBar, HeaderCommon: HeaderCommon, ScrollToTop }
}
</script>
<style scoped></style>
