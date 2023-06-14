<template>
    <div>
        <div class="p-4 flex">
            <div class="w-1/2">
                <div class="mb-4">
                    <div class="flex justify-center font-bold text-base mb-2">
                        <span>General information</span>
                    </div>
                    <div class="flex justify-start flex-col">
                        <div class="flex p-1">
                            <label for="fullname" class="w-[29%]">Full Name:&nbsp</label>
                            <input id="fullname" type="text" placeholder="Nguyễn Đức Hải Văn" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="gender" class="w-[29%]">Gender:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="male" class="pr-1 sm:pr-2">Male</label>
                                <input type="radio" id="male" value="1" v-model="gender">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="female" class="pr-1 sm:pr-2">Female</label>
                                <input type="radio" id="female" value="0" v-model="gender">
                            </div>                          
                        </div>
                        <div class="flex p-1">
                            <label for="address" class="w-[29%]">Address:&nbsp</label>
                            <input id="address" type="text" placeholder="An Bình, Bình An, Long Thành, Đồng Nai"
                                class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="image" class="w-[29%]">Image:&nbsp</label>
                            <div class="flex flex-col items-start mt-4 w-[71%]">
                                <div
                                    class="w-20 h-20 rounded-lg border-[1px] border-[#ccc] border-solid mb-2 flex items-center justify-center">
                                    <img :src="imageUrl" v-if="imageUrl" alt="Selected Image"
                                        class="w-[95%] h-[95%] rounded-lg">
                                </div>
                                <input type="file" id="image" @change="handleImageChange" />
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="identitynumber" class="w-[29%]">Identity Number:&nbsp</label>
                            <input id="identitynumber" type="text" placeholder="123456" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="birthday" class="w-[29%]">Birthday:&nbsp</label>
                            <input v-model="birthday" type="datetime-local" id="birthday" class="w-[50%] bg-slate-400" />
                        </div>
                        <div class="flex p-1">
                            <label for="maternity" class="w-[29%]">Maternity:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="maternityYes" class="pr-1 sm:pr-2">Yes</label>
                                <input type="radio" id="maternityYes" value="True" v-model="maternity">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="maternityNo" class="pr-1 sm:pr-2">No</label>
                                <input type="radio" id="maternityNo" value="False" v-model="maternity">
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="imagebase" class="w-[29%]">Image Base:&nbsp</label>
                            <div class="flex flex-col items-start mt-4 w-[71%]">
                                <div
                                    class="w-20 h-20 rounded-lg border-[1px] border-[#ccc] border-solid mb-2 flex items-center justify-center">
                                    <img :src="imageUrlBase" v-if="imageUrlBase" alt="Selected Image Base"
                                        class="w-[95%] h-[95%] rounded-lg">
                                </div>
                                <input type="file" id="imagebase" @change="handleImageBaseChange" />
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="workStatus" class="w-[29%]">Work Status:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="workStatusYes" class="pr-1 sm:pr-2">Yes</label>
                                <input type="radio" id="workStatusYes" value="True" v-model="workStatus">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="workStatusNo" class="pr-1 sm:pr-2">No</label>
                                <input type="radio" id="workStatusNo" value="False" v-model="workStatus">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex justify-center font-bold text-base mb-2">
                        <span>Banking information</span>
                    </div>
                    <div class="flex justify-start flex-col">
                        <div class="flex p-1">
                            <label for="bankname" class="w-[29%]">Bank Name:&nbsp</label>
                            <input id="bankname" type="text" placeholder="Ngân hàng Vietcombank chi nhánh Thủ Đức"
                                class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="bankaccountname" class="w-[29%]">Bank account Name:&nbsp</label>
                            <input id="bankaccountname" type="text" placeholder="Vietcombank" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="bankaccountnumber" class="w-[29%]">Bank account Number:&nbsp</label>
                            <input id="bankaccountnumber" type="text" placeholder="12312312312312313213" class="w-[71%]" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="mb-4">
                    <div class="flex justify-center font-bold text-base mb-2">
                        <span>Security</span>
                    </div>
                    <div class="flex justify-start flex-col">
                        <div class="flex p-1">
                            <label for="username" class="w-[29%]">Username:&nbsp</label>
                            <input id="username" type="text" placeholder="vandeptrai123" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="normalizedUsername" class="w-[29%]">Normalized Username:&nbsp</label>
                            <input id="normalizedUsername" type="text" placeholder="vandeptrai123" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="email" class="w-[29%]">Email:&nbsp</label>
                            <input id="email" type="text" placeholder="vandeptrai123@gmail.com" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="normalizedEmail" class="w-[29%]">Normalized Email:&nbsp</label>
                            <input id="normalizedEmail" type="text" placeholder="vandeptrai123@gmail.com" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="emailConfirmed" class="w-[29%]">Email Confirmed:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="emailConfirmedYes" class="pr-1 sm:pr-2">Yes</label>
                                <input type="radio" id="emailConfirmedYes" value="True" v-model="emailConfirmed">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="emailConfirmedNo" class="pr-1 sm:pr-2">No</label>
                                <input type="radio" id="emailConfirmedNo" value="False" v-model="emailConfirmed">
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="passwordHash" class="w-[29%]">Password Hash:&nbsp</label>
                            <input id="passwordHash" type="text" placeholder="acbxyz" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="securityStamp" class="w-[29%]">Security Stamp:&nbsp</label>
                            <input id="securityStamp" type="text" placeholder="acbxyz" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="concurrencyStamp" class="w-[29%]">Concurrency Stamp:&nbsp</label>
                            <input id="concurrencyStamp" type="text" placeholder="acbxyz" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="phoneNumber" class="w-[29%]">Phone Number:&nbsp</label>
                            <input id="phoneNumber" type="text" placeholder="2123123123213" class="w-[71%]" />
                        </div>
                        <div class="flex p-1">
                            <label for="phoneNumberConfirmed" class="w-[29%]">Phone Number Confirmed:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="phoneNumberConfirmedYes" class="pr-1 sm:pr-2">Yes</label>
                                <input type="radio" id="phoneNumberConfirmedYes" value="True" v-model="phoneNumberConfirmed">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="phoneNumberConfirmedNo" class="pr-1 sm:pr-2">No</label>
                                <input type="radio" id="phoneNumberConfirmedNo" value="False" v-model="phoneNumberConfirmed">
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="twoFactorEnabled" class="w-[29%]">Two Factor Enabled:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="twoFactorEnabledYes" class="pr-1 sm:pr-2">Yes</label>
                                <input type="radio" id="twoFactorEnabledYes" value="True" v-model="twoFactorEnabled">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="twoFactorEnabledNo" class="pr-1 sm:pr-2">No</label>
                                <input type="radio" id="twoFactorEnabledNo" value="False" v-model="twoFactorEnabled">
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="lockoutEnd" class="w-[29%]">Lockout End:&nbsp</label>
                            <input v-model="lockoutEnd" type="datetime-local" id="lockoutEnd" class="w-[50%] bg-slate-400" />
                        </div>
                        <div class="flex p-1">
                            <label for="lockoutEnabled" class="w-[29%]">Lockout Enabled:&nbsp</label>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="lockoutEnabledYes" class="pr-1 sm:pr-2">Yes</label>
                                <input type="radio" id="lockoutEnabledYes" value="True" v-model="lockoutEnabled">
                            </div>
                            <div class="pr-1 sm:pr-6 flex items-center">
                                <label for="lockoutEnabledNo" class="pr-1 sm:pr-2">No</label>
                                <input type="radio" id="lockoutEnabledNo" value="False" v-model="lockoutEnabled">
                            </div>
                        </div>
                        <div class="flex p-1">
                            <label for="accessFailedCount" class="w-[29%]">Access Failed Count:&nbsp</label>
                            <input id="accessFailedCount" type="text" placeholder="4" class="w-[71%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gender: '',
            imageFile: null,
            birthday: null,
            maternity: '',
            workStatus: '',
            imageFileBase: null,
            emailConfirmed: '',
            phoneNumberConfirmed: '',
            twoFactorEnabled:'',
            lockoutEnd: null,
            lockoutEnabled: '',     
        }
    },
    computed: {
        imageUrl() {
            return this.imageFile ? URL.createObjectURL(this.imageFile) : null
        },
        imageUrlBase() {
            return this.imageFileBase ? URL.createObjectURL(this.imageFileBase) : null
        }
    },
    methods: {
        handleImageChange(event) {
            this.imageFile = event.target.files[0]
        },
        handleImageBaseChange(event) {
            this.imageFileBase = event.target.files[0]
        }
    }
}
</script>