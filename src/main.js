import start from './component/start/index.js'
import printer from './component/common/printer/index.js'
import input from './component/common/input/index.js'
import tab from './component/common/tab/index.js'
import tabPane from './component/common/tabPane/index.js'
import navMenu from './component/common/navMenu/index.js'

const components = [
    start,
    printer,
    tab,
    tabPane
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
    tab,
    tabPane,
    install
}