import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = () => new Vuex.Store(
  {
    state: {token: null},
    methods: {
      add: function () {
        alert("pass")
      }
    }
  }
)

export default store
