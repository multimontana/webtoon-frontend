<template>
  <section class="profile-sec">
    <form action="#" method="GET">
      <div class="avatar-keeper">
        <div class="form-element">
          <label for="avatar">Аватар</label>
          <div class="form-avatar">
            <div class="image-keeper">
              <img alt="">
            </div>
            <button class="button-keeper">
              <div class="btn-light avatar-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="12" height="1.6" rx="0.8" transform="matrix(0 1 1 0 7.2 2)" fill="#2E2E2E" />
                  <rect x="2" y="7.19922" width="12" height="1.6" rx="0.8" fill="#2E2E2E" />
                </svg>
              </div>
            </button>
            <span class="avatar-limits">
                            JPG, GIF or PNG. Max size of 000K
                        </span>
          </div>
        </div>
      </div>
      <div class="form-keeper">
        <div class="form-element">
          <label for="name">Имя</label>
          <input type="text" id="name" placeholder="Имя">
        </div>
        <div class="form-element form-checkbox">
          <label for="author">Я автор</label>
          <input type="checkbox" id="author">
        </div>
        <div class="form-element form-checkbox">
          <label for="translator">Я переводчик</label>
          <input type="checkbox" id="translator">
        </div>
        <div class="form-element">
          <label for="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail">
        </div>
        <div class="form-element">
          <label for="password">Изменить пароль</label>
          <input type="password" id="password" placeholder="Новый пароль">
          <input type="password" id="password_repeat" placeholder="Повтор">
        </div>
        <button class="btn-green submit-button" type="submit">
          Сохранить
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ProfileSection'
}
</script>

<style>
@import 'profileSection.css';
</style>
