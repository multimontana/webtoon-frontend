<template>
  <div>
    <div class="modal login-form-modal"
         :class="{ open:getLogin }"
    >
      <div class="modal-overflow">
        <button class="close-modal btn-light" @click="closeLoginPopup()">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="1.6" rx="0.8"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.19167 4.125)" fill="#2E2E2E"/>
            <rect x="3.19167" y="11.4766" width="12" height="1.6" rx="0.8" transform="rotate(-45 3.19167 11.4766)"
                  fill="#2E2E2E"/>
          </svg>
        </button>
        <h3>Войти</h3>
        <div action="#" method="GET">
          <input name="email" type="email" placeholder="E-mail" v-model="login.email">
          <input name="password" type="password" placeholder="Пароль" v-model="login.password">
          <a href="" class="forgot_pass"
             @click.prevent="forgot_pass()"
          >Забыли пароль?</a>
          <button type="submit" class="btn-green" @click="loginUserPost()">
            Войти
          </button>
          <a href="" class="login">
            <h6>Регистрация</h6>
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
    <div class="modal forgot-password"
         :class="{ open:getForgotPassword }">
      <div class="modal-overflow">
        <button class="close-modal btn-light" @click="closeForgotPass ()">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="1.6" rx="0.8"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.19167 4.125)" fill="#2E2E2E"/>
            <rect x="3.19167" y="11.4766" width="12" height="1.6" rx="0.8" transform="rotate(-45 3.19167 11.4766)"
                  fill="#2E2E2E"/>
          </svg>
        </button>
        <h3>Забыли Ваш пароль?</h3>
        <h4>Что бы сбросить пароль введите ваш e-mail.</h4>
        <form action="#" method="GET">
          <input name="email" type="email" placeholder="E-mail" v-model="mail">
          <button class="btn-green"
                  @click.prevent="send_email()"
          >
            Отправить
          </button>
          <div class="login-reg">
            <a href="" class="login">
              <h6>Войти</h6>
            </a>
            <a href="" class="login">
              <h6>Регистрация</h6>
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="modal email-sent" :class="{ open:getSendEmail }">-->
      <div class="modal-overflow">
        <button class="close-modal btn-light" @click="closeSendEmail()">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="1.6" rx="0.8"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.19167 4.125)" fill="#2E2E2E"/>
            <rect x="3.19167" y="11.4766" width="12" height="1.6" rx="0.8" transform="rotate(-45 3.19167 11.4766)"
                  fill="#2E2E2E"/>
          </svg>
        </button>
        <h4>На ваш адрес <span>{{mail}}</span> отправленна ссылка для восстановления пароля.</h4>
        <button class="btn-green">
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      mail: ''
    }
  },
  computed: {
    ...mapGetters(['getLogin', 'getForgotPassword', 'getSendEmail'])
  },
  methods: {
    ...mapActions(['loginUserAction']),
    ...mapMutations(['UPDATE_LOGIN', 'UPDATE_FORGOT_PASSWORD', 'UPDATE_SEND_EMAIL']),
    loginUserPost () {
      this.loginUserAction(this.login).then((res) => {
        if (res && res !== undefined) {
          this.UPDATE_LOGIN(false)
        }
      })
    },
    closeLoginPopup () {
      this.UPDATE_LOGIN(false)
    },
    forgot_pass () {
      this.UPDATE_LOGIN(false)
      this.UPDATE_FORGOT_PASSWORD(true)
    },
    closeForgotPass () {
      this.UPDATE_FORGOT_PASSWORD(false)
    },
    send_email () {
      console.log(this.mail)
      this.UPDATE_FORGOT_PASSWORD(false)
      this.UPDATE_SEND_EMAIL(true)
    },
    closeSendEmail () {
      this.UPDATE_SEND_EMAIL(false)
    }
  }
}
</script>
<style>
  @import 'login.css';
</style>
