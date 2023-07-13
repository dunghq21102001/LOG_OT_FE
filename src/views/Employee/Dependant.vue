<template>
    <div class="bg-white">
        <div class="w-[90%] mx-auto mt-10">
            <EasyDataTable :headers="headers" :items="list" header-text-direction="center" :table-class-name="currentTheme"
                body-text-direction="center">
            </EasyDataTable>
        </div>
    </div>
</template>
<script>
import API from '../../API'
import swal from '../../utilities/swal2'
export default {
    data() {
        return {
            list: [],
            headers: [
            { text: "Tên", value: "name", width: 200 },
                { text: "Sinh nhật", value: "birthDate", width: 200 },
                { text: "Mô tả", value: "desciption", width: 200 },
                { text: "Mối quan hệ", value: "relationship", width: 200 },
                { text: "Acceptance Type", value: "acceptanceType", width: 200 },
            ]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            API.getDependentListByUser(this.$route.params.id)
                .then(res => {
                    this.list = res.data.result.items
                    console.log(res);
                })
                .catch(err => swal.error(err))
        }
    }
}
</script>
