<template>
    <div class="bg-white">
        <button class="btn-primary my-3" @click="chamCong">Chấm công</button>
        <div class="w-[90%] mx-auto mt-10">
            <h1>{{ regu?.title }}</h1>
            <h1> _ {{ regu?.morning }}</h1>
            <h1> _ {{ regu?.afternoon }}</h1>
        </div>
        <div class="w-[90%] mx-auto mt-10">
            <EasyDataTable :headers="headers" :items="list" header-text-direction="center" :table-class-name="currentTheme"
                body-text-direction="center">
                <template #item-fullname="item">
                    <div>
                        {{ item.applicationUser?.fullname }}
                    </div>
                </template>
                <template #item-email="item">
                    <div>
                        {{ item.applicationUser?.email }}
                    </div>
                </template>
                <template #item-date="item">
                    <div>
                        {{ convertDate(item.day) }}
                    </div>
                </template>
                <template #item-startTime="item">
                    <div>
                        {{ convertDate(item.startTime) }}
                    </div>
                </template>
                <template #item-endTime="item">
                    <div>
                        {{ convertDate(item.endTime) }}
                    </div>
                </template>
                <template #item-timeWork="item">
                    <div>
                        {{ convertTime(item.timeWork) }} tiếng
                    </div>
                </template>

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
            regu: null,
            page: 1,
            empList: [],
            acceptanceTypeList: [],
            isShowSelected: false,
            id: '',
            headers: [
                { text: "Tên nhân viên", value: "fullname", width: 200 },
                { text: "Email", value: "email", width: 200 },
                { text: "Ngày", value: "date", width: 200 },
                { text: "Thời gian bắt đầu", value: "startTime", width: 200 },
                { text: "Thời gian kết thúc", value: "endTime", width: 200 },
                { text: "Ca làm", value: "shiftEnum", width: 200 },
                { text: "Thời gian làm việc", value: "timeWork", width: 200 },
            ]
        }
    },
    created() {
        this.getList()
        this.getQuyDinh()
    },
    methods: {
        getQuyDinh() {
            API.getRegulations()
                .then(res => {
                    this.regu = res.data
                })
                .catch(err => {
                    swal.error(err)
                })
        },
        getList() {
            API.getListCurrentDay()
                .then(res => {
                    this.list = res.data
                })
                .catch(err => swal.error(err))
        },
        convertDate(date) {
            return functionCustom.convertDate(date)
        },
        convertTime(time) {
            return time.toFixed(3)
        },
        chamCong() {
            API.chamCong()
                .then(res => {
                    swal.success('Chấm công thành công')
                    this.getList()
                })
                .catch(err => {
                    swal.error(err.response.data)
                })
        }
    }
}
</script>