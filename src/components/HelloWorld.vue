<!--
 * @Author: wuhao
 * @Date: 2020-11-03 16:00:13
 * @LastEditors: wuhao
 * @LastEditTime: 2020-11-03 16:39:42
 * @Description: description
-->
<template>
  <div class="hello">
    <Aspects :data="model" :width="600" :height="600" :showRoadName="true" :isTurnDirections="true">
      <Plugin :zIndex="12" >
          <div
            :origin="'in_1_1_left'" 
            :id="'name_1_1'" 
            style="background: red;width:20;height: 30"
          >
            测试
          </div>
      </Plugin>
    </Aspects>
  </div>
</template>

<script>
import {Aspects} from 'd3traffic';
// import {Plugin} from 'd3traffic';
// import Plugin from 'd3traffic'
import model from "./model.json";
export default {
  name: 'HelloWorld',
  components: {
    Aspects,
    Plugin: Aspects.Plugin
  },
  props: {
    msg: String
  },
  data() {
    return {
      model: model
    }
  },
  created() {
    console.log("Plugin", Aspects.Plugin);
  },
  mounted() {
    this.$forceUpdate();
    this.model = model;
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
