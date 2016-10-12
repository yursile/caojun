var canvas, stage, streaming;

var POINTS = [4300,9300,13800,18100,22100,26100,30000,32900,35900,38900,41300,43700];
var VARY_POINTS = POINTS.map(function(v,i,l){
    // if(i>0)
    return l[i+1] - v;

}).slice(0,-1);
VARY_POINTS.unshift(POINTS[0])
console.log(VARY_POINTS)

//one trick time
var TIME = 44000;
var RANGE = 500;
var PERFECT_RANGE = 300;

var SHOW_TIME = 600;

var doll,pulse;
window.onload = init;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

var Game = {
    results:[],
    result:{},
    count:0,//detective the click times
    timer:0,//every game,it has a start time UTC
    init:function(){

        //perfect
        var face1 = new lib.face1();
        var body1 = new lib.body1();
        this.results.push({face:face1,body:body1});

        //not full
        var face2 = new lib.face2();
        var body2 = new lib.body2();
        this.results.push({face:face2,body:body2});

        // spilled
        var face3 = new lib.face3();
        var body3 = new lib.body3();
        this.results.push({face:face3,body:body3});
    },
    //one turn result
    showResult:function(i){
        var results = this.results;
        //hide doll
        Game.hideDoll();

        // forbidClick
        Game.clickable = false;

        //show current result
        stage.addChildAt(results[i].body,2);
        stage.addChild(results[i].face);
        // store current result
        this.result = results[i];

        //make sure streaming has stoped
        setTimeout(function(){
          streaming.stop();
        },50);

        //replace doll after show over
        //now it was automatic set in enableClick

        // Game.showDoll();

    },

    hideDoll:function(){
        console.log("hideDoll")

        // stage.removeChild(streaming);
        // streaming.timeline.removeTween(streaming.faceTween);
        // streaming.timeline.removeTween(streaming.stemTween);
        // streaming.timeline.removeTween(streaming.rLeafTween);
        // streaming.timeline.removeTween(streaming.lLeafTween);
        // streaming.timeline.removeTween(streaming.streamTween);
        // streaming._updateTimeline()
        // streaming.gotoAndPlay(streaming.totalFrames);
        stage.removeChild(streaming);
        // streaming.timeline.removeTween(streaming.streamingTween);
   
        doll.visible = false;
        
        
    },
    //when result show over
    //replace result with new streaming
    showDoll:function(){
        console.log("showdoll")
       

        stage.removeChild(this.result.body);
        stage.removeChild(this.result.face);

        doll.visible = true;
        // stage.removeChild(streaming);

        streaming = new lib.streaming();
        stage.addChildAt(streaming,3);
        
        streaming.framefrate = Math.round(VARY_POINTS[0]/VARY_POINTS[Game.count]*lib.properties.fps);
        console.log(streaming.framefrate)
        streaming.play();

        // pulse.rebegan();
    },

    began:function(){
        // this.paused = false;
        pulse.gotoAndPlay(0);
        // createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, false);
        this.timer = new Date().getTime();

        streaming.gotoAndPlay(0);

        this.enableClick();

        this.showFull();
        this.clickable = true;
    },

    //player failed to click
    showFull:function(){
        POINTS.forEach(function(v){

            setTimeout(function(){
                // if showResult has not excute
                if(Game.clickable){
                    Game.showResult(2);
                }

            },v+PERFECT_RANGE);
        });
    },
    enableClick:function(){

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(230,770,180,180);
        pulse.hitArea = hit;

        pulse.on("click",function(){
            if(!Game.clickable) return;
            // handleclick
            Game.clickHandler(Game.count++);
        })

        POINTS.forEach(function(v){

            // clickable time
            setTimeout(function(){
                Game.clickable = true;

                //if no one click
                // automatic reset the value
                // setTimeout(function(){
                //     Game.clickable = false;
                // },v-SHOW_TIME);

            },v+SHOW_TIME);




            // replace doll time
            setTimeout(function(){
                Game.showDoll(); 
            },v+SHOW_TIME);
        });
    },
    clickHandler:function(i){
        console.log(Game.getResult(i));
        Game.showResult(Game.getResult(i));

        console.log("click")
        Game.clickable = false;
    },
    getResult:function(i){
        var currentTime = new Date().getTime();
        var offsetTime = currentTime - Game.timer;
        if(offsetTime+PERFECT_RANGE<POINTS[i]){
            return 2
        }else if(offsetTime-PERFECT_RANGE<POINTS[i]<offsetTime+PERFECT_RANGE){
            return 1
        }else{
            return 3
        }
    }
}

function handleComplete(evt) {
	streaming = new lib.streaming();
    Game.init();

    doll = new lib.doll();
    pulse = new lib.pulse();
    var background = new lib.bg();
    var waterpipe = new lib.Waterpipe();
    var waterClip = new lib.waterClip();
	waterpipe.setTransform(305.5,172.1,1,1,0,0,0,48.1,163.2);

	stage = new createjs.Stage(canvas);

    stage.addChild(background);
    stage.addChild(doll);
    stage.addChild(waterClip);
	stage.addChild(streaming);
    stage.addChild(pulse);
    // WATER PIPE
	stage.addChild(waterpipe);

    // setTimeout(function(){
    //     //showresult
    //     Game.showResult(1);

    //     setTimeout(function(){
    //         //replace result with doll
    //         // Game.showDoll();
    //     },2000);

    // },4500);


    // stage.on("click",function(){
    //     // pulse.began();
    //     Game.began();
    // })

    setTimeout(function(){
        Game.began();
    },1000);


	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}