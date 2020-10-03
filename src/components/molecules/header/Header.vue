<template>
 <header>
  <div class="navigation">
    <div class="logo">
      <router-link to="/" class="nav__link">
        <img src="../../../assets/img/logo.svg" alt="Manga" />
      </router-link>
    </div>
    <div class="nav">
      <router-link to="/items" class="nav__link">{{ $t('new') }}</router-link>
      <router-link to="/popular" class="nav__link">Популярное</router-link>
      <router-link to="/genres" class="nav__link">Жанры</router-link>
    </div>
  </div>
  <div class="action-btns">
    <button class="search-btn btn-light">
      <svg class='active' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09938 7.68126L11.7063 10.2882C12.0979 10.6798 12.0979 11.3147 11.7063 11.7063C11.3146 12.0979 10.6797 12.0979 10.2881 11.7063L7.68112 9.09933C7.67329 9.0915 7.6668 9.0829 7.66032 9.0743C7.65533 9.06769 7.65034 9.06107 7.64473 9.0548C6.86661 9.56775 5.93523 9.86714 4.93352 9.86714C2.2088 9.86714 0 7.65825 0 4.93357C0 2.20884 2.20884 0 4.93357 0C7.6583 0 9.86714 2.20884 9.86714 4.93362C9.86714 5.93528 9.56775 6.86671 9.0548 7.64483C9.06105 7.6504 9.06764 7.65537 9.07422 7.66034C9.08287 7.66687 9.09151 7.6734 9.09938 7.68126ZM1.65517 4.96554C1.65517 6.79379 3.13725 8.27586 4.96554 8.27586C6.79374 8.27586 8.27586 6.79379 8.27586 4.96554C8.27586 3.1373 6.79374 1.65517 4.96554 1.65517C3.1373 1.65517 1.65517 3.13725 1.65517 4.96554Z" fill="black" />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" fill="black" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0994 9.68126L13.7063 12.2882C14.0979 12.6798 14.0979 13.3147 13.7063 13.7063C13.3146 14.0979 12.6797 14.0979 12.2881 13.7063L9.68112 11.0993C9.67329 11.0915 9.6668 11.0829 9.66032 11.0743C9.65533 11.0677 9.65034 11.0611 9.64473 11.0548C8.86661 11.5678 7.93523 11.8671 6.93352 11.8671C4.2088 11.8671 2 9.65825 2 6.93357C2 4.20884 4.20884 2 6.93357 2C9.6583 2 11.8671 4.20884 11.8671 6.93362C11.8671 7.93528 11.5678 8.86671 11.0548 9.64483C11.0611 9.6504 11.0676 9.65537 11.0742 9.66034C11.0829 9.66687 11.0915 9.6734 11.0994 9.68126ZM3.65517 6.96554C3.65517 8.79379 5.13725 10.2759 6.96554 10.2759C8.79374 10.2759 10.2759 8.79379 10.2759 6.96554C10.2759 5.1373 8.79374 3.65517 6.96554 3.65517C5.1373 3.65517 3.65517 5.13725 3.65517 6.96554Z" fill="white" />
      </svg>
    </button>
    <button class="dark-btn-header" @click="setThemeMode">
      <svg :class="getThemeMode === 'false' ?  'active' : ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9995 10.0346C13.3037 10.3043 12.5473 10.4523 11.7563 10.4523C8.32739 10.4523 5.54773 7.67242 5.54773 4.24333C5.54773 3.45228 5.69566 2.69579 5.96535 2C3.64512 2.89945 2 5.15324 2 7.79129C2 11.2204 4.77966 14.0002 8.20854 14.0002C10.8464 14.0002 13.1001 12.355 13.9995 10.0346Z" fill="black" />
      </svg>
      <svg :class="getThemeMode === 'true' ?  'active' : ''" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="3" fill="white"/>
        <rect x="7.5" y="2" width="1" height="2" rx="0.5" fill="white"/>
        <rect x="7.5" y="12" width="1" height="2" rx="0.5" fill="white"/>
        <rect x="2" y="8.5" width="1" height="2" rx="0.5" transform="rotate(-90 2 8.5)" fill="white"/>
        <rect x="12" y="8.5" width="1" height="2" rx="0.5" transform="rotate(-90 12 8.5)" fill="white"/>
        <rect x="3.40381" y="4.10938" width="1" height="2" rx="0.5" transform="rotate(-45 3.40381 4.10938)" fill="white"/>
        <rect x="10.4749" y="11.1836" width="1" height="2" rx="0.5" transform="rotate(-45 10.4749 11.1836)" fill="white"/>
        <rect x="4.11084" y="12.5977" width="1" height="2" rx="0.5" transform="rotate(-135 4.11084 12.5977)" fill="white"/>
        <rect x="11.1819" y="5.52344" width="1" height="2" rx="0.5" transform="rotate(-135 11.1819 5.52344)" fill="white"/>
      </svg>
    </button>
    <div class="header-acton-divider">
    </div>
    <button class="add-button btn-dark btn-sm">
      +  <router-link to="/publish"> Добавить</router-link>

    </button>
    <div class="account" v-if="getAuthToken">
      <div class="avatar">
        <img src="../../../assets/img/avatar.jpg">
      </div>
      <div class="nickname">
        {{getAuthUser.login}}
      </div>
    </div>
    <div class="account" v-if="getAuthToken === ''">
      <button @click="sign_in()">Войти</button>
    </div>
  </div>
</header>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { darkModeToggle } from '../../../helpers/helper'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getAuthToken', 'getAuthUser', 'getThemeMode'])
  },
  methods: {
    ...mapActions(['getAuthUserAction']),
    ...mapMutations(['UPDATE_AUTH', 'SET_THEME_MODE']),
    sign_in () {
      this.UPDATE_AUTH(true)
    },
    setThemeMode () {
      this.SET_THEME_MODE()
    }
  },
  watch: {
    getThemeMode () {
      darkModeToggle(this.getThemeMode)
    }
  },
  mounted () {
    if (this.getThemeMode !== 'false') {
      darkModeToggle(this.getThemeMode)
    }
  },
  created () {
    this.getAuthUserAction({ token: this.getAuthToken })
  }
}

</script>
<style>
@import 'header.css';
</style>
