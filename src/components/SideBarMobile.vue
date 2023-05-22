<template>
    <div class="h-screen w-screen bg-custom">
        <div class="w-[80%] bg-[#f3f3f9] h-full dark:bg-[#1a1d21] overflow-y-scroll"></div>
    </div>
</template>
<script>
import menu from '../service/menu'
export default {
    props: {
        isShow: Boolean
    },
    data() {
        return {
            listMenu: menu.menuList(),
            currentRoute: 'Analytics'
        }
    },
    methods: {
        onChangeRoute(routeName) {
            this.currentRoute = routeName
            
        }
    }
}
</script>
<style scoped>
.bg-custom {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>