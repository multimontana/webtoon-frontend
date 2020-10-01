<template>
    <section class="translators-keeper container">
        <LanguageLinks/>
    </section>
</template>
<script>
import LanguageLinks from '../languageLinks/LanguageLinks'
export default {
  name: 'Translators-keeper',
  components: { LanguageLinks }
}
</script>

<style>
@import 'translatorsKeeper.css';
</style>
