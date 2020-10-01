<template>
    <div class="cart-navigation">
        <div class="title-keeper">
            <a href="">
                <h3 class="cart-title">
                    <span>{{title}}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7122 9.30693L7.6777 3.28734C7.29383 2.90422 6.67146 2.90422 6.28778 3.28734C5.90407 3.67011 5.90407 4.29094 6.28778 4.67368L11.6274 10.0001L6.28794 15.3263C5.90423 15.7093 5.90423 16.33 6.28794 16.7128C6.67165 17.0957 7.29399 17.0957 7.67785 16.7128L13.7123 10.6931C13.9042 10.5016 14 10.2509 14 10.0001C14 9.74919 13.904 9.49832 13.7122 9.30693Z" fill="black" />
                    </svg>
                </h3>
            </a>
        </div>
        <div class="cart-nav" v-if="title == 'Жанры'">
            <span class="cart-nav-link" v-for="(category,index) in getCategories" v-bind:key="index" @click="active_category_id = category.id" :class="active_category_id == category.id ? 'active' : ''">
                <h4>{{category.name}}</h4>
            </span>
        </div>
<!--        <div class="slick-arrows">-->
<!--            <div class="">-->
<!--                <button class="arrow-next btn-light arrow btn-dark">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">-->
<!--                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z" fill="white" />-->
<!--                    </svg>-->
<!--                </button>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CartSliderNavigation',
  props: {
    title: String
  },
  data () {
    return {
      active_category_id: 0
    }
  },
  computed: {
    ...mapGetters(['getAuthToken', 'getCategories'])
  },
  methods: {
    ...mapActions(['getCategoriesAction', 'deleteCategoryAction'])
  },
  created () {
    this.getCategoriesAction({ token: this.getAuthToken, language_id: 1, page: 1, limit: 10 })
  }
}
</script>

<style>
@import 'cartSliderNavigation.css';
</style>
