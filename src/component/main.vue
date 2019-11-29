<template>
    <div>
        <smile-start>
            <div slot="smile-title" class="smile-title">hello</div>
            <div slot="smile-words" class="smile-words">welcome to the smile world!</div>
        </smile-start>
    </div>
</template>
<script>
import smileStart from './smile-start/index.vue'
export default {
    name: 'smileUI',
    components:{smileStart},
    data(){
        return{

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