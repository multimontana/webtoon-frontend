<template>
  <div>
    <div class="profile-tabs">
      <router-link to="/profile" class="profile-tab">Profile</router-link>
      <router-link to="/profile/subscribes" class="profile-tab">Subscribes</router-link>
      <router-link to="/profile/balance" class="profile-tab">Balance</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  mounted () {
    // const tabBtn = document.querySelectorAll('profile-tab')
    // for (var i = 0; i < tabBtn.length; i++) {
    //   tabBtn[i].addEventListener('click', function () {
    //     var current = document.querySelector('active')
    //     current[0].className = current[0].className.replace(' active', '')
    //     this.className += ' active'
    //   })
    // }
  }
}
</script>

<style>
  @import 'profile.css';
</style>
