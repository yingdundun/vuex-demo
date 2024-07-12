<template>
  <div id="app">
    <h1>根组件 -{{ $store.state.title }} - {{ title }}</h1>
    <button @click="changeTitle">修改标题</button>
    <!-- <input type="text" :value="$store.state.count" @input="changeCount"> -->
    <input type="text" :value="$store.state.count" @input="APPchangeCount">
    <p>{{ $store.state.list}}</p>
    <p>{{ $store.getters.filterList}}</p>
    <hr>
    <p>{{ filterList}}</p>
    <Son1></Son1>
    <hr>
    <input :value="$store.state.count" @input="appsubCount">
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'app',
  created () {
    console.log(this.$store)
  },
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState(['count', 'title']),
    ...mapGetters(['filterList'])
  },
  components: {
    Son1,
    Son2
  },
  methods: {
    changeTitle () {
      this.$store.commit('changeTitle')
    },
    ...mapMutations(['APPchangeCount']),
    // 等价于上面的数组
    // changeCount (e) {
    //   // console.log(+e.target.value)
    //   this.$store.commit('APPchangeCount', +e.target.value)
    // },
    appsubCount (e) {
      console.log(e)
      this.$store.state.count = e.target.value
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
