<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: <label>{{ $store.state.count }}-{{ count }}</label>
      <br>
      从modules中获取的值: <label>{{ User.userInfo }}</label>
      <br>
      从modules中获取的值: <label>{{ User.userInfo.name }}</label>
      <br>
      从modules中获取的值: <label>{{ User.myMsg }}</label>
      <br>
      从modules中获取的值: <label>{{ theme }}</label>
      <br>
      从modules中获取的值: <label>{{ desc }}</label>
      <br>
      从modules中获取的值: <label>{{ UpperCaseName }}</label>
      <br>
      <button @click = "addCount(5)">值 + 5</button>
      <button @click = "changeCount(666)">1秒后修改成666</button>
      <button @click="changeUser" >modules中的mutations</button>
      <button @click="changeInfo({ name: 'World', age: 200 })" >modules中的actions</button>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count']),
    ...mapState(['User']),
    ...mapState('Setting', ['theme', 'desc']),
    ...mapGetters('User', ['UpperCaseName'])
  },
  methods: {
    addCount (n) {
      this.$store.commit('addCount', n)
    },
    changeCount (n) {
      this.$store.dispatch('setAsyncCount', n)
    },
    changeUser () {
      this.$store.commit('User/changeUser', { name: 'hello', age: 20 })
    },
    ...mapActions('User', ['changeInfo'])
  }
}
</script>
<style lang="css" scoped>
.box{
border: 3px solid #ccc;
width: 400px;
padding: 10px;
margin: 20px;
}
h2 {
margin-top: 10px;
}
</style>
