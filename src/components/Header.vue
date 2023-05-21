<template>
    <div class="bg-white md:w-full w-full flex justify-between p-4">
        <div class="sm:block hidden w-2/5">

        </div>
        <div class="w-full sm:w-3/5 flex flex-wrap items-center justify-around">
            <div class="w-[70px] relative">
                <country-flag class="cursor-pointer" v-click-outside-element="close" @click="showLang" country='vn'
                    size='normal' />
                <Transition name="lang">
                    <div v-show="isShowLang" class="absolute top-[100%] left-0 w-[200%] shadow-md bg-white">
                        <div class="hover:bg-[#dbd9d9] cursor-pointer flex justify-around" v-for="c in listLang">
                            <country-flag style="margin-top: -7px !important;" :country='c.code' size='normal' />
                            <span>{{ c.name }}</span>
                        </div>
                    </div>
                </Transition>
            </div>
            <font-awesome-icon icon="fa-solid fa-expand" class="hover-custom sm:block hidden" @click="expandAction" />
            <font-awesome-icon icon="fa-solid fa-moon" class="hover-custom sm:block hidden" />
            <font-awesome-icon icon="fa-solid fa-bell" class="hover-custom sm:block hidden" />
            <div class="flex items-center space-x-4 cursor-pointer relative">
                <img class="w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
                <div class="font-medium text-gray-500">
                    <div>Jese Leos</div>
                    <div class="text-sm">CTO</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listLang: [
                { id: 1, name: 'Tiếng Việt', code: 'vnm', value: 'vi' },
                { id: 2, name: 'Tiếng Anh', code: 'us', value: 'us' }
            ],
            isShowLang: false,
            isShowProfile: false
        }
    },
    methods: {
        showLang() {
            this.isShowLang = !this.isShowLang
        },
        showProfile() {
            this.isShowProfile = !this.isShowProfile
        },
        close() {
            this.isShowLang = false
            this.isShowProfile = false
        },
        expandAction() {
            const ele = document.body
            ele.requestFullscreen()
        }
    }
}
</script>
<style scoped>
.hover-custom {
    padding: 15px;
    transition: ease 0.4s;
    font-size: 24px;
}

.hover-custom:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    color: rgb(33, 33, 211);
}

.lang-enter-active,
.lang-leave-active {
    transition: opacity 0.5s ease;
}

.lang-enter-from ,
.lang-leave-to {
    opacity: 0;
}
</style>