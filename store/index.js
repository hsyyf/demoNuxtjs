import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = () => new Vuex.Store(
  {
    state: {
      token: null,
      firstMenu: 0,
      secMenu: 0
    }
  }
)

export default store
