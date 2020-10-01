<template>
    <section class="cart-keeper">
        <div class="container-margin ">
            <CartSliderNavigation title="Популярное"/>
            <CartSliderTwo :episodes="sortedArray"/>
            <CartSliderNavigation title="Топ Жанры" v-if="show"/>
            <CartSlider :episodes="episode"/>
        </div>
    </section>
</template>
<script>
import CartSliderNavigation from '../../molecules/cartSliderNavigation/CartSliderNavigation'
import CartSliderTwo from '../../molecules/cartSliderTwo/CartSliderTwo'
import { mapActions } from 'vuex'
import CartSlider from '../../molecules/cartSlider/CartSlider'
export default {
  name: 'PopularItems',
  props: ['show'],
  components: { CartSlider, CartSliderTwo, CartSliderNavigation },
  data () {
    return {
      episode: [],
      sortedArray: [],
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
    sortEpisodes (array) {
      function compare (a, b) {
        if (a.created_at > b.created_at) { return -1 }
        if (a.created_at < b.created_at) { return 1 }
        return 0
      }
      return array.sort(compare)
    },
    getEpisodes () {
      this.getEpisodesAction(this.data).then((res) => {
        if (res && res !== undefined) {
          this.episode = res
          this.sortedArray = this.sortEpisodes(res)
        }
      })
    }
  }
}
</script>

<style>
@import 'popularPopularItems.css';
</style>
