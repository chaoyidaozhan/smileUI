<template>
    <div 
    v-show='active'
    :id='`pane-${paneName}`'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'smileTabPane',
    props:{
       name:String,
       label:String
    },
    data(){
        loaded: false
    },
    created(){
        debugger
        this.$parent.$emit('tab-nav-update')
    },
    updated() {
        debugger
        this.$parent.$emit('tab-nav-update')
    },
    computed: {
        active() {
            const active = this.$parent.currentName === (this.name || this.index);
            if (active) {
                this.loaded = true;
            }
            return active;
        },
        paneName(){
            return this.name || this.index
        }
    },
}
</script>
<style lang="less" scoped>

</style>