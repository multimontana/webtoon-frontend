<template>
    <section class="cart-list-keeper container">
        <a href="">
            <h3>
                Обновления
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M13.7122 9.30693L7.6777 3.28734C7.29383 2.90422 6.67146 2.90422 6.28778 3.28734C5.90407 3.67011 5.90407 4.29094 6.28778 4.67368L11.6274 10.0001L6.28794 15.3263C5.90423 15.7093 5.90423 16.33 6.28794 16.7128C6.67165 17.0957 7.29399 17.0957 7.67785 16.7128L13.7123 10.6931C13.9042 10.5016 14 10.2509 14 10.0001C14 9.74919 13.904 9.49832 13.7122 9.30693Z"
                          fill="black"></path>
                </svg>
            </h3>
        </a>
        <div class="genre__cart-keeper">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>
    </section>
</template>

<script>
import CartItem from '../cartItem/CartItem'
export default {
  name: 'UpdatesList',
  components: { CartItem }
}
</script>

<style>
    @import 'updatesList.css';
</style>
