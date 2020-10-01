<template>
  <div class="modal registration-modal"
       :class="{open:getAutorization }"
  >
    <div class="modal-overflow">
      <button class="close-modal btn-light" @click="closeSigniInPopup()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="12" height="1.6" rx="0.8" transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.19167 4.125)" fill="#2E2E2E"/>
          <rect x="3.19167" y="11.4766" width="12" height="1.6" rx="0.8" transform="rotate(-45 3.19167 11.4766)" fill="#2E2E2E"/>
        </svg>
      </button>
      <h3>Войти</h3>
      <button class="btn-light"
      @click="log_in()">
        Войти
      </button>
      <button class="btn-green"
      @click="register () ">
        Регистрация
      </button>
      <h5>
        <hr>Войдите с помощью
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
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Sign_in',
  computed: {
    ...mapGetters(['getAutorization'])
  },
  methods: {
    ...mapMutations(['UPDATE_AUTH', 'UPDATE_LOGIN', 'UPDATE_REGISTER']),
    closeSigniInPopup () {
      this.UPDATE_AUTH(false)
    },
    log_in () {
      this.UPDATE_LOGIN(true)
      this.UPDATE_AUTH(false)
    },
    register () {
      this.UPDATE_REGISTER(true)
      this.UPDATE_AUTH(false)
    }
  }
}
</script>
<style>
  @import 'sign_in.css';
</style>
