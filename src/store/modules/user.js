const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  myMsg: '我的数据'
}
const mutations = {
  changeUser (state, newInfo) {
    state.userInfo = newInfo
  }
}
const actions = {
  changeInfo (context, newInfo) {
    setTimeout(() => {
      context.commit('changeUser', newInfo)
    }, 1000)
  }
}
const getters = {
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
