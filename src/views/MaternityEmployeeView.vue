<template>
    <div class="bg-white">
        <button class="btn-primary my-3" @click="showCreate">Tạo mới</button>
        <div @click.self="cancelAll" v-show="isShow" class="fog-l">
            <div class="w-[90%] lg:w-[60%] bg-white max-h-[90vh] overflow-y-scroll">
                
                <div class="w-[86%] mx-auto flex justify-end">
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
            isShow: false,
            isCreate: false,
            isUpdate: false
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            API.getMaternityEmployeeList(this.page)
                .then(res => {
                    this.list = res.data.result.items
                })
                .catch(err => swal.error(err))
        },
        showCreate() {
            this.isShow = true
            this.isCreate = true
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