<template>
    <div v-show='active'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'smile-tab-pane',
    created(){
        this.$parent.$emit('tab-nav-update')
    },
    updated() {
        debugger
      this.$parent.$emit('tab-nav-update')
    }
}
</script>
<style lang="less" scoped>

</style>