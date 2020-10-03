<template>
    <section class="upload-your-own download-links">
        <div class="container">
            <div class="upload-content">
                <h3 class="upload-title">{{ $t('download_to_read_stories') }}</h3>
                <div class="download-links">
                    <a href=""><img src="../../../assets/img/app_store.svg"></a>
                    <a href=""><img src="../../../assets/img/google_play.svg"></a>
                </div>
            </div>
            <div class="upload-block">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'UploadtoRead'
}
</script>

<style>
@import 'uploadToRead.css';
</style>
