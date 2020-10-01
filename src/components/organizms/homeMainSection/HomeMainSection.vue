<template>
  <section class="main-section">
    <DoubleSlider/>
  </section>
</template>
<script>
import DoubleSlider from '../../molecules/doubleslider/DoubleSlider'
export default {
  name: 'HomeMainSection',
  components: { DoubleSlider }
}
</script>

<style>
@import 'homeMainSection.css';
</style>
