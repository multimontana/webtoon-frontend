<template>
    <div>
        <TranslatorMainSection/>
        <TranslatorSliderSection/>
        <CommentsBlockSection/>
    </div>
</template>
<script>
import TranslatorMainSection from '../../components/organizms/translatorMainSection/TranslatorMainSection'
import CommentsBlockSection from '../../components/organizms/commentsBlockSection/CommentsBlockSection'
import TranslatorSliderSection from '../../components/organizms/translatorSliderSection/TranslatorSliderSection'

export default {
  name: 'Translator',
  components: { TranslatorSliderSection, CommentsBlockSection, TranslatorMainSection }
}
</script>

<style>

</style>
