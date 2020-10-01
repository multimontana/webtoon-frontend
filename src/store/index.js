import Vue from 'vue'
import Vuex from 'vuex'
import { category } from './modules/category'
import { auth } from './modules/auth'
import { post } from './modules/post'
import { themeMode } from './modules/themeMode'
import vSelect from 'vue-select'
import { episode } from './modules/episode'

Vue.component('v-select', vSelect)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    auth,
    post,
    episode,
    themeMode
  }
}
)
