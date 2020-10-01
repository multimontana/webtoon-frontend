<template>
    <div class="modal episode-modal" style="display: flex;">
        <div class="modal-overflow">
            <button class="close-modal btn-light" @click="$emit('cancel')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="1.6" rx="0.8" transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.19167 4.125)" fill="#2E2E2E" />
                    <rect x="3.19167" y="11.4766" width="12" height="1.6" rx="0.8" transform="rotate(-45 3.19167 11.4766)" fill="#2E2E2E" />
                </svg>
            </button>
            <h3>Отправлено на проверку модераторам</h3>
            <p>Наши модераторы рассмотрят работу в течении _ дней. Статус проверки вы можете посмотрет в личном кабинете.</p>
            <div class="button-keeper">
                <button class="btn-green" @click="$emit('continue')">
                    Добавить еще эпизод
                </button>
                <button class="btn-light" @click="$emit('cancel')">
                    Закрыть
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ConfirmEpisodeModal'
}
</script>

<style scoped>
@import "modals.css";
</style>
