<template>
<div>
    <div class="cart-info">
        <div class="cart-image">
            <img src="../../../assets/img/CartImages/cart1.png" alt="">
            <div class="cart-ratings">
                        <span>
                            <img src="../../../assets/img/icons/star_icon.svg" alt="Star">
                            8.9
                        </span>
                <span>
                            <img src="../../../assets/img/icons/like_1_icon.svg" alt="Like">
                            3,2 k
                        </span>
                <span>
                            <img src="../../../assets/img/icons/view_icon.svg" alt="View">
                            1,2 k
                        </span>
                <span>
                            <img src="../../../assets/img/icons/comm_icon.svg" alt="Comment">
                            504
                        </span>
                <span>
                            <img src="../../../assets/img/icons/bookmark_icon.svg" alt="Boomark">
                            3,2 k
                        </span>
            </div>
        </div>
        <div class="cart-categories">
            <span class="active">Драма</span>
            <span>Комедия</span>
            <span>История</span>
        </div>
        <h2>Как воспитать героиню из обычной девушки</h2>
        <button class="btn-light" disabled>
            Выпускается
        </button>
        <div class="cart-property">
            <span>Автор</span>
            <span>Isayama Hajime</span>
        </div>
        <div class="cart-property">
            <span>Язык</span>
            <span>Русский, English</span>
        </div>
        <div class="cart-property">
            <span>Перевод</span>
            <span>Isayama Hajime, Isayama Hajime</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'CartInfo'
}
</script>

<style>
@import 'cartInfo.css';
</style>
