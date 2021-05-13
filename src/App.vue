<!--
 * @Author: wuhao
 * @Date: 2020-11-03 16:00:13
 * @LastEditors: wuhao
 * @LastEditTime: 2020-11-03 16:13:24
 * @Description: description
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Container /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Container from './components/container'

export default {
  name: 'App',
  components: {
    HelloWorld
    // Container
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
