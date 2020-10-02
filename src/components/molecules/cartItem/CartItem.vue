<template>
        <div class="cart-item cart-item-margin">
            <div class="cart-image">
                <img :src="episode.images">
                <div class="cart-item__like-count">
                    <img src="../../../assets/img/like_f_dark.svg" @click="episodeLike(episode.id)">
                    <span>3,2 k</span>
                </div>
            </div>
            <div class="title">
                <h5 class="cart-genre">{{ episode.title }}</h5>
                <h4 class="cart-title">{{ episode.creators}}</h4>
            </div>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartItem',
  props: ['episode'],
  data () {
    return {
      data: {
        language_id: 1,
        page: 1,
        limit: 100
      }
    }
  },
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
          this.episodes = res
        }
      })
    }
  }
}
</script>

<style>
@import 'cartItem.css';
</style>
