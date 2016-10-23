
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
        

        