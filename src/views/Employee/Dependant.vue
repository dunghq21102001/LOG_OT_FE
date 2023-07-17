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
import { useAuthStore } from '../../stores/auth'
import swal from '../../utilities/swal2'
export default {
    setup() {
        const authStore = useAuthStore()
        return { authStore }
    },
    data() {
        return {
            auth: this.authStore.getAuth,
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
            if (this.auth.listRoles?.[0] == 'Employee') {
                API.getDependanceForEmp()
                    .then(res => {
                        this.list = res.data.result
                    })
                    .catch(err => swal.error(err))
            } else {
                API.getDependentListByUser(this.$route.params.id)
                    .then(res => {
                        this.list = res.data.result.items
                    })
                    .catch(err => swal.error(err))
            }
        }
    }
}
</script>
