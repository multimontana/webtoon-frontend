<template>
    <div class="profile-tabs">
        <router-link v-for="(tab,index) in tabs" v-bind:key="index" class="profile-tab" :class="active_tab === tab.path ? 'active' : ''" :to="{path: tab.path}">{{tab.label}}</router-link>
    </div>
</template>

<script>
export default {
  name: 'InnerTabs',
  props: ['tabs'],
  data () {
    return {
      active_tab: ''
    }
  },
  mounted () {
    this.active_tab = this.$router.currentRoute.path
  }
}
</script>

<style scoped>
@import 'InnerTabs.css';
</style>
