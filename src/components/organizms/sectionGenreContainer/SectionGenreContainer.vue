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
import CartItem from '../../molecules/cartItem/CartItem'
export default {
  name: 'SectionGenreContainer',
  components: { CartItem }
}
</script>

<style>
@import 'sectionGenreContainer.css';
</style>
