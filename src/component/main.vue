<template>
    <div>
        <!-- <smile-start>
            <div slot='smile-title' class='smile-title'>hello</div>
            <div slot='smile-words' class='smile-words'>welcome to the smile world!</div>
        </smile-start>
        <smile-printer
            :list='list'
            :isConnect='isConnect'
        /> -->
        <smile-tab @tab-click="handleClick">
            <smile-tab-pane
                label="用户管理" name="first"
            >用户管理</smile-tab-pane>
            <smile-tab-pane
                label="角色管理" name="second"
            >角色管理</smile-tab-pane>
        </smile-tab>
    </div>
</template>
<script>
// import smileStart from './smile-start/src/index.vue'
// import smilePrinter from 'app_common_path/smile-printer/src'
export default {
    name: 'smileUI',
    // components:{smileStart,smilePrinter},
    data(){
        return{
            activeName: 'second'
        }
    },
    methods:{
        handleClick(tab, event){
            console.log(tab, event)
        }
    }
}
</script>
<style scoped>
    .smile-title{
        color:red
    }
    .smile-words{
        color:green

    }
</style>