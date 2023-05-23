<template>
    <div>
        <div class="wrapper-empinfo-page w-full h-[100vh] relative">
            <div class="wrapper-empinfo bg-white rounded-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div class="title-empinfo-page w-full h-11 bg-red-400 text-2xl text-white mb-4 font-bold">
                    Xem thông tin chi tiết nhân viên
                </div>
                <div class="wrapper-empinfo-content  h-[90%] pl-4 pr-4">
                    <span class="text-red-600 font-bold text-xl">Thông tin chung</span>
                    <hr class="hr mt-1 mb-2">
                    <div class="empinfo-content w-full h-[50%] flex mb-4">
                        <div class="per-info-emp w-2/3 flex mr-4">
                            <div class="img-empinfo w-2/5 h-full">
                                <img src="../assets/images/adz.Webp" alt="ngừi yêu tui" class="h-full rounded-xl" />
                            </div>
                            <div class="info-empinfo w-[60%] grid items-center">
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Tên đăng nhập:</span>
                                    <span>adzzzzzzzzzz</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Họ và tên:</span>
                                    <span>Happy for you</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Số điện thoại:</span>
                                    <span>0123456789</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Giới tính:</span>
                                    <span>Nữ</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Ngày sinh:</span>
                                    <span>11/11/2001</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Chức vụ:</span>
                                    <span>Giám đốc</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Tên ngân hàng:</span>
                                    <span>Vietcombank</span>
                                </div>
                                <div class="info-emp flex">
                                    <span class="info-emp-w-title">Số tài khoản:</span>
                                    <span>012345678910</span>
                                </div>
                            </div>
                        </div>
                        <div class="per-exp-emp w-[30%] p-[10px]">
                            <span class="text-red-600 font-bold text-base">Kinh nghiệm:</span>
                            <br>
                            <span class="flex text-justify">Tôi là một lập trình viên Front-end có hơn 3 năm kinh nghiệm
                                trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                                các dự án với công nghệ HTML, CSS, JavaScript, React,..., và từ đó tích lũy được nhiều kiến
                                thức, kinh nghiệm trong lĩnh vực này.</span>
                        </div>
                    </div>
                    <span class="text-red-600 font-bold text-xl">Danh sách bảng lương</span>
                    <hr class="hr mt-1 mb-2">
                    <div class="info-salary-content w-full h-[30%]">
                        <table class="w-[98%] info-salary">
                            <thead class="font-bold bg-gray-300">
                                <tr class="leading-10">
                                    <th>Mã lương</th>
                                    <th>Ngày nhận</th>
                                    <th>Trạng thái</th>
                                    <th>Số tiền</th>
                                    <th>Chi tiết lương</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="salary-items-content leading-9">
                                    <td>15254235423</td>
                                    <td>10/5/2023</td>
                                    <td><button class="bg-red-400 w-full rounded-xl leading-[170%]">Chưa nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/4/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/3/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/2/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Xem thông tin</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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

    }
}
</script>
<style scoped>
.wrapper-empinfo-page {
    background-color: #f3f3f9
}

.wrapper-empinfo {
    height: 90%;
    width: 80%;
}

.title-empinfo-page {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}

.wrapper-empinfo-content hr {
    border: 1px solid #ccc;
}

.per-info-emp {
    border: 1px solid #ccc;
    padding: 10px;
}

.info-emp-w-title {
    width: 40%;
}

.info-salary {
    border: 1px solid #f2f2f2;
}

.info-salary-content {
    overflow: overlay;
}

.salary-items-content td {
    text-align: center;
}

.salary-items-content:nth-child(even) {
    background-color: #f2f2f2;
}
</style>