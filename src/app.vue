<template>
    <div>
        <smile-ui>
        </smile-ui>
    </div>
</template>
<script>
import smileUi from './component/smile-ui.vue'
export default {
    name: 'app',
    components:{smileUi},
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