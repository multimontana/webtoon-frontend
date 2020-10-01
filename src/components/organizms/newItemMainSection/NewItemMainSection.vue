<template>
    <section class="cart-keeper">
        <div class="container-margin ">
            <CartSliderNavigation title="Популярные новинки" />
            <CartSliderTwo :episodes="sortedArray"/>
        </div>
    </section>
</template>
<script>
import CartSliderNavigation from '../../molecules/cartSliderNavigation/CartSliderNavigation'
import CartSliderTwo from '../../molecules/cartSliderTwo/CartSliderTwo'
import { mapActions } from 'vuex'
export default {
  name: 'NewItemMainSection',
  components: { CartSliderTwo, CartSliderNavigation },
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
@import "newItemMainSection.css";
</style>
