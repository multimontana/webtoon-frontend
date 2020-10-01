<template>
    <div class="">
        <div class="tabs language-links">
            <div name="all" class="language-tab" :class="{active:isActive  == 'all'}" @click="openBlock('all')">Все</div>
            <div  name="Russian" class="language-tab" :class="{active:isActive  == 'russian'}" @click="openBlock('russian')">Русский</div>
            <div name="English" class="language-tab" :class="{active:isActive  == 'english'}" @click="openBlock('english')">Английский</div>
        </div>
        <div>
            <div v-if="isActive  == 'all'"> <TranslatorItem/></div>
            <div v-if="isActive  == 'russian'">russian</div>
            <div v-if="isActive  == 'english'">english</div>
        </div>

    </div>
</template>

<script>
import TranslatorItem from '../../molecules/translatorItem/TranslatorItem'
export default {
  name: 'LanguageLinks',
  components: { TranslatorItem },
  data () {
    return {
      isActive: 'all'
    }
  },
  methods: {
    openBlock (val) {
      this.isActive = val
    }
  }
}
</script>

<style>
    @import 'languagelinks.css';
</style>
