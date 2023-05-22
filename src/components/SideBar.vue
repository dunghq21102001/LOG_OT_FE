<template>
    <div class="sm:w-[30%] md:w-[20%] sm:block hidden text-center bg-[#405189] dark:bg-[#212529] min-h-screen fixed top-0 left-0">
        <span class="font-bold text-white">VELZON</span>

        <ul>
            <li v-for="menu in menuList" :key="menu.id">
                <ul>
                    <div v-for="item in menu.items" :key="item.itemName">
                        <li @click="item.isShow = !item.isShow"
                            class="flex justify-between px-5 py-2 items-center text-white my-3 cursor-pointer hover:bg-[#6376b3] relative sm:text-[16px] md:text-[18px]">
                            {{ item.itemName }}
                            <font-awesome-icon icon="fa-solid fa-chevron-right" class="transition-all"
                                :class="!item.isShow ? '' : 'rotate-90'" />
                        </li>
                        <Transition name="children">
                            <div v-show="item.isShow"
                                class="overflow-hidden w-full transition-all flex flex-col items-start">
                                <span v-for="child in item.children" @click="onChangeRoute(child.childName)"
                                    :class="currentRoute == child.childName ? 'bg-[#6376b3] dark:bg-[#3c3e46]' : ''"
                                    class="hover:bg-[#6376b3] dark:hover:bg-[#3c3e46] w-full text-white cursor-pointer pl-10 text-left sm:text-[14px] md:text-[18px]">
                                    - {{ child.childName }}
                                </span>
                            </div>
                        </Transition>
                    </div>
                </ul>
            </li>
        </ul>

    </div>
</template>
<script>
import menu from '../service/menu'
export default {
    data() {
        return {
            menuList: menu.menuList(),
            currentRoute: 'Analytics'
        }
    },
    created() { },
    methods: {
        onChangeRoute(routeName) {
            this.currentRoute = routeName
        }
    }
}
</script>
<style scoped>
.children-enter-active,
.children-leave-active {
    transition: 0.2s ease;
}

.children-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.children-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>