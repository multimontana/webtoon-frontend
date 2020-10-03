<template>
  <footer>
<ScrollUp/>
    <h4> {{ $t('download_application') }}</h4>
    <div class="download-links">
      <img src="../../../assets/img/app_store.svg">
      <img src="../../../assets/img/google_play.svg">
    </div>
    <div class="social-links">
      <a href="#" class="btn-dark">
        <img src="../../../assets/img/social_icons/Facebook_Dark_icon.svg" alt="Facebook dark icon">
      </a>
      <a href="#" class="btn-dark">
        <img src="../../../assets/img/social_icons/Twitter_Dark_icon.svg" alt="Twitter dark icon">
      </a>
      <a href="#" class="btn-dark">
        <img src="../../../assets/img/social_icons/VK_Dark_icon.svg" alt="VK dark icon">
      </a>
      <a href="#" class="btn-dark">
        <img src="../../../assets/img/social_icons/Tg_Dark_icon.svg" alt="VK dark icon">
      </a>
    </div>
<!--    <div class="footer-nav">-->
<!--      <a href="">-->
<!--        <h5>Новое</h5>-->
<!--      </a>-->
<!--      <a href="">-->
<!--        <h5>Популярное</h5>-->
<!--      </a>-->
<!--      <a href="">-->
<!--        <h5>Жанры</h5>-->
<!--      </a>-->
<!--    </div>-->
    <div class="footer-logo">
      <img src="../../../assets/img/logo.svg" alt="Manga">
       <Language/>
    </div>
    <div class="privacy-policy">
      <a href="">
        <h6>
            {{ $t('user_agreement') }}
        </h6>
      </a>
      <a href="">
        <h6>
            {{ $t('site_terms') }}
        </h6>
      </a>
    </div>
    <div class="copyright-content">
      <h6>{{ $t('all_rights_reserved') }}</h6>
    </div>
  </footer>
</template>
<script>
import ScrollUp from '../../atoms/scrollUp/ScrollUp'
import Language from '../../atoms/language/Language'
export default {
  name: 'Footer',
  components: { Language, ScrollUp }
}
</script>

<style scoped>
@import 'footer.css';
</style>
