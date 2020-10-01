<template>
    <hooper :itemsToShow="7.2" :infinite="true" class="cart-slider">
        <slide class="cart-item" v-for="(episode, index) in episodes" :key="index">
            <div class="cart-image">
                <img  :src="episode.images">
                <div class="cart-item__like-count">
                    <img src="../../../assets/img/like_f_dark.svg" @click="episodeLike(episode.id)">
                    <span>3,2 k</span>
                </div>
            </div>
            <div class="title">
                <h5 class="cart-genre">{{ episode.title }}</h5>
                <h4 class="cart-title">{{ episode.creators}}</h4>
            </div>
        </slide>
        <hooper-navigation slot="hooper-addons">
            <svg slot="hooper-prev" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                 fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z"
                      fill="#FFFFFF"/>
            </svg>
            <svg slot="hooper-next" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                 fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z"
                      fill="#FFFFFF"/>
            </svg>
        </hooper-navigation>
    </hooper>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CartSlider',
  props: ['episodes'],
  components: { Hooper, Slide, HooperNavigation },
  computed: {
    ...mapGetters([
      'getLogin'
    ])
  },
  methods: {
    ...mapActions(['createEpisodeLike']),
    episodeLike (episodeId) {
      this.createEpisodeLike(episodeId).then((res) => {
        if (res && res !== undefined) {
          console.log(res, 'response')
        }
      })
    }
  }
}
</script>

<style>
    @import 'cartSlider.css';
</style>
