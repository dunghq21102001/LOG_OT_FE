
<template>
    <div class="bg-[#f3f3f9] dark:bg-[#1a1d21]">
        <HeaderCommon />
        <SideBar />
        <RouterView class="sm:ml-[32%] md:ml-[22%] mt-5 min-h-screen p-5 dark:bg-[#212529] dark:text-white" />
        <ScrollToTop/>
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
        const langStore = useLanguageStore();
        return { langStore };
    },
    data() {
        return {};
    },
    created() {
        this.getCurrentLang();
    },
    methods: {
        getCurrentLang() {
            this.$i18n.locale = this.langStore.getLocate;
        }
    },
    components: { SideBar, HeaderCommon: HeaderCommon, ScrollToTop }
}
</script>
<style scoped></style>
