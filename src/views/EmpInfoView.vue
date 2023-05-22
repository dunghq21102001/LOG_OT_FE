<template>
   <div class="wrapper-empinfo-page w-full h-[100vh] relative">
        <div class="wrapper-empinfo w-1/2 bg-white rounded-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div class="title-empinfo-page w-full h-11 bg-red-400 text-2xl text-white mb-4 font-bold">Xem thông tin chi tiết nhân viên</div>           
        </div>
   </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'Van'
        }
    },
    methods: {
        test() {
            console.log('heoloo');
        }
    }
}
</script>
<style scoped>
.wrapper-empinfo-page {
    background: #E8E8E8;
}

.wrapper-empinfo {
    height: 90%;
}

.title-empinfo-page {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}


</style>