<template>
    <section class="cart-list-keeper container">
        <a href="">
            <h3>
                Посследние обновления
            </h3>
        </a>
        <div class="">
        </div>
        <ul class="cart-list cart-list__big-items">
        <CartItem :episodes="episodes"/>
        </ul>
        <button class="cart-list__show-more btn-light btn-sm">
            Загрузить еще
        </button>
    </section>
</template>

<script>
import CartItem from '../../molecules/cartItem/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'LastUpdates',
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
          console.log(res)
          const result = res.filter((index, item) => item < 20)
          this.episodes = result
        }
      })
    }
  }
}
</script>

<style>
    @import "lastUpdates.css";
</style>
