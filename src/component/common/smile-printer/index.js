import smilePrinter from './src/index.vue'

smilePrinter.install = function(Vue) {
    Vue.component(smilePrinter.name, smilePrinter)
}

export default smilePrinter