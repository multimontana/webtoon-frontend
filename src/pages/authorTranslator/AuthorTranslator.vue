<template>
    <div>
        <TranslatorMainSection/>
        <TranslatorSliderSection/>
        <AuthorSliderSection/>
        <CommentsBlockSection/>
    </div>
</template>
<script>
import TranslatorMainSection from '../../components/organizms/translatorMainSection/TranslatorMainSection'
import CommentsBlockSection from '../../components/organizms/commentsBlockSection/CommentsBlockSection'
import TranslatorSliderSection from '../../components/organizms/translatorSliderSection/TranslatorSliderSection'
import AuthorSliderSection from '../../components/organizms/authorSliderSection/AuthorSliderSection'

export default {
  name: 'AuthorTranslator',
  components: { AuthorSliderSection, TranslatorSliderSection, CommentsBlockSection, TranslatorMainSection }
}
</script>

<style scoped>

</style>
