<template>
    <div class="upload__item">
        <div class="upload__image-keeper">
            <img  class="upload__image" src="../../../assets/img/CartImages/image1.jpg" alt="">
            <div class="upload__like-keeper">
                <svg class="upload__like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.02003 3.58913C8.74211 2.59084 9.88537 2 11.1289 2C13.255 2 15 3.77251 15 5.95247C15 9.51784 10.3066 14 8 14C5.69339 14 1 9.51784 1 5.95247C1 3.77251 2.74499 2 4.89114 2C6.11463 2 7.27792 2.59084 8.02003 3.58913Z" fill="white" />
                </svg>
                <span>3,2 k</span>
            </div>
        </div>
        <h5 class="upload__genre upload__genre_brown">Детектив</h5>
        <h5 class="upload__title">Невероятные приключения</h5>
    </div>
</template>

<script>
export default {
  name: 'UploadItem'
}
</script>

<style>
@import 'uploadItem.css';
</style>
