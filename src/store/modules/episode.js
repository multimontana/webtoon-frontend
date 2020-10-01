import axios from 'axios'

export const episode = {
  state: {
    episodes: [],
    token: document.cookie.match(new RegExp('(^| )' + 'token_' + '=([^;]+)')) ? document.cookie.match(new RegExp('(^| )' + 'token_' + '=([^;]+)'))[2] : ''
  },
  mutations: {},
  actions: {
    async createEpisodeAction (context, data) {
      try {
        const response = await axios.post('/create/episode', data, {
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
    async createEpisodeLike (context, data) {
      try {
        console.log(data, 'kkkkkk')
        const response = await axios.post('/create/episode/like', data, {
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
    async deleteEpisodeAction (context, data) {
      try {
        const response = await axios.delete('/delete/episode/' + data.id, {
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
    async getEpisodesAction (context, data) {
      try {
        const response = await axios.get('/get/episode?language_id=' + data.language_id + '&page=' + data.page + '&limit=' + data.limit, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.state.category.token
          }
        })
        // context.commit('SET_EPISODE', response.data)
        console.log(response.data)
        return response.data.results
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getEpisodes: state => state.episodes
  }
}
