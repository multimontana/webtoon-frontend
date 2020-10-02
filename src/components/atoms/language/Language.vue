<template>
  <div class="language-changer">
    <span class="language">
      <select
        id=""
        v-model="locale"
        name=""
        @change="setLocale($event)"
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data () {
    return {
      locale: 'en'
    }
  },
  created () {
    var lang = localStorage.getItem('locale')
    if (!lang) {
      localStorage.setItem('locale', 'en')
      lang = localStorage.getItem('locale')
    }
    this.locale = lang
    import('../../../assets/projectLangs/' + lang + '.json').then((msgs) => {
      this.$i18n.setLocaleMessage(lang, msgs)
      this.$i18n.locale = lang
    })
  },
  methods: {
    setLocale (event) {
      var locale = event.target.value
      import('../../../assets/projectLangs/' + locale + '.json').then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
        localStorage.setItem('locale', locale)
        this.locale = locale
      })
    }
  }
}
</script>

<style>
  @import 'language.css';
</style>
