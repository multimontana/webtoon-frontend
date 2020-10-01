<template>
  <div>
    <inner-tabs :tabs="generalTabs"/>
    <section class="translations-list-keeper container">
          <div class="language-links">
              <span class="active" @click="getData(1)" :class="language_id == 1 ? 'active' : ''">Русский</span>
              <span @click="getData(2)" :class="language_id == 2 ? 'active' : ''">Английский</span>
          </div>
          <ul class="translations-list">
              <button class="btn-green" @click="addPost">
                  Создать
              </button>
              <li class="translations-item" v-for="(item,index) in getSerias" v-bind:key="index">
                  <div class="translation-description">
                      <img :src="item.series_thumbnail_pic[0]" alt="">
                      <div class="description-keeper">
                          <div>
                                <div class="genres">
                                  <a href="" class="active">Драма</a>
                                  <a href="">Фентази</a>
                                  <a href="">Комедия</a>
                              </div>
                              <h4 class="title">{{item.title}}</h4>
                              <div class="status-keeper">
                                  <span>10 эпизодов</span>
                                  <span class="success">Опубликовано</span>
                              </div>
                          </div>
                          <div class="ratings">
                            <span>
                                <img src="../../../../../assets/img/icons/star_icon.svg" alt="Star">
                                8.9
                            </span>
                              <span>
                                <img src="../../../../../assets/img/icons/like_1_icon.svg" alt="Heart">
                                3.2k
                            </span>
                              <span>
                                <img src="../../../../../assets/img/icons/view_icon.svg" alt="Eye">
                                1.9k
                            </span>
                              <span>
                                <img src="../../../../../assets/img/icons/comm_icon.svg" alt="Comments">
                                278
                            </span>
                              <span>
                                <img src="../../../../../assets/img/icons/bookmark_icon.svg" alt="Bookmark">
                                2.5k
                            </span>
                          </div>
                      </div>
                  </div>
                  <div class="translation-information">
                    <span class="btn-light">
                        Выпускается
                    </span>
                      <div>
                        <span class="created-at">
                            Создано: {{getDateFormat(new Date(item.created_at))}}
                        </span>
                          <span class="updated-at">
                            Обновлено: {{getDateFormat(new Date(item.updated_at))}}
                        </span>
                      </div>
                  </div>
              </li>
          </ul>
          <div class="pagination" v-if="getSerias.length">
              <paginate
                      :page-count="page_count"
                      :click-handler="changePage"
                      :prev-text="getPrevButton"
                      :next-text="getNextButton"
                      :container-class="'paginate_block'">
              </paginate>
          </div>
      </section>
  </div>
</template>

<script>
import InnerTabs from '../../../../../components/molecules/tabs/InnerTabs'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Publications',
  components: { InnerTabs },
  data () {
    return {
      generalTabs: [{ label: 'Профиль', path: '/profile' }, { label: 'Подписки', path: '/' }, { label: 'Баланс', path: '/' }, { label: 'Публикации', path: '/publications' }, { label: 'Переводы', path: '/' }],
      active_tab: '',
      page_count: 1,
      page: 1,
      language_id: 1
    }
  },
  computed: {
    ...mapGetters(['getSerias', 'getAuthToken']),
    getPrevButton () {
      return '<button class="prev-page"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z" fill="#2E2E2E" /></svg></button>'
    },
    getNextButton () {
      return '<button class="next-page"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7516 7.5316L8.52157 3.696C8.23709 3.43467 7.77429 3.43467 7.48982 3.696C7.20534 3.95733 7.20534 4.38248 7.48982 4.64381L10.2531 7.17581L3.91759 7.17581C3.51423 7.17581 3 7.63603 3 8.00267C3 8.37321 3.51423 8.84328 3.91759 8.84328L10.2531 8.84328L7.48982 11.3572C7.20534 11.6185 7.20534 12.0436 7.48982 12.305C7.62993 12.4337 7.81675 12.5 8.00357 12.5C8.19039 12.5 8.37721 12.4337 8.51732 12.305L12.7474 8.48722L12.7896 8.43715C12.8593 8.35005 12.9909 8.16497 12.9996 8C13.0115 7.77428 12.7729 7.54721 12.7516 7.5316Z" fill="#2E2E2E" /></svg></button>'
    }
  },
  methods: {
    ...mapActions(['getAllSeriasAction']),
    addPost () {
      this.$router.push({
        path: '/publish'
      })
    },
    changePage (page) {
      this.getAllSeriasAction({ limit: 10, page: page, token: this.getAuthToken, language_id: this.language_id }).then(() => {
        this.page = page
      })
    },
    getDateFormat (date) {
      return date.getDate() + '.' + (parseInt(date.getMonth()) + 1) + '.' + date.getFullYear()
    },
    getData (languageId) {
      this.language_id = languageId
      this.getAllSeriasAction({ limit: 10, page: 1, token: this.getAuthToken, language_id: languageId }).then(res => {
        this.page_count = Math.ceil(res.count / 10)
      })
    }
  },
  mounted () {
    this.getData(this.language_id)
  }
}
</script>

<style scoped>
@import 'publications.css';
</style>
