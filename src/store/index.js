import { setTimeout } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Setting from './modules/setting'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    User,
    Setting
  },
  state: {
    title: '大标题',
    count: 101,
    list: [1, 2, 3, 5, 1, 6, 9]
  },
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  mutations: {
    addCount (state, n) {
      state.count += n
      // state.title = obj.title
    },
    subCount (state, n) {
      state.count -= n
      // state.count = newcount
    },
    APPchangeCount (state, newCount) {
      state.count = newCount
    },
    changeTitle (state) {
      state.title = '新标题'
    }
  },
  actions: {
    // setAsyncCount (context, n) {
    //   setTimeout(() => {
    //     context.commit('APPchangeCount', n)
    //   }, 1000)
    // }
    setAsyncCount (context, n) {
      setTimeout(() => {
        context.commit('APPchangeCount', n)
      }, 1000)
    }
  }
})
export default store
