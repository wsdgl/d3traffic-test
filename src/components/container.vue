<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App">
      <div slot="plugin">
        <Plugin :zIndex="12" >
          <div style="background: red;width:20;height: 30">
            测试
          </div>
        </Plugin>
      </div>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";
import {Plugin} from 'd3traffic';
export default {
  name: "Container",
  components: {
    HelloWorld,
    Plugin
  }
}
</script>

<style>

</style>