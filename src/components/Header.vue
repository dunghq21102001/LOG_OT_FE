<template>
    <div class="bg-white md:w-full w-full flex justify-between p-4 dark:bg-[#292e32] dark:text-[#ced4da]">
        <div class="sm:block hidden w-2/5">

        </div>
        <div class="w-full sm:w-3/5 flex flex-wrap items-center justify-around">
            <font-awesome-icon class="block sm:hidden w-3" @click="isShowMobileMenu = !isShowMobileMenu"
                :icon="isShowMobileMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
            <div class="w-[50px] relative">
                <country-flag class="cursor-pointer" v-click-outside-element="close" @click="showLang"
                    :country="currentLang == 'vnm' ? 'vn' : 'us'" size='normal' />
                <Transition name="lang">
                    <div v-show="isShowLang" class="absolute top-[100%] left-0 w-[300%] shadow-md bg-white">
                        <div @click="changeLang(c.code)"
                            class="hover:bg-[#dbd9d9] cursor-pointer flex justify-around px-2 py-3 my-1"
                            v-for="c in listLang">
                            <country-flag style="margin-top: -7px !important;" :country='c.code' size='normal' />
                            <span class="dark:text-black">{{ c.name }}</span>
                        </div>
                    </div>
                </Transition>
            </div>
            <font-awesome-icon icon="fa-solid fa-expand" class="hover-custom sm:block hidden" @click="expandAction" />
            <font-awesome-icon v-show="!isDark" @click="changeTheme" icon="fa-solid fa-moon"
                class="hover-custom sm:block hidden" />
            <font-awesome-icon v-show="isDark" @click="changeTheme" icon="fa-solid fa-sun"
                class="hover-custom sm:block hidden" />
            <font-awesome-icon icon="fa-solid fa-bell" class="hover-custom sm:block hidden" />
            <div class="flex items-center space-x-4 relative">
                <img class="w-10 h-10 rounded-full cursor-pointer" v-click-outside-element="closeProfile"
                    @click="showProfile" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
                <div class="font-medium text-gray-500">
                    <div>Jese Leos</div>
                    <div class="text-sm">CTO</div>
                </div>
                <Transition name="profile">
                    <div v-show="isShowProfile" class="absolute top-[100%] left-0 w-full flex flex-col bg-white shadow-lg">
                        <span v-for="item in profileMenu"
                            class="hover:bg-[#dbd9d9] cursor-pointer px-2 py-4 my-1 dark:text-black">
                            {{ $t(item.name) }}
                        </span>
                    </div>
                </Transition>
            </div>
            <Transition name="mobile-menu">
                <SideBarMobile v-show="isShowMobileMenu" :isShow="isShowMobileMenu" @close-menu="closeMenuMobile" />
            </Transition>
        </div>
    </div>
    <Loading v-if="isLoading"/>
</template>
<script>
import { useLanguageStore } from '../stores/lang'
import { useDark, useToggle } from '@vueuse/core'
import menu from '../service/menu'
import Loading from './Loading.vue'
import SideBarMobile from './SideBarMobile.vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
export default {
    setup() {
        const langStore = useLanguageStore()
        return { langStore }
    },
    components: {
        SideBarMobile, Loading
    },
    data() {
        return {
            currentLang: '',
            listLang: [
                { id: 1, name: 'Tiếng Việt', code: 'vnm', value: 'vi' },
                { id: 2, name: 'Tiếng Anh', code: 'us', value: 'us' }
            ],
            profileMenu: menu.profileMenu(),
            isShowLang: false,
            isShowProfile: false,
            isDark: true,
            isShowMobileMenu: false,
            isLoading: false
        }
    },
    created() {
        this.getCurrentLanguage()
    },
    methods: {
        getCurrentLanguage() {
            this.listLang.map(l => {
                if (l.value == this.langStore.getLocate) {
                    if (this.langStore.getLocate == 'vi') this.currentLang = 'vnm'
                    else this.currentLang = 'us'
                }
            })
        },
        showLang() {
            this.isShowLang = !this.isShowLang
        },
        showProfile() {
            this.isShowProfile = !this.isShowProfile
        },
        close() {
            this.isShowLang = false
        },
        closeProfile() {
            this.isShowProfile = false
        },
        changeTheme() {
            // isDark.value = !isDark.value
            toggleDark()
            this.isDark = isDark.value
        },
        expandAction() {
            const ele = document.body
            ele.requestFullscreen()
        },
        closeMenuMobile(e) {
            this.isShowMobileMenu = e
        },
        changeLang(lang) {
            this.currentLang = lang
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
            }, 1500)
            const value = lang == 'vnm' ? false : true
            this.langStore.setLocate(value)
            this.$i18n.locale = value == true ? 'en' : 'vi'
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

.lang-enter-from,
.lang-leave-to {
    opacity: 0;
}


.profile-enter-active,
.profile-leave-active {
    transition: 0.2s ease;
}

.profile-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.profile-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: 0.5s ease;
}

.mobile-menu-enter-from {
    transform: translateX(-100%);
}

.mobile-menu-leave-to {
    transform: translateX(-100%);
}
</style>