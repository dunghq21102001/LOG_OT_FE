<template>
    <div class="w-[20%] md:block hidden text-center bg-[#405189] min-h-screen fixed top-0 left-0">
        <span class="font-bold text-white">VELZON</span>

        <ul>
            <li v-for="menu in menuList" :key="menu.id">
                <ul>
                    <div v-for="item in menu.items" :key="item.itemName">
                        <li @click="item.isShow = !item.isShow"
                            class="flex justify-between px-5 py-2 items-center text-white my-3 cursor-pointer hover:bg-[#6376b3] relative">
                            {{ item.itemName }}
                            <font-awesome-icon icon="fa-solid fa-chevron-right" class="transition-all"
                                :class="!item.isShow ? '' : 'rotate-90'" />
                        </li>
                        <div class="overflow-hidden w-full transition-all flex flex-col items-start h-0"
                            :class="item.isShow ? 'h-[95px]' : ''">
                            <span  v-for="child in item.children"
                                class="hover:bg-[#6376b3] w-full text-white cursor-pointer pl-10 text-left">
                                {{ child.childName }}
                            </span>
                        </div>
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
            menuList: menu.menuList()
        }
    },
    created() { },
    methods: {}
}
</script>
<style scoped></style>