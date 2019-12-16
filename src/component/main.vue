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
    </div>
</template>

<script>
// import * as PIXI from './pixi.js'
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
        setup(){

        }
    },
    mounted(){
        var renderer = PIXI.autoDetectRenderer(
        256, 256,
        {antialias: false, transparent: true, resolution: 1}
        );        
        // renderer.view.style.border = "1px dashed black";
        // renderer.backgroundColor = 0x061639;
        // renderer.view.style.position = "absolute";
        // renderer.view.style.display = "block";
        // renderer.autoResize = true;
        // renderer.resize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.view)
        // console.log(2)

        var stage = new PIXI.Container()
        renderer.render(stage)
        //加载图片
        var texture = PIXI.loader.add("copyasset/bluetooth_close.png").load(this.setup);
// PIXI.utils.TextureCache("copyasset/bluetooth_close.png")
        // var sprite = new PIXI.Sprite(texture)
        // stage.appendChild(sprite)
        // const app = new PIXI.Application({
        //     width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        // });
        // document.body.appendChild(app.view);

        // const container = new PIXI.Container();

        // app.stage.addChild(container);

        // 加载一个图片
        // const texture = PIXI.Texture.from('copyasset/bluetooth_close.png');

        // 创建一个5x5的图片表
        // for (let i = 0; i < 25; i++) {
        //     const bunny = new PIXI.Sprite(texture);
        //     bunny.anchor.set(0.5);
        //     bunny.x = (i % 5) * 40;
        //     bunny.y = Math.floor(i / 5) * 40;
        //     container.addChild(bunny);
        // }

        // 把图片移到中心
        // container.x = app.screen.width / 2;
        // container.y = app.screen.height / 2;

        // Center bunny sprite in local container coordinates
        // container.pivot.x = container.width / 2;
        // container.pivot.y = container.height / 2;

        // Listen for animate update
        // app.ticker.add((delta) => {
            // rotate the container!
            // use delta to create frame-independent transform
        //     container.rotation -= 0.01 * delta;
        // });

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