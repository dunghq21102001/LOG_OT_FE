<template>
    <div>
        <div class="w-full text-xs flex">
            <div class="w-1/4 bg-white rounded-xl border-[1px] border-[#ccc] border-solid mr-4">
                <div class="grid justify-items-center p-4">
                    <div
                        class="mb-3 rounded-[50%] border-[1px] border-[#000] border-solid w-[110px] h-[110px] flex justify-center items-center">
                        <img src="../assets/images/adz.Webp" alt="ngừi yêu tui"
                            class="rounded-[50%] w-[100px] h-[100px] justify-center content-center" />
                    </div>
                    <div class="flex mb-1">
                        <span>Name:&nbsp</span>
                        <span>Văn Nguyễn</span>
                    </div>
                    <div class="flex mb-1">
                        <span>Role:&nbsp</span>
                        <span>Dev</span>
                    </div>
                    <div class="flex mb-1">
                        <span>Department:&nbsp</span>
                        <span>Office IT</span>
                    </div>
                    <div class="flex mb-1">
                        <span>EmployeeID:&nbsp</span>
                        <span>1231231231</span>
                    </div>
                </div>
            </div>
            <div class="w-3/4 bg-white rounded-none border-[1px] border-[#ccc] border-solid">
                <div class="overflow-x-scroll flex w-full justify-around items-center my-2 mx-1">
                    <div class="" v-for="i in empList" :key="i.name">
                        <router-link :to="'/employeeView/' + i.routeName">
                            {{ i.name }}
                        </router-link>
                    </div>
                </div>
                <div>
                    <router-view>

                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import service from '../service/menu'
export default {
    data() {
        return {
            empList: service.profileEmpMenu()
        }
    },
    created() { },
    methods: {
    }
}
</script>

<style scoped></style>