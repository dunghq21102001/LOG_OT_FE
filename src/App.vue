
<template>
    <div class="bg-[#f3f3f9]">
        <HeaderCommon />
        <SideBar />
        <RouterView class="ml-[22%] mt-5 min-h-screen p-5" />
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import HeaderCommon from './components/Header.vue'
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
    components: { SideBar, HeaderCommon: HeaderCommon }
}
</script>
<style scoped></style>
