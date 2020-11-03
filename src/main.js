/*
 * @Author: wuhao
 * @Date: 2020-11-03 16:00:13
 * @LastEditors: wuhao
 * @LastEditTime: 2020-11-03 16:08:28
 * @Description: description
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { VuePlugin } from 'vuera'
 
Vue.use(VuePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
