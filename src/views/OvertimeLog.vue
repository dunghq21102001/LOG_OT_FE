<template>
    <div class="bg-white">
        <button class="btn-primary my-3" @click="showCreate">Tạo mới</button>
        <div @click.self="cancelAll" v-show="isShow" class="fog-l">
            <div class="w-[90%] lg:w-[60%] bg-white overflow-y-scroll max-h-[90vh]">
                <div class="w-full flex flex-wrap items-center justify-center">
                    <div class="box-input w-[90%] lg:w-[30%]">
                        <label for="hours">Số giờ</label>
                        <input v-model="overtimeLog.hours" id="hours" type="number" class="input-cus w-full" placeholder="0"
                            max="12" min="1" maxlength="2" minlength="1">
                    </div>
                    <div class="box-input w-[90%] lg:w-[50%]">
                        <label for="emp">Nhân viên</label>
                        <select v-model="overtimeLog.employeeId" class="select-cus" name="" id="emp">
                            <option :value="emp.id" v-for="emp in employeeList" :key="emp.id">
                                Họ và tên: {{ emp.fullname }} | Email: {{ emp.email }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <div class="box-input w-[90%] lg:w-[87%]">
                        <label for="date">Ngày</label>
                        <input :value="formattedDatetime" @input="updateDatetime" type="datetime-local" id="date"
                            class="input-cus w-full">
                    </div>
                </div>
                <div class="w-[86%] mx-auto flex justify-end">
                    <button class="cancel-btn" @click="cancelAll"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                    <button v-if="isUpdate" class="edit-btn">Chỉnh sửa</button>
                    <button v-if="isCreate" @click="actionCreate" class="btn-primary"><font-awesome-icon icon="fa-solid fa-plus" /></button>
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
            employeeList: [],
            employeePage: 1,
            isShow: false,
            isCreate: false,
            isUpdate: false,
            overtimeLog: {
                date: '2023-01-01T00:00:00.070Z',
                hours: 1,
                employeeId: ''
            }
        }
    },
    created() {
        this.getList()
        this.getEmployeeList()
    },
    computed: {
        formattedDatetime() {
            const date = new Date(this.overtimeLog.date)
            const formatted = date.toISOString().slice(0, 16)
            return formatted
        }
    },
    methods: {
        getList() {
            API.getOverTimeLogList()
                .then(res => {
                    this.list = res.data.items
                })
                .catch(err => swal.error(err))
        },
        getEmployeeList() {
            API.getListEmployee(this.employeePage)
                .then(res => {
                    this.employeeList = res.data.items
                })
                .catch(err => swal.error(err))
        },
        updateDatetime(event) {
            const selectedDatetime = event.target.value
            const date = new Date(selectedDatetime)
            this.overtimeLog.date = date.toISOString()
        },
        showCreate() {
            this.isShow = true
            this.isCreate = true
        },
        actionCreate() {
            API.createOTLog(this.overtimeLog)
                .then(res => {
                    this.getList()
                    this.cancelAll()
                    swal.success('Đã tạo mới thời gian làm thêm cho nhân viên thành công', 3000)
                })
                .catch(err => {
                    swal.error(err.response.data)
                })
        },
        cancelAll() {
            this.isCreate = false
            this.isShow = false
            this.isUpdate = false
            this.overtimeLog = {
                date: '2023-01-01T00:00:00.070Z',
                hours: 1,
                employeeId: ''
            }
        }
    }
}
</script>