import Vue from "vue"
import axios from 'axios'

const apiURL = "http://127.0.0.1:5000/api"


let http = {
  install(Vue) {
    Vue.prototype.http = {
      get: function (url, params) {
        return axios.get(apiURL + url, {params: params})
      },
      post: function (url, params) {
        return axios.post(apiURL + url, params, {
          headers: {"Content-Type": "application/json"}
        })
      }
    }
  }
}

Vue.use(http)
