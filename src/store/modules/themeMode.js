export const themeMode = {
  state: {
    mode: window.localStorage.getItem('mode') ? window.localStorage.getItem('mode') : window.localStorage.setItem('mode', true)
  },
  mutations: {
    SET_THEME_MODE (state, payload) {
      state.mode = window.localStorage.getItem('mode') === 'true' ? 'false' : 'true'
      window.localStorage.setItem('mode', state.mode)
    }
  },
  getters: {
    getThemeMode: state => state.mode
  }
}
