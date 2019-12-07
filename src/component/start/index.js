import smileStart from './src/index.vue'

smileStart.install = function(Vue){
    Vue.component(smileStart.name, smileStart)
}

export default smileStart;