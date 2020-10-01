<template>
    <div>
        <section class="cart-keeper">
            <div class="container-margin ">
                <CartSliderNavigation title="Переводчик 3/89"/>
                <CartSlider :episodes="sortedArray"/>
            </div>
        </section>
    </div>
</template>
<script>
import CartSliderNavigation from '../../molecules/cartSliderNavigation/CartSliderNavigation'
import CartSlider from '../../molecules/cartSlider/CartSlider'
import { mapActions } from 'vuex'
export default {
  name: 'TranslatorSliderSection',
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
  components: { CartSlider, CartSliderNavigation },

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

</style>
