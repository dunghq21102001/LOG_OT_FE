<template>
    <div class="bg-white">
        <button class="btn-primary my-3" @click="showCreate">Tạo mới</button>
        <div @click.self="cancelAll" v-show="isShow" class="fog-l">
            <div
                class="w-[90%] lg:w-[60%]  dark:bg-[#292e32] flex flex-col items-center bg-white max-h-[90vh] overflow-y-scroll">
                <div class="w-full flex items-center justify-center">
                    <div class="box-input w-[86%] lg:w-[40%]">
                        <label for="birthday">Sinh nhật</label>
                        <input type="datetime-local" id="birthday" class="input-cus dark:bg-gray-900 dark:text-white  ">
                    </div>
                    <div class="box-input w-[88%] lg:w-[40%]">
                        <label for="denyReason">Deny Reason</label>
                        <input type="text" id="denyReason" class="input-cus dark:bg-gray-900 dark:text-white  ">
                    </div>
                </div>
                <div class="w-[88%]">
                    <label for="denyReason">Nhân viên</label>
                    <div class="bg-[#dbdbdb] px-[14px] py-[12px] rounded-xl w-full relative cursor-pointer">
                        <p @click="isShowSelected = !isShowSelected" v-click-outside-element="closeSelect" class="w-full text-center top-0 left-0">{{ selectedEmp }}</p>
                        <div v-show="isShowSelected" class="absolute top-[105%] left-0 w-full bg-[#dbdbdb] px-[14px] py-[12px] rounded-xl">
                            asoin
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="cancel-btn" @click="cancelAll"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                    <button v-if="isUpdate" class="edit-btn">Chỉnh sửa</button>
                    <button v-if="isCreate" @click="actionCreate" class="btn-primary"><font-awesome-icon
                            icon="fa-solid fa-plus" /></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import API from '../API'
import swal from '../utilities/swal2'
export default {
    data() {
        return {
            list: [],
            page: 1,
            empList: [],
            isShowSelected: false,
            selectedEmp: 'ascnoi',
            empPage: 1,
            isShow: false,
            isCreate: false,
            isUpdate: false
        }
    },
    created() {
        this.getList()
        this.getEmpList()
    },
    methods: {
        getList() {
            API.getMaternityEmployeeList(this.page)
                .then(res => {
                    this.list = res.data.result.items
                })
                .catch(err => swal.error(err))
        },
        getEmpList() {
            API.getListEmployee(this.empPage)
                .then(res => {
                    this.empList = res.data.items
                })
                .catch(err => swal.error(err))
        },
        showCreate() {
            this.isShow = true
            this.isCreate = true
        },
        closeSelect() {
            console.log('here');
            this.isShowSelected = false
        },
        actionCreate() {

        },
        cancelAll() {
            this.isCreate = false
            this.isShow = false
            this.isUpdate = false
        }
    }
}
</script>