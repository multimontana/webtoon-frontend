<template>
    <div>
        <section class="page__main-sec">
            <div class="translator-keeper">
                <TranslatorInfo/>
                <TranslatorDesc/>
            </div>
        </section>
    </div>
</template>
<script>
import TranslatorDesc from '../../molecules/translatorDesc/translatorDesc'
import TranslatorInfo from '../../molecules/translatorInfo/TranslatorInfo'

export default {
  name: 'TranslatorMainSection',
  components: { TranslatorInfo, TranslatorDesc }
}
</script>

<style>
    @import 'translatorMainSection.css';
</style>
