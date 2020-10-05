<template>
    <div>
        <PopularItems :sliderData="sliderItems" :show="true"/>
        <TopItems/>
    </div>
</template>
<script>
import TopItems from '../../components/organizms/topItems/TopItems'
import PopularItems from '../../components/organizms/popularPopularItems/PopularItems'

export default {
  name: 'Popular',
  components: { PopularItems, TopItems },
  data () {
    return {
      sliderItems: [{ label: 'a' }, { label: 'b' }],
      data: {
        language_id: 1,
        page: 1,
        limit: 100
      }
    }
  }
}
</script>

<style>
@import 'popular.css';
</style>
