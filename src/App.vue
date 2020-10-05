<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>

  import Header from './components/molecules/header/Header'
  import Footer from './components/molecules/footer/Footer'

  export default {
    name: 'App',
    components: { Header, Footer },
  };
</script>
<style>
  @import './assets/css/style.css';
  @import './assets/fonts/Gilroy/stylesheet.css';
  @import './assets/media/media.css';
</style>
