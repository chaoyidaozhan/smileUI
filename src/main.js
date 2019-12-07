import start from './component/start/index.js'
import printer from './component/common/printer/index.js'

const components = [
    start,
    printer
]

const install = function(Vue, opts=[]){
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    start,
    printer,
    install
}