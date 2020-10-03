import axios from 'axios'

export const category = {
  state: {
    categories: [],
    token: document.cookie.match(new RegExp('(^| )' + 'token_' + '=([^;]+)')) ? document.cookie.match(new RegExp('(^| )' + 'token_' + '=([^;]+)'))[2] : ''
  },
  mutations: {
    SET_CATEGORIES (state, payload) {
      state.categories = payload.results
    }
  },
  actions: {
    async createCategoryAction (context, data) {
      try {
        const response = await axios.post('/create/category', data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: data.token
          }
        })
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
    async deleteCategoryAction (context, data) {
      try {
        const response = await axios.delete('/delete/category/41', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: data.token
          }
        })
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getCategoriesAction (context, data) {
      try {
        console.log(context, 'context category')
        console.log(data, 'data category')
        const response = await axios.get('/get/categories?language_id=' + data.language_id + '&page=' + data.page + '&limit=' + data.limit, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.state.category.token
          }
        })
        context.commit('SET_CATEGORIES', response.data)
        return response.data.results
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getCategories: state => state.categories
  }
}
