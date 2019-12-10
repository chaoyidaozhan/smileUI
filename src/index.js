import Vue from 'vue'
import App from './app.vue'

import start from './component/start/index.js'
import printer from './component/common/printer/index.js'
import input from './component/common/input/index.js'
import tab from './component/common/tab/index.js'
import tabPane from './component/common/tab-pane/index.js'
import navMenu from './component/common/navMenu/index.js'

Vue.use(start)
Vue.use(printer)
Vue.use(input)
Vue.use(tab)
Vue.use(tabPane)
Vue.use(navMenu)

new Vue({
  el: '#app',
  render: h => h(App)
})