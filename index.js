new pageUtil("#GradeBox").response();
new pageUtil("#shareBox").response();
document.querySelector(".share").ontouchstart=function(e){
    document.querySelector("#shareBox").style.display = "block";
        e.preventDefault();
    e.stopPropagation();
}
document.querySelector("#shareBox").ontouchstart=function(e){
    this.style.display = "none";
        e.preventDefault();
    e.stopPropagation();
}
document.querySelector(".again").ontouchstart = function(e){
    document.querySelector("#GradeBox").style.display = "none";

    Game.again();
    e.preventDefault();
    e.stopPropagation();
    console.log("again")
}
document.querySelector(".ewm").ontouchstart = function(e){
    e.stopPropagation();
}
var comicSVG,ccSVG;



(function(){
    function ComicToll(fn){
        this.onEnd = fn;
        // this.comics = comics;
        this.root = document.querySelector("#comicBBox");
        this.height = Math.round(this.root.getBoundingClientRect().bottom-document.documentElement.clientHeight);
        // this.currentComic 
        this.lengths = [1410,1950,2100,2340,2640];
        this.comicTime = 800;
        this.halt = 800;
        this.slideTime = 50;
        this.prevOffset = 0;

        //
        this.blockNum = 0;
        this.comicNum = 0;
        this.blocks = [3,2,1,1,1,1]

        var comics = this.comics =  []; 
            for (var k = 1;k<10;k++){
            comics.push(comicSVG.select("#comic"+k).attr({opacity:0}));
            //  comics.push(comicSVG.select("#comic"+k));
        }
    }

    ComicToll.prototype.auto = function(){
        var _this = this;
        this.comics.forEach(function(v){
            v.attr({opacity:1})
        });
        var comicFade = anime({
            targets: document.querySelectorAll("#comic>g:not(:first-child)"),
            translateY: function(target) {
                // if (target.classList.contains('stripe-right')) return -1000;
                return 2000;
            },
            opacity: {
                value: 0,
                duration: 5000
            },
            delay: function(t, i) { 
                if(i>=6){
                    return (2500 +i *850)
                }
                return  (i * 850) 
            },
            duration: 800,
            direction: 'reverse',
            easing: 'easeOutExpo'
        });

        var scroll = anime({
            targets: document.querySelector("#comicBBox"),
            translateY: function(target) {
                // if (target.classList.contains('stripe-right')) return -1000;
                return -parseInt((2640-1008)*document.documentElement.clientWidth/640);
            },
            translateZ:"0",
            duration: 12000,
            direction: 'normal',
            delay:"1000",
            easing: 'linear',
            complete:function(){
                setTimeout(_this.onEnd,1000);
            }
        })
    }

    ComicToll.prototype.start = function(){
        
        for(var i = 0;i<this.blocks[this.blockNum];i++){
            setTimeout(function(){
                this.showComic();
            }.bind(this),i*this.comicTime);
        }
        this.blockNum++;
        setTimeout(function(){
            this.slide();
        }.bind(this),2000);
    }

    ComicToll.prototype.slide = function(){
        
        var offset = parseInt((this.lengths[this.blockNum-1]-1008)*document.documentElement.clientWidth/640);
        var time = ((offset-this.prevOffset)/this.slideTime).toString().substr(0,4);
        this.prevOffset = offset;
        this.root.style.cssText = "-webkit-transform:translate3d(0,-"+offset
        +"px,0);-webkit-transition-duration:"+time+"s;opacity:1";

        for(var i = 0;i<this.blocks[this.blockNum];i++){
            setTimeout(function(){
                this.showComic();
            }.bind(this),i*this.comicTime);
        }

        if(this.blockNum !==this.blocks.length-1){
            setTimeout(function(){
                this.slide();
            }.bind(this),this.comicTime*this.blocks[this.blockNum]+this.halt);
            this.blockNum++;
        }else{
            // setTimeout(function(){
            //     this.onEnd();
            // }.bind(this),this.comicTime*this.blocks[this.blockNum]+this.halt);
        }
        
    }
    ComicToll.prototype.showComic = function(){
        this.comics[this.comicNum++].animate({opacity:1},1000,function(){
        });
    }


    window.ComicToll = ComicToll;
})()

var Wel = {
    isSaveBtn:true,
    index:function(){
    
        setTimeout(function(){
            Snap("#cover").touchstart(function(e){
                e.stopPropagation();
                e.preventDefault();
                Snap("#cover").animate({opacity:0},1500);
                // Snap("#comicBox").animate({opacity:1},1000);
                setTimeout(function(){

                    document.querySelector("#comicBBox").style.opacity=1;
                    Wel.comic();
                    createjs.Sound.stop();
                    createjs.Sound.play("sound2", createjs.Sound.INTERRUPT_EARLY, 0, 0, false);
                },500)

                Snap("#cover").untouchstart(arguments.callee);
            });
        },2000)
    },
    comic:function(){
        /** 
         * preset gpu accelerate
         */
                        document.querySelector("#cover").style.display= "none";
        comicSVG.node.style.willChange = "transform";

        /** 
         * comic word
         * */
        var timer = 0;
        comicSVG.selectAll("#index path").forEach(function(v,i){
            v.attr({opacity:0})           
            setTimeout(function(){
                v.animate({opacity:1},1000);                
            },timer);
            timer += 100;
            
        })
        /**
         * comic
         * */


        // var comicToll = new ComicToll(Wel.page1);
        // setTimeout(function(){
        //     comicToll.auto();
        // },2000);
        

    
        

        var comicToll = new ComicToll(Wel.page1);
        setTimeout(function(){
            comicToll.auto();
        },2000);


        // var comicDom = document.querySelector("#comicBBox");

        // comicDom.style.cssText = "-webkit-transform:translateY(-"+Math.round(comicDom.getBoundingClientRect().bottom-document.documentElement.clientHeight)+"px);opacity:1";

        // var comics = []; 
        // for (var k = 1;k<10;k++){
        //     comics.push(comicSVG.select("#comic"+k));
        // }

        // var comicTimer = 0;
        // comics.forEach(function(v){
        //     v.attr({opacity:0})
        //     setTimeout(function(){
        //         v.animate({opacity:1},1000); 
        //     },comicTimer);
        //     comicTimer += 800;
        // })
        // setTimeout(function(){
        //     Wel.page1();
        // },10000);
    },
    page1:function(){
        document.querySelector("#contentBox").style.opacity = 1;
        document.querySelector("#comicBBox").style.opacity = 0;
        document.querySelector("#hu").setAttribute("class","animate");
            setTimeout(function(){
                ccSVG.select("#doll1").animate({opacity:1},400,function(){
                    ccSVG.select("#aha").animate({opacity:1},400,function(){
                        ccSVG.select("#smg").animate({opacity:1},400);
                        setTimeout(function(){
                            Wel.page2();
                        },1500)
                    });
                });
            },400);
    },
    page2:function(){
        ccSVG.select("#page1").animate({"opacity":"0"},300);
        ccSVG.select("#page2").animate({"opacity":"1"},800);

        document.querySelector("#comicBBox").style.display= "none";

        ccSVG.select("#btn").touchstart(function(e){
            e.preventDefault();
            e.stopPropagation();
            if(Wel.isSaveBtn){
                Wel.page3();
            }else{
                console.log("time to game");
                Game.setup();
                document.getElementById("canvas").style.display = "block";
            }
        });
    },
    page3:function(){
        Wel.isSaveBtn = false;
        var wordl = ccSVG.selectAll("#doc_2_ path").length;
        var timer = 1;

        for(var i = 1;i<=5;i++){
                ccSVG.select("#path path:nth-child("+i+")").animate({d:ccSVG.select("#doc path:nth-child("+i+")").attr("d"),style:'fill:#040000'},500)
        }
        setTimeout(function(){
            var timer = 0;
            ccSVG.selectAll("#doc path").forEach(function(v,i){
                if(i<5) return;
                setTimeout(function(){
                    page2Path.append(v);
                },timer);
                timer += 20;

            });
        },500);

        //btn change
        var page2Path = ccSVG.select("#path");
        ccSVG.selectAll("#save path").forEach(function(v,i){
            var j = i+1;
            v.animate({d:ccSVG.select("#start path:nth-child("+j+")").attr("d")},2000);
        });

        setTimeout(function(){
            replaceWord();
            replaceNotice();
        },2100);

        function replaceWord(){
            ccSVG.selectAll("#save path").forEach(function(v,i){
                var j = i+1;
                v.attr({d:ccSVG.select("#start path:nth-child("+j+")").attr("d")});
            });
        }

        function replaceNotice(){
            ccSVG.select("#page2").use(ccSVG.select("#notice"));
            ccSVG.select("#saveNotice").attr({opacity:0})
        }
    }
}
       


var canvas, stage, streaming;

// POINTS = [4404,9267,13628,18300,22311,26296,29742,33170,35995,38822,40820,42844];
var POINTS = [4404,9267,13658,18050,22050,26150,29642,33070,35850,38652,40820,42844];

//difficult coefficient
var COE = [100,90,80,70,60,50,40,30,20,15,10,5];
// var LEVELRANGE = [10,55,80,90,95,99,100];
var LEVELRANGE = [4,6,7,8,10,11,12];
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

window.onload = function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
	loader.loadManifest(lib.properties.manifest);
}
//  = init;

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleProgress(e){
    console.log(e.loaded);
}

var Game = {
    results:[],
    result:{},
    
    grades:0,
    level:0,
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
        pulse.gotoAndPlay(1);
         pulse.visible = true;
        createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, false);
        this.timer = new Date().getTime();
       
        setTimeout(function(){
            streaming.visible = true;
            streaming.gotoAndPlay(1);
            face.visible = false;
            waterClip.gotoAndPlay(1);
            // pulse.gotoAndPlay(1);
            waterClip.visible = true;
            streaming.framerate = waterClip.framerate = pulse.framerate = 24;
            // waterClip.framerate = 60;
            // console.log("first streaming "+ streaming.framerate)
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

                //就是这
                
                if(Game.count == ALLTURN-1){
                    setTimeout(Game.end,1000)
                }else{
                    pulse.framerate = Math.round(lib.properties.fps*VARY_POINTS[0]/VARY_POINTS[Game.count+1]);
                    pulse.gotoAndPlay(1);
                }
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
            Game.grades++
            return 0
        }else{
 
            return 2
        }
    },
    end:function(){
        pulse.visible = waterClip.visible = false;
        stage.addChildAt(lampMovie,1);
        stage.on("click",function(){
            Game.showGrade();
            setTimeout(function(){
                Game.grades = 0;
                Game.level = 0;
                Game.count = 0;
                Game.timer = 0;
                stage.removeChild(lampMovie);
                streaming.framerate = waterClip.framerate = pulse.framerate = 24;
            },500);


            // console.log("ddd")
        },null,true)
    },
    again:function(){
        pulse.visible = true;
        pulse.gotoAndPlay(1);
        createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, false);
        this.timer = new Date().getTime();
       
        setTimeout(function(){
            streaming.visible = true;
            streaming.gotoAndPlay(1);
            face.visible = false;
            waterClip.gotoAndPlay(1);
     
            waterClip.visible = true;
            
   
            Game.clickable = true;
        },SHOW_TIME+FIRST_WAIT);


        this.timeEvent();
    },
    getGrade:function(){
        // var grade = Math.round(Game.grades/ALLTURN*100);
        var LEVELRANGE = [4,6,7,8,10,11,12];
        var grade = Game.grades;
        if(Game.grades == ALLTURN){
            return 6
        }else if(LEVELRANGE[4]<grade&&grade<=LEVELRANGE[5]){
            return 5 
        }else if(LEVELRANGE[3]<grade&&grade<=LEVELRANGE[4]){
            return 4
        }else if(LEVELRANGE[2]<grade&&grade<=LEVELRANGE[3]){
            return 3
        }else if(LEVELRANGE[1]<grade&&grade<=LEVELRANGE[2]){
            return 2
        }else if(LEVELRANGE[0]<grade&&grade<=LEVELRANGE[1]){
            return 1
        }else if(grade<LEVELRANGE[0]){
            return 0
        }
    },
    showGrade:function(){
        
        document.querySelector("#Grade").style.backgroundPosition = "-" + Game.getGrade()*640 + "px 0";
        document.querySelector("#GradeBox").style.display = "block"
    },
    setup:function(){
        streaming = new lib.streaming();
        streaming.visible = false;
        Game.init();
        

        lampMovie = new lib.lampMovie();
        doll = new lib.doll();
        pulse = new lib.pulse();
        // pulse.framerate = 25;
        face = new lib.face();
        var background = new lib.bg();
        var background2 = new lib.bg2();
        var waterpipe = new lib.Waterpipe();
        waterClip = new lib.waterClip();
        waterpipe.setTransform(305.5,172.1,1,1,0,0,0,48.1,163.2);

        stage = new createjs.Stage(canvas);

        
        stage.addChild(background);
        stage.addChild(background2);
        stage.addChild(doll);
        stage.addChild(face);
        stage.addChild(waterClip);
        stage.addChild(streaming);
        stage.addChild(pulse);
        // WATER PIPE
        stage.addChild(waterpipe);

    

        createjs.Touch.enable(stage);


        setTimeout(function(){
            Game.began();
        },1000);


        stage.update();

        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

}

function handleComplete(evt) {
    console.log(evt)
      v = new Vivus('cover', {duration: 190,type:"oneByOne",start:"manual", animTimingFunction: Vivus.EASE,file: 'svg/cover.svg',onReady: function (myVivus) {
                v.play();
                Wel.index();
            } 
        });
        createjs.Sound.play("sound1", createjs.Sound.INTERRUPT_EARLY, 0, 0, false);

        comicSVG = Snap("#comicBBox");
        ccSVG = Snap("#content");
	// Game.setup();
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}



 