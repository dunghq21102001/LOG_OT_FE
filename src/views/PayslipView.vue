<template>
    <div class="bg-white"></div>
</template>
<script>
import API from '../API'
import swal from '../utilities/swal2'
export default {
    data() {
        return {
            page: 1,
            list: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            API.getListPayslip(this.page)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                swal.error('Không thể lấy danh sách, vui lòng thử lại!')
            })
        }
    }
}
</script>