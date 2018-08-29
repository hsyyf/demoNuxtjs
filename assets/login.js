import md5 from 'js-md5'
import HeaderLine from "~/components/HeaderLine.vue"

export default {
  components: {HeaderLine},
  name: "login",


  data() {
    return {
      username: null,
      password: null,
      storeList: null,
      tempString: null,
    }
  },
  methods: {
    loginPost: function () {
      if (this.username === null || this.password === null) {
        return alert("信息不全")
      }
      this.http.get(
        "/login", {
          "username": this.username,
          "password": md5(this.password)
        }
      ).then(res => {
        localStorage.setItem("token", md5(this.password))
      })


    },
    forgotPassword: function () {
      alert("忘记密码")
    },
    checkToken: function () {
      let token = localStorage.getItem("token")
      alert(token)
    },
    getStoreList: function () {
      this.storeList = [{"id": 1, "name": "中文"}]
      // this.http.get(
      //   "/store-list",
      // ).then(res => {
      //   // this.storeList = res.data
      //   new Vue({
      //     el: "storeSelect",
      //     data: {
      //       storeList: res.data
      //     }
      //   })
      // })
    }
  }

}
