<template>
    <section class="cart-top-keeper container">
        <ul class="cart-top__list">
            <h3>Топ Рейтинг</h3>
         <CartItem/>
         <CartItem/>
         <CartItem/>
         <CartItem/>
        </ul>
        <ul class="cart-top__list">
            <h3>Топ Лайки</h3>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
        </ul>
        <ul class="cart-top__list">
            <h3>Топ Комментарии</h3>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        </ul>
    </section>
</template>

<script>
import CartItem from '../../molecules/cartItem/CartItem'
export default {
  name: 'TopItems',
  components: { CartItem }
}
</script>

<style scoped>

</style>
