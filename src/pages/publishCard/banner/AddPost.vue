<template>
  <div>
    <h1>dbfsbdfshdjf</h1>
    <inner-tabs :tabs="generalTabs"/>
    <div class="language-links container">
      <span :class="bannerVisible ? 'active' : ''" @click="showTab('bannerVisible','episodeVisible')">Произведение</span>
      <span :class="episodeVisible ? 'active' : ''" @click="showTab('episodeVisible','bannerVisible')">Эпизоды </span>
    </div>
    <add-banner v-if="bannerVisible" @bannerAdded="showBannerModal = !showBannerModal"/>
    <add-episode v-if="episodeVisible" @episodeAdded="showEpisodeModal = !showEpisodeModal"/>
    <confirm-banner-modal v-if="showBannerModal" @cancel="resetBannerFrom" @continue="showEpisode"/>
    <confirm-episode-modal v-if="showEpisodeModal" @cancel="resetEpisodeFrom(true)" @continue="resetEpisodeFrom(false)"/>
  </div>
</template>
<script>
import AddEpisode from './tabs/AddEpisode'
import AddBanner from './tabs/AddBanner'
import ConfirmBannerModal from './modals/ConfirmBannerModal'
import ConfirmEpisodeModal from './modals/ConfirmEpisodeModal'
import InnerTabs from '../../../components/molecules/tabs/InnerTabs'

export default {
  name: 'AddPost',
  components: { InnerTabs, ConfirmEpisodeModal, ConfirmBannerModal, AddBanner, AddEpisode },
  data () {
    return {
      generalTabs: [{ label: 'Профиль', path: '/profile' }, { label: 'Подписки', path: '/' }, { label: 'Баланс', path: '/' }, { label: 'Публикации', path: '/publications' }, { label: 'Переводы', path: '/' }],
      episodeVisible: false,
      bannerVisible: true,
      showBannerModal: false,
      showEpisodeModal: false
    }
  },
  methods: {
    showTab (tab, tabHide) {
      this[tab] = true
      this[tabHide] = false
    },
    resetBannerFrom () {
      this.showBannerModal = !this.showBannerModal
      this.bannerVisible = !this.bannerVisible
      this.$nextTick(() => {
        this.bannerVisible = !this.bannerVisible
      })
    },
    resetEpisodeFrom (redirect) {
      this.showEpisodeModal = !this.showEpisodeModal
      this.episodeVisible = !this.episodeVisible
      if (!redirect) {
        this.$nextTick(() => {
          this.episodeVisible = !this.episodeVisible
        })
      } else {
        this.$router.push({
          path: '/'
        })
      }
    },
    showEpisode () {
      this.showBannerModal = !this.showBannerModal
      this.bannerVisible = !this.bannerVisible
      this.episodeVisible = !this.episodeVisible
    }
  }
}
</script>

<style>
@import 'addPost.css';
</style>
