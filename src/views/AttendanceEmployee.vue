<template>
    <div class="bg-white">
        <button class="btn-primary my-3" @click="chamCong">Chấm công</button>
        <div class="w-[90%] mx-auto mt-10">
            <EasyDataTable :headers="headers" :items="list" header-text-direction="center" :table-class-name="currentTheme"
                body-text-direction="center">
                <template #item-birthDay="item">
                    <div>
                        {{ convertDate(item.birthDay) }}
                    </div>
                </template>
                <!-- <template #item-operation="item">
                    <div class="operation-wrapper">
                        <button class="edit-btn" @click="showUpdate(item)"><font-awesome-icon
                                icon="fa-solid fa-pen-to-square" /></button>
                        <button @click="deleteM(item.id)" class="delete-btn"><font-awesome-icon
                                :icon="['fas', 'trash']" /></button>
                    </div>
                </template> -->
            </EasyDataTable>
        </div>

    </div>
</template>
<script>
import API from '../API'
import swal from '../utilities/swal2'
import functionCustom from '../utilities/functionCustom'
export default {
    data() {
        return {
            list: [],
            page: 1,
            empList: [],
            acceptanceTypeList: [],
            isShowSelected: false,
            id: '',
            headers: [
                { text: "Tên nhân viên", value: "applicationUserId", width: 200 },
                { text: "Sinh nhật", value: "birthDay", width: 200 },
                { text: "Lý do từ chối", value: "denyReason", width: 200 },
                { text: "Acceptance Type", value: "acceptanceType", width: 200 },
            ]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            API.getAttendanceEmployeeList(this.page)
                .then(res => {
                    this.list = res.data.items
                })
                .catch(err => swal.error(err))
        },
        chamCong() {
            API.createAttendance()
                .then(res => {
                    swal.success('Chấm công thành công')
                    this.getList()
                })
                .catch(err => swal.error(err))
        }
    }
}
</script>