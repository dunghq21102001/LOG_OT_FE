<template>
  <div class="bg-white">
    <form @submit.prevent="search" class="w-[100%] sm:w-[70%] lg:w-[30%] relative">
      <input type="text" class="w-full search-cus dark:bg-gray-800 dark:text-white" placeholder="search . . .">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="absolute top-[50%] right-4 translate-y-[-50%]" />
    </form>
    <button class="btn-primary my-3" @click="showCreate">Tạo mới</button>
    <div class="w-[90%] mx-auto mt-10">
      <EasyDataTable :headers="headers" :items="list" header-text-direction="center" :table-class-name="currentTheme"
        body-text-direction="center">
        <template #item-birthDay="item">
          <div>
            {{ convertDate(item.birthDay) }}
          </div>
        </template>
        <template #item-genderType="item">
          <div>
            {{ item.genderType = 1 ? "Nam" : "Nữ" }}
          </div>
        </template>
        <template #item-operation="item">
          <div class="operation-wrapper">
            <button class="view-btn" @click="goTo(item.userName)"><font-awesome-icon icon="fa-solid fa-eye" /></button>
            <button class="edit-btn" @click="showUpdate(item)"><font-awesome-icon
                icon="fa-solid fa-pen-to-square" /></button>
            <button class="delete-btn"><font-awesome-icon :icon="['fas', 'trash']" /></button>
          </div>
        </template>
      </EasyDataTable>
    </div>
    <div v-show="isShow" @click.self="cancelAll" class="fog-l">
      <div class="w-[90%] md:w-[60%] bg-white dark:bg-[#292e32] p-7 rounded-md h-[90vh] overflow-y-scroll">
        <div class="flex flex-wrap justify-center w-full">
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="username">Tên đăng nhập</label>
            <input type="text" id="username" v-model="currentEmp.userName"
              class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="fullName">Họ và Tên</label>
            <input type="text" id="fullName" v-model="currentEmp.fullName"
              class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="gender">Giới tính</label>
            <input type="text" id="gender" v-model="currentEmp.genderType"
              class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="currentEmp.email" class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="phone">Số điện thoại</label>
            <input type="text" id="phone" v-model="currentEmp.phoneNumber"
              class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="birthday">Sinh nhật</label>
            <input type="date" id="birthday" v-model="formattedDate" class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="address">Địa chỉ</label>
            <input type="text" id="address" v-model="currentEmp.address"
              class="input-cus dark:bg-gray-900 dark:text-white  ">
          </div>
          <div class="box-input w-[86%] lg:w-[40%]">
            <label for="position">Vị trí</label>
            <select type="text" id="position" v-model="selectedPosition"
              class="input-cus dark:bg-gray-900 dark:text-white  ">
              <option v-for="p in positionList" :value="p?.id" :key="p?.id">
                {{ p?.name }}
              </option>
            </select>
          </div>
          <div class="box-input w-[86%] lg:w-[40%] items-center">
            <img :src="currentEmp.image" alt="logo" class="w-[300px] h-[150px] block mx-auto">
            <input ref="imageFile" type="file" id="image" class="hidden">
            <label class="edit-btn w-[50px] text-center cursor-pointer" for="image"><font-awesome-icon
                :icon="['fas', 'image']" /></label>
            <button @click="uploadImage" class="btn-primary">Lưu</button>
          </div>
        </div>
        <div class="w-[86%] mx-auto flex justify-end">
          <button class="cancel-btn" @click="cancelAll"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
          <button v-if="isUpdate" @click="actionUpdate" class="edit-btn">Chỉnh sửa</button>
          <button v-if="isCreate" class="btn-primary"><font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useLanguageStore } from '../stores/lang';
import API from '../API'
import functionCustom from '../utilities/functionCustom'
import { useThemeStore } from '../stores/theme';
import swal from '../utilities/swal2';
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
export default {
  setup() {
    const langStore = useLanguageStore()
    const themeStore = useThemeStore()
    return { langStore, themeStore }
  },
  data() {
    return {
      list: [],
      page: 1,
      isShow: false,
      isCreate: false,
      isUpdate: false,
      positionList: [],
      selectedPosition: null,
      headers: [
        { text: "Tên tài khoản", value: "userName", width: 200 },
        { text: "Họ và Tên", value: "fullname", width: 200 },
        { text: "Giới tính", value: "genderType", width: 200 },
        { text: "Email", value: "email", width: 200 },
        { text: "Số điện thoại", value: "phoneNumber", width: 200 },
        { text: "Sinh nhật", value: "birthDay", width: 200 },
        // { text: "Tên ngân hàng", value: "bankName", width: 200 },
        // { text: "Tên tài khoản ngân hàng", value: "bankAccountName", width: 200 },
        // { text: "Số tài khoản ngân hàng", value: "bankAccountNumber", width: 200 },
        { text: "Địa chỉ", value: "address", width: 200 },
        // { text: "Kinh nghiệm", value: "experiences", width: 200 },
        { text: "Hành động", value: "operation", width: 500 },
      ],
      currentEmp: {
        userName: '',
        fullName: '',
        genderType: '',
        email: '',
        phoneNumber: '',
        birthDay: '',
        bankName: '',
        bankAccountName: '',
        bankAccountNumber: '',
        address: '',
        experiences: '',
        image: 'https://placehold.co/600x400'
      },
      currentTheme: ""
    }
  },
  created() {
    this.getList()
    this.setTheme()
    this.getPositionList()
  },
  computed: {
    formattedDate() {
      return this.currentEmp.birthDay.split('T')[0];
    }
  },
  watch: {
    'themeStore.getTheme': function (val) {
      this.currentTheme == 'light-theme' ? this.currentTheme = 'dark-theme' : this.currentTheme = 'light-theme'
    }
  },
  methods: {
    getList() {
      API.getListEmployee(this.page)
        .then(res => {
          this.list = res.data.items
        })
        .catch(err => swal.error(err))
    },
    getPositionList() {
      API.getListPosition()
        .then(res => {
          this.positionList = res.data.items
        })
        .catch(err => swal.error(err))
    },
    uploadImage() {
      const currentTime = new Date();
      const uniqueFileName = 'image_' + currentTime.getTime() + '.jpg';
      const storageRef = ref(storage, 'images/' + uniqueFileName);

      uploadBytes(storageRef, this.$refs.imageFile.files[0])
        .then(snapshot => {
          return getDownloadURL(snapshot.ref);
        })
        .then(downloadURL => {
          this.currentEmp.image = downloadURL;
          swal.success('Tải ảnh lên thành công');
        })
        .catch(error => {
          swal.error('Lỗi khi tải ảnh lên:', error)
        });
    },
    showUpdate(item) {
      console.log(item);
      this.currentEmp.userName = item.userName
      this.currentEmp.fullName = item.fullname
      this.currentEmp.genderType = item.genderType
      this.currentEmp.email = item.email
      this.currentEmp.birthDay = item.birthDay
      this.currentEmp.bankName = item.bankName
      this.currentEmp.bankAccountName = item.bankAccountName
      this.currentEmp.bankAccountNumber = item.bankAccountNumber
      this.currentEmp.address = item.address
      this.currentEmp.experiences = item.experiences
      this.currentEmp.image = item.image
      this.selectedPosition = item.positionId
      this.isShow = true
      this.isUpdate = true
    },
    actionUpdate() {
      console.log(this.currentEmp);
    },
    actionCreate() {
      const data = {
        positionId: this.selectedPosition,
        fullName: this.currentEmp.fullName,
        genderType: this.currentEmp.genderType,
        // identityNumber: ,
        birthDay: this.currentEmp.birthDay,
        bankAccountNumber: this.currentEmp.bankAccountNumber,
        bankAccountName: this.currentEmp.bankAccountName,
        bankName: this.currentEmp.bankName,
        username: this.currentEmp.userName,
        email: this.currentEmp.email,
        // isMaternity: this.is
        image: this.currentEmp.image
      }
      console.log();
    },
    convertDate(date) {
      return functionCustom.convertDate(date)
    },
    showCreate() {
      this.isShow = true
      this.isCreate = true
    },
    cancelAll() {
      this.isCreate = false
      this.isShow = false
      this.isUpdate = false
      this.selectedPosition = ''
      this.currentEmp = {
        userName: '',
        fullName: '',
        genderType: '',
        email: '',
        phoneNumber: '',
        birthDay: '',
        bankName: '',
        bankAccountName: '',
        bankAccountNumber: '',
        address: '',
        experiences: '',
        image: 'https://placehold.co/600x400'
      }
    },
    goTo(userName) {
      this.$router.push({ name: 'emp-information', params: { username: userName } })
    },
    setTheme() {
      let curr = this.themeStore.getTheme
      this.currentTheme = curr == 'auto' ? 'dark-theme' : 'light-theme'
    }
  }
}
</script>
  