import Vue from 'vue'
import Vuex from 'vuex'


// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUsername(state, user) {
      state.user = user
    }
  },
})

// 3.导出store对象
export default store