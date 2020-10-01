<template>
    <section class="share-episode">
        <div class="container">
            <div class="share-actions">
                <button class="save-episode">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.80856 2.55612V2.55557C2.80856 2.20434 3.13949 1.8 3.71426 1.8H12.2857C12.8659 1.8 13.2 2.20928 13.2 2.55557V13.8305L8.28996 11.9211L8 11.8083L7.71004 11.9211L2.8008 13.8302L2.80856 2.55612Z" fill="#2E2E2E" stroke="#2E2E2E" stroke-width="1.6"/>
                    </svg>
                    <span class="saved-count">9 219</span>
                </button>
                <button class="like-episode">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.02003 3.58913C8.74211 2.59084 9.88537 2 11.1289 2C13.255 2 15 3.77251 15 5.95247C15 9.51784 10.3066 14 8 14C5.69339 14 1 9.51784 1 5.95247C1 3.77251 2.74499 2 4.89114 2C6.11463 2 7.27792 2.59084 8.02003 3.58913Z" fill="white"/>
                    </svg>
                    <span class="like-count">9 219</span>
                </button>
            </div>
            <h5>Поделиться</h5>
            <div class="share-socials">
                <button href="" class="btn-light">
                    <img src="../../../assets/img/social_icons/Facebook_icon.svg" alt="Facebook Icon">
                    <img src="../../../assets/img/social_icons/Facebook_Dark_icon.svg" alt="Facebook Icon" class="dark-social">
                </button>
                <button href="" class="btn-light">
                    <img src="../../../assets/img/social_icons/Twitter_icon.svg" alt="Twitter Icon">
                    <img src="../../../assets/img/social_icons/Twitter_Dark_icon.svg" alt="Twitter Icon" class="dark-social">
                </button>
                <button href="" class="btn-light">
                    <img src="../../../assets/img/social_icons/VK_icon.svg" alt="VKontakte Icon">
                    <img src="../../../assets/img/social_icons/VK_Dark_icon.svg" alt="VKontakte Icon" class="dark-social">
                </button>
                <button href="" class="btn-light">
                    <img src="../../../assets/img/social_icons/Tg_icon.svg" alt="Telegram Icon">
                    <img src="../../../assets/img/social_icons/Tg_Dark_icon.svg" alt="Telegram Icon" class="dark-social">
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ShareEpisode'
}
</script>

<style>
@import 'shareEpisode.css';
</style>
