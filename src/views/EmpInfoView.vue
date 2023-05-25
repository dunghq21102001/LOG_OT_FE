<template>
    <div>
        <div class="wrapper-empinfo-page w-full h-[100vh] relative">
            <div
                class="wrapper-empinfo w-[100%] h-full sm:h-[90%] sm:w-[80%] bg-white rounded-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div
                    class="title-empinfo-page w-full h-11 bg-red-400 text-xl sm:text-2xl text-white mb-2 sm:mb-4 font-bold">
                    Xem thông tin chi tiết nhân viên
                </div>
                <div class="wrapper-empinfo-content  h-[90%] pl-4 pr-4">
                    <span class="text-red-600 font-bold text-xl">Thông tin chung</span>
                    <hr class="hr mt-1 mb-2">
                    <div
                        class="empinfo-content w-full h-max md:h-max lg:h-[50%] sm:h-[50%] flex flex-col md:flex-col lg:flex-row  sm:flex-row mb-0 md:mb-0 lg:mb-4 sm:mb-4">
                        <div class="per-info-emp w-full sm:w-2/3 flex mr-0 sm:mr-4 md:w-full lg:w-2/3">
                            <div class="img-empinfo w-[25%] sm:w-2/5 h-full mr-3 sm:mr-0">
                                <img src="../assets/images/adz.Webp" alt="ngừi yêu tui" class="h-full w-[90%] rounded-xl" />
                            </div>
                            <div
                                class="info-empinfo w-[70%] sm:w-[60%] grid items-center text-xs md:text-xs lg:text-base sm:text-base">
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
                            </div>
                        </div>
                        <div class="per-exp-emp w-full sm:w-[30%] p-[10px] md:w-full lg:w-[30%]">
                            <span class="text-red-600 font-bold text-base">Kinh nghiệm:</span>
                            <br>
                            <span class="flex text-justify text-base">Tôi là một lập trình viên Front-end có hơn 3 năm kinh
                                nghiệm
                                trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                                các dự án với công nghệ HTML, CSS, JavaScript, React,..., và từ đó tích lũy được nhiều kiến
                                thức, kinh nghiệm trong lĩnh vực này.</span>
                        </div>
                    </div>
                    <span class="text-red-600 font-bold text-xl">Danh sách bảng lương</span>
                    <hr class="hr mt-1 mb-2">
                    <!-- <div class="info-salary-content w-full h-[45%] sm:h-[30%] md:h-[35%] lg:h-[30%]">
                        <table class="sm:w-[98%] info-salary w-max overflow-scroll md:w-max lg:w-[98%]">
                            <thead class="font-bold bg-gray-300">
                                <tr class="leading-10">
                                    <th>Mã lương</th>
                                    <th>Ngày nhận</th>
                                    <th>Trạng thái</th>
                                    <th>Số tiền</th>
                                    <th>Xem chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="salary-items-content leading-9">
                                    <td>15254235423</td>
                                    <td>10/5/2023</td>
                                    <td><button class="bg-red-400 w-full rounded-xl leading-[170%]">Chưa nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/4/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/3/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/2/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr class="salary-items-content leading-9">
                                    <td>25245245234</td>
                                    <td>10/1/2023</td>
                                    <td><button class="bg-green-400 w-full rounded-xl leading-[170%]">Đã nhận</button></td>
                                    <td>10,000,000 VND</td>
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
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
                                    <td><button class="bg-red-300 w-full rounded-xl leading-[170%]">Chi tiết</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->
                    <EasyDataTable :headers="headers" :items="items"
                        :table-class-name="themeStore.getTheme == 'auto' ? 'dark-theme' : 'light-theme'">
                        <template #item-status="{ status }">
                            <div class="text-white rounded-md px-2 py-1 w-24 text-center"
                                :class="status == 'Đã nhận' ? 'bg-green-400' : 'bg-red-500'">
                                {{ status }}
                            </div>
                        </template>
                        <template #item-detail="item">
                            <div>
                                <button @click="detailItem(item)" class="px-2 py-1 rounded-lg bg-green-500 text-white">
                                    {{ $t('see detail') }}
                                </button>
                            </div>
                        </template>
                    </EasyDataTable>
                </div>
            </div>
        </div>
        <div class="show-salary-emp h-screen w-screen bg-custom ">
            <div
                class="salary-emp w-1/3 h-2/3 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl">
                <div class="title-empinfo-page w-full h-11 bg-red-400 text-2xl text-white mb-4 font-bold">
                    Bảng lương chi tiết tháng 5 năm 2023
                </div>
                <div class="wrapper-info-salary-emp h-[80%] w-full pr-3 pl-3">
                    <span class="text-red-600 font-bold text-xl">Thông tin chi tiết lương</span>
                    <hr class="hr mt-1 mb-2">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useThemeStore } from '../stores/theme';
export default {
    setup() {
        const themeStore = useThemeStore()
        return { themeStore }
    },
    data() {
        return {
            name: 'Van',
            headers: [
                { text: "Mã Lương", value: "id" },
                { text: "Ngày nhận", value: "receivedDate" },
                { text: "Trạng thái", value: "status" },
                { text: "Số tiền", value: "money" },
                { text: "Xem chi tiết", value: "detail", width: 150 },
            ],
            items: [
                { id: '1', receivedDate: '10/1/2023', status: 'Chưa nhận', money: '20.000.000 VND' },
                { id: '2', receivedDate: '10/2/2023', status: 'Đã nhận', money: '20.000.000 VND' },
                { id: '3', receivedDate: '10/3/2023', status: 'Chưa nhận', money: '20.000.000 VND' },
                { id: '4', receivedDate: '10/4/2023', status: 'Chưa nhận', money: '20.000.000 VND' },
                { id: '5', receivedDate: '10/5/2023', status: 'Chưa nhận', money: '20.000.000 VND' },
            ]
        }
    },
    methods: {
        detailItem(item) {
            console.log(item);
        }
    }
}
</script>
<style scoped>
.wrapper-empinfo-page {
    background-color: #f3f3f9
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


.bg-custom {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
}

.wrapper-info-salary-emp hr {
    border: 1px solid #ccc;
}

@media only screen and (max-width: 376px) {
    .info-salary-content {
        height: 21%;
    }
}
</style>