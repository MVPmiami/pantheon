import Vuex from '../../node_modules/vuex'
import language from './modules/language.ts'

const store = new Vuex.Store({
  modules: {
    language,
  },
})

export default store
