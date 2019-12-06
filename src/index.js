import Vue from 'vue'
import App from './app.vue'

import start from './component/smile-start/index.js'
import printer from './component/common/smile-printer/index.js'

Vue.use(start)
Vue.use(printer)

new Vue({
  el: '#app',
  render: h => h(App)
})