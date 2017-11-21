<template>
  <div id="app">
      <img src="./assets/logo.png">
      <p>{{ msg }}</p>
    <HelloWorld msg="message from parsent" v-on:totellfather="getson"/>
    <!-- <HelloWorld title="message from parsent"></HelloWorld> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  data(){
   return{
      msg:""
   }
  },
  components: {
    HelloWorld
  },
  methods:{
    getson:function(sonmsg){
      this.msg=sonmsg;
    }
  }
}
</script>

<style>
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
