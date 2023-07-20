<template>
    <div>
        <div class="bg-white w-full p-3">
            <button @click="createDepartmentAllowanceForm" class="custom-btn mb-2 sm:mb-5 text-xs sm:text-base">Tạo phụ ngày
                làm</button>
            <div class="w-[90%] mx-auto">
                <EasyDataTable :headers="headers" :items="items" :table-class-name="currentTheme"
                    header-text-direction="center" body-text-direction="center">
                    <template #item-operation="item">
                        <div class="operation-wrapper">
                            <button class="view-btn"><font-awesome-icon icon="fa-solid fa-eye" /></button>
                            <button @click="updateDepartmentAllowanceForm(item)" class="edit-btn"><font-awesome-icon
                                    icon="fa-solid fa-pen-to-square" /></button>
                            <button @click="deleteAnnual(item.id)" class="delete-btn"><font-awesome-icon
                                    :icon="['fas', 'trash']" /></button>
                        </div>
                    </template>
                    <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
                        <button class="cursor-pointer mx-3" @click="page > 1 ? page -= 1 : page = 1"><font-awesome-icon
                                icon="fa-solid fa-chevron-left" /></button>
                        <button class="cursor-pointer mx-3"
                            @click="page < lastPage ? page += 1 : page = 1"><font-awesome-icon
                                icon="fa-solid fa-chevron-right" /></button>
                    </template>
                </EasyDataTable>
            </div>
        </div>
        <div v-show="isShow" class="h-screen w-screen bg-custom fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50"
            @click.self="isShow = false">
            <div
                class="w-[95%] sm:w-1/2 xl:w-1/2 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl pb-4 xl:pb-6">
                <div
                    class="w-full h-10 sm:h-10 text-center bg-red-400 text-white font-bold rounded-t-2xl text-sm sm:text-3xl flex justify-center items-center sm">
                    Tạo ngày làm việc
                </div>
                <div
                    class="w-full px-1 sm:sx-2 grid items-center text-xs sm:text-base justify-center p-1 sm:p-2 mt-1 sm:mt-2">
                    <div class="flex p-1 sm:p-2">
                        <label for="empid" class="w-[100px] sm:w-[130px]"><span>Ngày làm:</span></label>
                        <input class="bg-slate-200 w-[155px] sm:w-[235px] xl:w-[300px] px-2 sm:px-3 " id="name"
                            type="datetime-local" v-model="day">
                    </div>
                    <div class="flex p-1 sm:p-2">
                        <label for="empname" class="w-[100px] sm:w-[130px]"><span>Có là ngày lễ:</span></label>
                        <select v-model="isHoliday" class="bg-slate-200 w-[155px] sm:w-[235px] xl:w-[300px] px-2 sm:px-3">
                            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
                        </select>
                    </div>
                    <div class="flex justify-center p-1 sm:p-2 mt-3 sm:mt-5">
                        <button type="submit" @click="createDepartmentAllowance"
                            class="bg-red-400 text-white p-1 sm:p-2 rounded-md sm:rounded-xl mr-4 sm:mr-8">
                            Tạo phụ cấp phòng ban
                        </button>
                        <button @click="exit" type="exit" class="bg-red-400 text-white p-1 sm:p-2 rounded-md sm:rounded-xl">
                            Hủy tạo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="isShow2" class="h-screen w-screen bg-custom fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50"
            @click.self="isShow2 = false">
            <div
                class="w-[95%] sm:w-1/2 xl:w-1/2 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl pb-4 xl:pb-6">
                <div
                    class="w-full h-10 sm:h-10 text-center bg-red-400 text-white font-bold rounded-t-2xl text-sm sm:text-3xl flex justify-center items-center sm">
                    Chỉnh sửa ngày làm việc
                </div>
                <div
                    class="w-full px-1 sm:sx-2 grid items-center text-xs sm:text-base justify-center p-1 sm:p-2 mt-1 sm:mt-2">
                    <div class="flex p-1 sm:p-2">
                        <label for="empid" class="w-[100px] sm:w-[130px]"><span>Ngày làm:</span></label>
                        <input class="bg-slate-200 w-[155px] sm:w-[235px] xl:w-[300px] px-2 sm:px-3 " id="name"
                            type="datetime-local" v-model="currentAnnual.day">
                    </div>
                    <div class="flex p-1 sm:p-2">
                        <label for="empname" class="w-[100px] sm:w-[130px]"><span>Có là ngày lễ:</span></label>
                        <select v-model="currentAnnual.isHoliday"
                            class="bg-slate-200 w-[155px] sm:w-[235px] xl:w-[300px] px-2 sm:px-3">
                            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
                        </select>
                    </div>
                    <div class="flex justify-center p-1 sm:p-2 mt-3 sm:mt-5">
                        <button type="submit" @click="updateDepartmentAllowance"
                            class="bg-red-400 text-white p-1 sm:p-2 rounded-md sm:rounded-xl mr-4 sm:mr-8">
                            Chỉnh sửa ngày làm việc
                        </button>
                        <button @click="exit2" type="exit"
                            class="bg-red-400 text-white p-1 sm:p-2 rounded-md sm:rounded-xl">
                            Hủy tạo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Loading v-show="isLoading" />
    </div>
</template>
<script>
import API from '../API';
import Loading from '../components/Loading.vue'
export default {
    components: {
        Loading
    },
    data() {
        return {
            isLoading: false,
            headers: [
                //{ text: "Mã phòng ban", value: "id", width: 100, fixed: "left", },
                { text: "Ngày", value: "day", width: 140, },
                { text: "Loại ngày", value: "typeDate", width: 200, },
                { text: "Ca làm", value: "shiftType", width: 200, },
                { text: "Hệ số lương", value: "coefficient.amountCoefficient", width: 200, },
                { text: "Action", value: "operation", width: 300 },
            ],
            items: [],
            options: [
                { value: true, label: 'yes' },
                { value: false, label: 'no' },
            ],
            day: '',
            page: 1,
            lastPage: 1,
            isHoliday: '',
            isShow: false,
            isShow2: false,
            id: '',
            currentAnnual: {
                id: '',
                day: '',
                isHoliday: ''
            },
        }
    },
    'page': function (val) {
        this.getListAnnual()
    },
    methods: {
        resetFormCreate() {
            this.day = '',
                this.isHoliday = ''
        },
        createDepartmentAllowanceForm() {
            this.resetFormCreate()
            this.isShow = true
        },
        updateDepartmentAllowanceForm(item) {
            this.isShow2 = true
            this.currentAnnual.id = item.id,
                this.currentAnnual.day = item.day,
                this.currentAnnual.isHoliday = item.typeDate == "Holiday" ? "true" : "false"
        },
        updateDepartmentAllowance() {
            const data = {
                id: this.currentAnnual.id,
                day: this.currentAnnual.day,
                isHoliday: this.currentAnnual.isHoliday
            }
            API.updateAnnual(data)
                .then(response => {
                    swal.success(response.data)
                    this.exit2()
                    this.resetFormCreate()
                    this.getListAnnual()
                })
                .catch(error => {
                    swal.error(error)
                });
        },
        deleteAnnual(id) {
            swal.confirm('Bạn có chắc chắn ngày làm này không?').then((result) => {
                if (result.value) {
                    API.deleteAnnual(id)
                        .then(response => {
                            swal.success(response.data)
                            this.getListAnnual()
                        })
                        .catch(error => {
                            swal.error(error)
                        })
                }
            })
        },
        exit() {
            this.isShow = false
        },
        exit2() {
            this.isShow2 = false
        },
        getListAnnual() {
            this.isLoading = true
            API.getListAnnual(this.page)
                .then(response => {
                    this.isLoading = false
                    this.lastPage = response.data.totalPages
                    this.items = response.data.items
                })
                .catch(error => {
                    this.isLoading = false
                    swal.error(error)
                });
        },
        createDepartmentAllowance() {
            const data = {
                day: this.day,
                isHoliday: this.isHoliday
            }
            API.createAnnual(data)
                .then(response => {
                    swal.success(response.data)
                    this.exit()
                    this.resetFormCreate()
                    this.getListAnnual()
                })
                .catch(error => {
                    swal.error(error.data)
                });
        },
    },
    watch: {
        'page': function (val) {
            this.getListAnnual()
        },
    },
    created() {
        this.getListAnnual();
    },
    computed: {
    },
}


</script>
<style scoped>
.custom-btn {
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: rgb(248 113 113 / var(--tw-bg-opacity));
    ;
    color: white;
    border-radius: 4px;
}

.custom-btn:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgb(17, 129, 241) 0%, rgb(64, 85, 247) 100%);
}

.custom-btn:active {
    transform: translate(0em, 0.2em);
}
</style>