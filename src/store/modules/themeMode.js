export const themeMode = {
  state: {
    mode: localStorage.getItem('mode') ? localStorage.getItem('mode') : localStorage.setItem('mode', true)
  },
  mutations: {
    SET_THEME_MODE (state, payload) {
      state.mode = localStorage.getItem('mode') === 'true' ? 'false' : 'true'
      localStorage.setItem('mode', state.mode)
    }
  },
  getters: {
    getThemeMode: state => state.mode
  }
}
