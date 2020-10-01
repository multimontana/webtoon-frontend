import axios from 'axios'
export const auth = {
  state: {
    authorization: false,
    login: false,
    register: false,
    forgotPassword: false,
    sendEmail: false,
    user: {},
    token: document.cookie.match(new RegExp('(^| )' + 'token_' + '=([^;]+)')) ? document.cookie.match(new RegExp('(^| )' + 'token_' + '=([^;]+)'))[2] : ''
  },
  mutations: {
    SET_AUTH_TOKEN (state, payload) {
      state.token = payload
    },
    SET_AUTH_USER (state, payload) {
      state.user = payload.data.user && payload.data.user.length ? payload.data.user[0] : {}
    },
    UPDATE_AUTH (state, payload) {
      state.authorization = payload
    },
    UPDATE_LOGIN (state, payload) {
      state.login = payload
    },
    UPDATE_REGISTER (state, payload) {
      state.register = payload
    },
    UPDATE_FORGOT_PASSWORD (state, payload) {
      state.forgotPassword = payload
    },
    UPDATE_SEND_EMAIL (state, payload) {
      state.sendEmail = payload
    }
  },
  actions: {
    async registrationUserAction (context, data) {
      try {
        const response = await axios.post('/register', data, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getAuthUserAction (context, data) {
      try {
        const response = await axios.get('/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: data.token
          }
        })
        context.commit('SET_AUTH_USER', response.data)
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
    async loginUserAction (context, data) {
      try {
        const response = await axios.post('/login', data, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
        if (!response.data.message) {
          context.commit('SET_AUTH_TOKEN', response.data)
          const token = response.data
          const type = 'token_'
          const date = new Date()
          date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))
          const expires = date.toUTCString()
          document.cookie = `${type} = ${token}; expires = ${expires}; path=/`
          return response.data
        }
        return false
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getAutorization: state => state.authorization,
    getAuthToken: state => state.token,
    getAuthUser: state => state.user,
    getLogin: state => state.login,
    getRegister: state => state.register,
    getForgotPassword: state => state.forgotPassword,
    getSendEmail: state => state.sendEmail
  }
}
