<template>
    <div>
        <div class='smile-printer' v-for='(item, index) in list' :key='index'>
            <div class='smile-printer-left'>
                <div class='smile-printer-bluetooth'>
                </div>
            </div>
            <div class='smile-printer-middle'>
                <div class='smile-printer-middle-inner'>
                    <div class='smile-printer-middle-top'>
                       {{item.name}}
                    </div>
                    <div class='smile-printer-middle-bottom'>
                       {{item.mark}}
                    </div>
                </div>
            </div>
            <div class='smile-printer-right'>
                <div :class='item.isCon === 1 ? "smile-printer-right-inner-open" : "smile-printer-right-inner-close"'>
                    {{item.isCon === 1 ? isConnect.open : isConnect.close}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default  {
    name:'smilePrinter',

    props:{
        /**
         *list 传递参数 {name,mark,isCon}
         *name:显示的主要内容 String
         *mark：显示的备注信息 String
         *isCon：是否连接 Number
         */
        list:{
            type:Array,
            default:[]
        },
        isConnect:{
            type:Object,
            default:() => ({
                close: '未连接',
                open: '已连接'
            })
        }
    },
    data(){
        return{
           
        }
    },
    methods:{

    },

    created(){
        // for(let [index,item] of this.list.entries()){

        // }
    },
}
</script>
<style lang='less' scoped>
    .smile-printer {
        border:1px #E9E9E9 solid; 
        overflow: hidden;
        zoom: 1; 
        .smile-printer-left {
            position: relative;
            width: 92px;
            height: 108px;
            float: left;
            .smile-printer-bluetooth {
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                width: 46px;
                height: 46px;
                background: url('APP_SRC/asset/images/bluetooth_close.png') no-repeat 50% 50%;
                border:1px #e9e9e9 dashed;
                float: left;
            }
        }
        .smile-printer-middle {
            float: left;
            width: calc(~'100vw - 262px');
            height: 108px;
            position: relative;
            .smile-printer-middle-inner{
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                .smile-printer-middle-top {
                    color:#111111
                }
                .smile-printer-middle-bottom {
                    color:#888888
                }
            }
        }
        .smile-printer-right {
            width: 152px;
            height: 108px;
            float:right;
            position: relative;
            .smile-printer-right-inner-open{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top:50%;
                transform: translateY(-50%);
                width: 102px;
                height: 42px;
                text-align: center;
                vertical-align: middle;
                background: rgba(31,191,167,0.1);
                color:rgba(31,191,167,1);
            }
            .smile-printer-right-inner-close{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top:50%;
                transform: translateY(-50%);
                width: 102px;
                height: 42px;
                text-align: center;
                vertical-align: middle;
                background: rgba(245,245,245,1);
                color:#999999;
            }
        }
    }
</style>
