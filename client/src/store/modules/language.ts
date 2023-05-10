import { Commit } from '../../../node_modules/vuex';

export default {
  state: () => ({
    language: 'EN',
  }),
  getters: {
    languageStatus: (state:any) => state.language,
  },
  actions: {
    changeLanguageStatus({ commit }: { commit: Commit }) {
      commit('set_language')
    },
  },
  mutations: {
    set_language(state:any) {
      state.language = state.language === 'EN' ? 'RU' : 'EN'
    },
  },
}

