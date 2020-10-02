<template>
    <div class="recomended-carts">
        <ul class="cart-list">
            <h3 class="cart-list__title">Похожее</h3>
          <CartItem  v-for="(episode, index) in episodes" :episode="episode" :key="index"/>
        </ul>
        <ul class="cart-list">
            <h3 class="cart-list__title">Популярное</h3>
            <CartItem  v-for="(episode, index) in episodes" :episode="episode" :key="index"/>
        </ul>
    </div>
</template>
<script>
import CartItem from '../cartItem/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'RecommandedCarts',
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
  components: { CartItem },
  created () {
    this.getEpisodes()
  },
  methods: {
    ...mapActions(['getEpisodesAction']),
    getEpisodes () {
      this.getEpisodesAction(this.data).then((res) => {
        if (res && res !== undefined) {
          const result = res.filter((index, item) => item < 4)
          this.episodes = result
        }
      })
    }
  }
}
</script>
<style>
@import 'recommandedCarts.css';
</style>
