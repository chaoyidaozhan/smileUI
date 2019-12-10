import smileTab from './src/index.vue'

smileTab.install = function(Vue) {
    Vue.component(smileTab.name, smileTab)
}

export default smileTab