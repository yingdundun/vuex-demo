<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值:<label>{{ $store.state.count }}</label>
      <br />
      <button @click="SonSubCount(1)">值 - 1</button>
      <!-- <button @click = "changeCount(666)">1秒后修改成666</button>
       setAsyncCount -->
       <button @click = "setAsyncCount(666)">1秒后修改成666</button>
       <button @click="changeUser({name: 'hello', age: 20})" >modules中的mutations</button>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Son2Com',
  methods: {
    ...mapActions(['setAsyncCount']),
    ...mapMutations('User', ['changeUser']),
    SonSubCount (n) {
      this.$store.commit('subCount', n)
    }
    // changeCount (n) {
    //   this.$store.dispatch('setAsyncCount', n)
    // }
  }
}
</script>
<style lang="css" scoped>
  .box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
</style>
