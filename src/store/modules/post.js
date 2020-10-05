import axios from 'axios'

export const post = {
  state: {
    serias: []
  },
  mutations: {
    SET_SERIAS_DATA (state, payload) {
      state.serias = payload.results
    }
  },
  actions: {
    async createPostAction (context, data) {
      try {
        // eslint-disable-next-line no-undef
        const formData = new FormData()
        formData.append('title', data.banner.name)
        formData.append('summary', data.banner.description)
        formData.append('series_thumbnail_pic', data.banner.image)
        formData.append('category_id', data.banner.category)
        formData.append('language_id', '1')
        const response = await axios.post('/create/series', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: data.token
          }
        })
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
    async createEpisodeAction (context, data) {
      try {
        // eslint-disable-next-line no-undef
        const formData = new FormData()
        formData.append('title', data.episode.name)
        formData.append('episode_thumbnail_pic', data.episode.background)
        formData.append('series_id', data.episode.serias_id)
        formData.append('language_id', '1')
        for (let x = 0; x < data.episode.images.length; x++) {
          formData.append('images', data.episode.images[x].file)
        }
        const response = await axios.post('create/episode', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: data.token
          }
        })
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getAllSeriasAction (context, data) {
      try {
        const response = await axios.get(`get/series?page=${data.page}&limit=${data.limit}&language_id=${data.language_id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: data.token
          }
        })
        context.commit('SET_SERIAS_DATA', response.data)
        return response.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getSerias (state) {
      return state.serias
    }
  }
}
