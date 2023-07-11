<template>
    <div class="wrapper-login-page w-full h-[100vh] bg-no-repeat">
        <div class="wrapper-login w-[95%] sm:w-[400px]">
            <h2 class="text-2xl sm:text-3xl">{{ $t("title-login") }}</h2>
            <form class="content-login">
                <div class="box-input-login box-input-login-mgb">
                    <input type="text" name="" required :value="user.username"
                        @change="handleChangeUsername($event.target.value)" @keydown.enter="login">
                    <label>Tên tài khoản</label>
                </div>
                <div class="box-input-login">
                    <input :type="eyeShow ? 'text' : 'password'" name="" required v-model="user.password"
                        @keydown.enter="login">
                    <label>Mật khẩu</label>
                    <font-awesome-icon :icon="!eyeShow ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                        class="text-white absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 text-2xl"
                        @click="eyeShow = !eyeShow" />
                </div>
                <div class="save-pass-login flex items-center">
                    <input id="save" v-model="savePassword" type="checkbox" name="" />
                    <label for="save">Lưu mật khẩu</label>
                </div>
                <a class="cursor-pointer" @click="login">ĐĂNG NHẬP</a>
            </form>
            <div class="relative">
                <a href="" class="text-white absolute top-0 right-0 mt-2">Quên mật khẩu?</a>
            </div>
        </div>
        <Loading v-if="isLoading" />
    </div>
</template>
<script>
import API from '../API'
import Loading from '../components/Loading.vue'
import { useAuthStore } from '../stores/auth'
import swal from '../utilities/swal2'
export default {
    components: { Loading },
    setup() {
        const authStore = useAuthStore()
        return { authStore }
    },
    data() {
        return {
            eyeShow: false,
            user: { username: "", password: "" },
            savePassword: false,
            tmpUsername: '',
            tmpPassword: '',
            isLoading: false
        }
    },
    created() {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            this.tmpUsername = localStorage.getItem('username')
            this.tmpPassword = localStorage.getItem('password')
            this.savePassword = true
        }
    },
    methods: {
        login() {
            this.isLoading = true
            const loginData = { Username: this.user.username, Password: this.user.password }
            API.login(loginData)
                .then(res => {
                    this.isLoading = false
                    const data = JSON.stringify(res.data)
                    sessionStorage.setItem('auth', data)
                    sessionStorage.setItem('token', res.data.token)
                    if (this.savePassword) {
                        localStorage.setItem('username', this.user.username)
                        localStorage.setItem('password', this.user.password)
                    } else {
                        localStorage.removeItem('username')
                        localStorage.removeItem('password')
                    }
                    this.authStore.setAuth(res.data)
                    swal.success(this.$t('login success'))
                    if (res.data?.listRoles?.[0] == 'Employee') return this.$router.push({ name: "attendance-employee" })
                    else return this.$router.push({ name: "home" })
                })
                .catch(error => {
                    this.isLoading = false
                    if (error.response.data) swal.error(error.response.data, 3500)
                    else swal.error(error)
                })
        },
        handleChangeUsername(value) {
            this.user.username = value
            if (this.user.username == this.tmpUsername) {
                this.user.password = this.tmpPassword
            }
        }
    }
}
</script>
<style scoped>
.wrapper-login-page {
    background: url(../assets/images/background-login.webp) left;
    position: relative;
    background-position: center;
    background-size: cover;
}

.wrapper-login {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 415px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .8);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .8);
    border-radius: 10px;
}

.wrapper-login-page h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-weight: 700;
}

.box-input-login {
    position: relative;
}

.box-input-login-mgb input {
    margin-bottom: 30px;
}

.box-input-login input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.box-input-login label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.box-input-login input:focus~label,
.box-input-login input:valid~label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
}

.save-pass-login {
    margin-top: 15px;
    margin-bottom: 15px;
}

.save-pass-login input {
    width: 1em;
    height: 1em;
}

.save-pass-login label {
    color: white;
    margin-left: 10px;
}

.content-login a {
    position: relative;
    display: inline-flex;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 4px;
    width: 100%;
    justify-content: center;
    font-weight: 700;
}

.content-login a:hover {
    background: #01c5d0;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px #01aab3ab,
        0 0 25px #01aab3ab,
        0 0 50px #01aab3ab,
        0 0 75px #01aab3ab;
}
</style>