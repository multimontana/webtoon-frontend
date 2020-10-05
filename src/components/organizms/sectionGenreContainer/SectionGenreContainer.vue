<template>
    <section class="genre container">
        <div class="genre__tabs">
            <a href="#" class="genre__tab">Комедия</a>
            <a href="#" class="genre__tab active">Фантастика</a>
            <a href="#" class="genre__tab">Мистика</a>
            <a href="#" class="genre__tab">Романтика</a>
            <a href="#" class="genre__tab">Повседневность</a>
            <a href="#" class="genre__tab">Драма</a>
            <a href="#" class="genre__tab">Экшн</a>
            <a href="#" class="genre__tab">Другие</a>
        </div>
        <div class="genre__cart-keeper">
     <CartItem  v-for="(episode, index) in episodes" :episode="episode" :key="index"/>
        </div>
    </section>
</template>
<script>
import CartItem from '../../molecules/cartItem/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'SectionGenreContainer',
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
          const result = res.filter((index, item) => item < 12)
          this.episodes = result
        }
      })
    }
  }
}
</script>

<style>
@import 'sectionGenreContainer.css';
</style>
