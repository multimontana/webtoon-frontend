<template>
    <section class="page__main-sec3">
        <div class="container">
            <CartInfo/>
            <CartEpisodes/>
        </div>
    </section>
</template>
<script>
import CartInfo from '../../molecules/cartInfo/CartInfo'
import CartEpisodes from '../../molecules/cartEpisodes/CartEpisodes'

export default {
  name: 'CartMainSection',
  components: { CartEpisodes, CartInfo }
}
</script>

<style>
    @import 'cartMainSection.css';

</style>
