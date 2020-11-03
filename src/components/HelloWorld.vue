<!--
 * @Author: wuhao
 * @Date: 2020-11-03 16:00:13
 * @LastEditors: wuhao
 * @LastEditTime: 2020-11-03 16:39:42
 * @Description: description
-->
<template>
  <div class="hello">
    <Aspects :data="model" :showRoadName="true" :isTurnDirections="true"/>
  </div>
</template>

<script>
import {Aspects} from 'd3traffic';
import model from "./model.json";
export default {
  name: 'HelloWorld',
  components: {
    Aspects
  },
  props: {
    msg: String
  },
  data() {
    return {
      model: model
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
