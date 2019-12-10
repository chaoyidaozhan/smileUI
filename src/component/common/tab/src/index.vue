<script>
export default {
    name:'smileTab',
    props:{
      activeName: String,
      tabPosition: {
          type:String,
          default:'top'
      }
    },
    data(){
        return{
            panes: []

        }
    },
    watch:{
        activeName(value){
            this.setCurrentName(value)
        }
    },
    methods:{
        setCurrentName(value){
            
        },
        calcPaneInstances(isForceUpdate = false) {
            debugger
            if (this.$slots.default) {
            const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
                vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'smile-tab-pane');
            // update indeed
            const panes = paneSlots.map(({ componentInstance }) => componentInstance);
            const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]));
            if (isForceUpdate || panesChanged) {
                this.panes = panes;
            }
            } else if (this.panes.length !== 0) {
            this.panes = [];
            }
        },
    },
    render(h){
        let {
            tabPosition
        } = this;
        const header = (
            <div class={['smile-tab-headers',`is-${tabPosition}`]}>
            </div>
        )
        // {this.$slots.default}就是这个组件里面所包含着的内容
        const contents = (
            <div class='smile-tab-contents'>
                {this.$slots.default}
            </div>
        )
        return(
            <div class='smile-tab'> 
                {[header, contents]}
            </div>
        )
    },
    created(){
        this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true));
    }
}
</script>
<style lang='less' scoped>

</style>