export default  {
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
            default:{
                close: '未连接',
                open: '已连接'
            }
        }
    },
    data(){
        return{
           
        }
    },
    methods:{

    },

    created(){
        // debugger
        // for(let [index,item] of this.list.entries()){

        // }
    },
}