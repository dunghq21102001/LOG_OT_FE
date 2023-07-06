<template>
    <div>
        <div class="w-full text-xs flex">
            <div class="w-1/4 bg-white rounded-xl border-[1px] border-[#ccc] border-solid mr-4 h-fit">
                <div class="grid justify-items-center p-4">
                    <div
                        class="mb-3 rounded-[50%] border-[1px] border-[#000] border-solid w-[110px] h-[110px] flex justify-center items-center">
                        <img :src="currentEmp?.image" alt="image"
                            class="w-[100px] h-[100px] block mx-auto rounded-full object-cover justify-center content-center" />
                    </div>
                    <div class="flex mb-1">
                        <span>Name:&nbsp</span>
                        <span>{{ currentEmp?.fullname }}</span>
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
                        <p class="truncate" :title="currentEmp?.id">{{ currentEmp?.id }}</p>
                    </div>
                </div>
            </div>
            <div class="w-3/4 bg-white rounded-none border-[1px] border-[#ccc] border-solid">
                <div class="w-full overflow-y-scroll hidden-scroll">
                    <div class="w-[1000px] flex justify-around items-center bg-slate-300 py-3 font-bold">
                        <div class="mx-3 px-2 py-1" :class="currentRoute == i.routeName ? 'bg-[#405189] text-white' : ''"
                            v-for="i in empList" :key="i.name">
                            <router-link :to="{ name: i.routeName }">
                                <span @click="onChangeRoute(i.routeName)" class="text-[20px]">
                                    {{ i.name }}
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import service from '../service/menu'
import API from '../API'
import swal from '../utilities/swal2'
export default {
    data() {
        return {
            empList: service.profileEmpMenu(),
            currentRoute: 'emp-information',
            currentEmp: null
        }
    },
    created() {
        this.fetchDetailEmp()
    },
    methods: {
        onChangeRoute(routeName) {
            this.currentRoute = routeName
        },
        fetchDetailEmp() {
            API.getDetailEmployee(this.$route.params.username)
                .then(res => {
                    this.currentEmp = res.data
                    // this.gender = this.currentEmp?.genderType
                    // this.birthday = this.currentEmp?.birthDay
                    // this.workStatus = this.currentEmp?.workStatus
                    // this.bankingName = this.currentEmp?.bankName
                    // this.bankAccountName = this.currentEmp?.bankAccountName
                    // this.bankAccountNumber = this.currentEmp?.bankAccountNumber
                    // this.username = this.currentEmp?.userName
                    // this.normalizedUsername = this.currentEmp?.normalizedUserName
                    // this.email = this.currentEmp?.email
                    // this.normalizedEmail = this.currentEmp?.normalizedEmail
                    // this.emailConfirmed = this.currentEmp?.emailConfirmed
                    // this.passwordHash = this.currentEmp?.passwordHash
                    // this.securityStamp = this.currentEmp?.securityStamp
                    // this.concurrencyStamp = this.currentEmp?.concurrencyStamp
                    // this.phoneNumber = this.currentEmp?.phoneNumber
                    // this.phoneNumberConfirmed = this.currentEmp?.phoneNumberConfirmed
                    // this.twoFactorEnabled = this.currentEmp?.twoFactorEnabled
                    // this.lockoutEnd = this.currentEmp?.lockoutEnd
                    // this.lockoutEnabled = this.currentEmp?.lockoutEnabled
                    // this.accessFailedCount = this.currentEmp?.accessFailedCount
                })
                .catch(err => swal.error(err))
        }
    }
}
</script>

<style scoped>
.hidden-scroll {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}

.hidden-scroll::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.truncate {
    width: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
}
</style>