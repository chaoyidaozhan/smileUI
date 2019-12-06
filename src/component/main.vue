<template>
    <div>
        <smile-start>
            <div slot='smile-title' class='smile-title'>hello</div>
            <div slot='smile-words' class='smile-words'>welcome to the smile world!</div>
        </smile-start>
        <smile-printer
            :list='list'
            :isConnect='isConnect'
        />
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
            list:[
                {
                    name:'实例1',
                    mark:'备注1',
                    isCon:0
                },
                {
                    name:'实例2',
                    mark:'备注2',
                    isCon:1
                }
            ]
        }
    },
    methods:{

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