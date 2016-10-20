var canvas, stage, streaming;

// POINTS = [4404,9267,13628,18300,22311,26296,29742,33170,35995,38822,40820,42844];
var POINTS = [4404,9267,13658,18050,22050,26150,29642,33070,35850,38652,40820,42844];

//difficult coefficient
var COE = [100,90,80,70,60,50,40,30,20,15,10,5]
var ALLTURN = POINTS.length;
var VARY_POINTS = POINTS.map(function(v,i,l){
    // if(i>0)
    return l[i+1] - v;

}).slice(0,-1);
VARY_POINTS.unshift(POINTS[0])




//one trick time
// var TIME = 44000;
// var RANGE = 500;
var PERFECT_RANGE = 100;

var SHOW_TIME = 600;

//first waterClip time 
var FIRST_WATER = 3100;
var FIRST_WAIT = VARY_POINTS[0]-SHOW_TIME-FIRST_WATER;


var WATER_TIME = VARY_POINTS.map(function(v,i){
    return Math.round(FIRST_WATER/(VARY_POINTS[0]-SHOW_TIME) * (v-SHOW_TIME))
});


var WAIT_TIME = VARY_POINTS.map(function(v,i){
    return v - SHOW_TIME - WATER_TIME[i]
})


var doll,pulse,waterClip;
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
        // console.log("first result time: "+ new Date().getTime());
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

    },

    hideDoll:function(){
        // console.log("hideDoll")
        // stage.removeChild(streaming);
        streaming.visible = false;
        waterClip.stop();
        doll.visible = false;
        
        
    },

    grow:function(){
        //clickable
        Game.clickable = true;
        face.visible = false;
        streaming.visible = true;
        // streaming = new lib.streaming();
        // stage.addChildAt(streaming,3);

        waterClip.visible = true;    
        waterClip.gotoAndPlay(1);
        streaming.gotoAndPlay(1);
         waterClip.framerate = streaming.framerate = Math.round(lib.properties.fps*FIRST_WATER/WATER_TIME[Game.count]);
        // console.log(streaming.framerate);
        streaming.play();
    },

    //another turn
    //when result show over
    //replace result with new streaming
    showDoll:function(){
        // console.log("show over" + new Date().getTime());
        // console.log("showdoll")
        Game.count++;
        // console.log

        stage.removeChild(this.result.body);
        stage.removeChild(this.result.face);
        waterClip.visible = false;

        // waterClip.stop();

        doll.visible = true;
        face.visible = true;
        // console.log("wait time : "+WAIT_TIME[Game.count]);

        if(Game.count == ALLTURN)
            return;

        setTimeout(function(){
            Game.grow();
        },WAIT_TIME[Game.count]);
        // stage.removeChild(streaming);

    },

    began:function(){
        // this.paused = false;
        pulse.gotoAndPlay(0);

        createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, false);
        this.timer = new Date().getTime();


        setTimeout(function(){
            streaming.visible = true;
            streaming.gotoAndPlay(0);
            face.visible = false;
            waterClip.gotoAndPlay(0);
            // waterClip.framerate = 60;
            console.log("first streaming "+ streaming.framerate)
            Game.clickable = true;
        },SHOW_TIME+FIRST_WAIT);

        this.enableClick();
        this.timeEvent();
        
    },

    //automaticlly event based on time
    timeEvent:function(){
        POINTS.forEach(function(v){
            // force to showresult
            setTimeout(function(){
                // if showResult has not excute
                if(Game.clickable){
                    Game.showResult(2);
                    console.log(new Date().getTime()-Game.timer);
                }
            },v+PERFECT_RANGE);

            // force to show doll
             setTimeout(function(){     
                Game.showDoll(); 
            },v+SHOW_TIME);

            setTimeout(function(){ 
                // console.log(VARY_POINTS[Game.count]);
                pulse.framerate = Math.round(lib.properties.fps*VARY_POINTS[0]/VARY_POINTS[Game.count+1]);
                pulse.gotoAndPlay(1) 
            },v+60);

                         
        });

        //force disable click
        // setTimeout(function(){
            
        // });
    },

    enableClick:function(){

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(230,770,180,180);
        pulse.hitArea = hit;

        pulse.on("click",function(){
            if(!Game.clickable) return;
            // handleclick
            Game.clickHandler(Game.count);
        })


    },
    clickHandler:function(i){
        // console.log(Game.getResult(i));
        Game.showResult(Game.getResult(i));
        Game.clickable = false;
    },
    getResult:function(i){
        var currentTime = new Date().getTime();
        var offsetTime = currentTime - Game.timer;
        if(offsetTime+COE[i]<POINTS[i]){
            return 1
        }else if(offsetTime-COE[i]<POINTS[i]<offsetTime+COE[i]){
            return 0
        }else{
            return 2
        }
    }
}

function handleComplete(evt) {
	streaming = new lib.streaming();
    streaming.visible = false;
    Game.init();

    doll = new lib.doll();
    pulse = new lib.pulse();
    // pulse.framerate = 25;
    face = new lib.face();
    var background = new lib.bg();
    var waterpipe = new lib.Waterpipe();
    waterClip = new lib.waterClip();
	waterpipe.setTransform(305.5,172.1,1,1,0,0,0,48.1,163.2);

	stage = new createjs.Stage(canvas);

    stage.addChild(background);
    stage.addChild(doll);
    stage.addChild(face);
    stage.addChild(waterClip);
	stage.addChild(streaming);
    stage.addChild(pulse);
    // WATER PIPE
	stage.addChild(waterpipe);

    createjs.Touch.enable(stage);

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