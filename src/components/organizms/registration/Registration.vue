<template>
    <div class="modal registration-form-modal"
         :class="{ open: getRegister }">
        <div class="modal-overflow">
            <button class="close-modal btn-light" @click="closeRegisterPopup ()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="1.6" rx="0.8"
                          transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.19167 4.125)" fill="#2E2E2E"/>
                    <rect x="3.19167" y="11.4766" width="12" height="1.6" rx="0.8"
                          transform="rotate(-45 3.19167 11.4766)" fill="#2E2E2E"/>
                </svg>
            </button>
            <h3>Регистрация</h3>
            <div class="form_registration">
                <input name="email" type="email" placeholder="E-mail" v-model="registration.email">
                <input name="login" type="text" placeholder="Логин" v-model="registration.login">
                <input name="password" type="password" placeholder="Пароль" v-model="registration.password">
                <input name="confirm__password" type="password" placeholder="Повтор пароля"
                       >
                <div class="agreement">
                    <span>
                        Регистрируясь, вы принимаете условия
                    </span><a href="">Пользовательского соглашения</a>
                </div>
                <button type="submit" class="btn-green" @click="doRegistration">
                    Регистрация
                </button>
                <a href="" class="login">
                    <h6>Войти</h6>
                </a>
            </div>
            <h5>
                <hr>
                Войдите с помощью
                <hr>
            </h5>
            <div class="social-login">
                <a href="#">
                    <img src="../../../assets/img/socail_login_inputs/Fb_Log_icon.svg" alt="Facebook icon">
                </a>
                <a href="#">
                    <img src="../../../assets/img/socail_login_inputs/Tw_Log_icon.svg" alt="Twitter icon">
                </a>
                <a href="#">
                    <img src="../../../assets/img/socail_login_inputs/Gg_Log_icon.svg" alt="Google icon">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      registration: {
        email: '',
        login: '',
        password: ''
      }
    }
  },
  name: 'Registration',
  computed: {
    ...mapGetters(['getRegister'])
  },
  methods: {
    ...mapMutations(['UPDATE_REGISTER']),
    ...mapActions(['registrationUserAction']),
    closeRegisterPopup () {
      this.UPDATE_REGISTER(false)
    },
    doRegistration () {
      this.registrationUserAction(this.registration).then((res) => {
        if (!res.error && res.error !== undefined) {
          this.UPDATE_REGISTER(false)
        }
      })
    }
  }
}
</script>

<style>
    @import 'registration.css';
</style>
