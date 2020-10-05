<template>
    <section class="cart-top-keeper container">
        <ul class="cart-top__list">
            <h3>Топ Рейтинг</h3>
         <CartItem v-for="(episode, index) in episodes" :episode="episode" :key="index"/>
        </ul>
        <ul class="cart-top__list">
            <h3>Топ Лайки</h3>
           <CartItem v-for="(episode, index) in episodes" :episode="episode" :key="index"/>
        </ul>
        <ul class="cart-top__list">
            <h3>Топ Комментарии</h3>
        <CartItem v-for="(episode, index) in episodes" :episode="episode" :key="index"/>
        </ul>
    </section>
</template>

<script>
import CartItem from '../../molecules/cartItem/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'TopItems',
  components: { CartItem },
  data () {
    return {
      episodes: [],
      data: {
        language_id: 1,
        page: 1,
        limit: 100
      }
    }
  },
  created () {
    this.getEpisodes()
  },
  methods: {
    ...mapActions(['getEpisodesAction']),
    getEpisodes () {
      this.getEpisodesAction(this.data).then((res) => {
        if (res && res !== undefined) {
          const result = res.filter((index, item) => item < 5)
          this.episodes = result
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
