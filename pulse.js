(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:




// symbols:


// stage content:
(lib.pulse = function(mode,startPosition,loop) {
    loop = false;
	this.initialize(mode,startPosition,loop,{});

    // this.paused = true;
    this.stop();

    this.rebegan = function(){
        // this.paused = false;
        this.play()
        // this.frame_0 = function() {
            createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
        // }
    }
	// timeline functions:
	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1072));

	// Rhythm3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(28).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape.setTransform(320,860);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(57,159,193,0.667)").ss(22.7).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_1.setTransform(320,860);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(62,113,130,0.333)").ss(17.4).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_2.setTransform(320,860);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(68,68,68,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_3.setTransform(320,860);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(105).to({_off:false},0).to({_off:true},1).wait(103).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(91).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(105).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(105).to({_off:false},0).to({_off:true},1).wait(103).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(91).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(106).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(105).to({_off:false},0).to({_off:true},1).wait(103).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(91).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(107).to({_off:false},0).wait(116).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},103).wait(3).to({_off:false},0).to({_off:true},101).wait(3).to({_off:false},0).to({_off:true},94).wait(3).to({_off:false},0).to({_off:true},93).wait(3).to({_off:false},0).to({_off:true},89).wait(3).to({_off:false},0).to({_off:true},67).wait(3).to({_off:false},0).to({_off:true},70).wait(3).to({_off:false},0).to({_off:true},69).wait(3).to({_off:false},0).to({_off:true},55).wait(3).to({_off:false},0).to({_off:true},53).wait(3).to({_off:false},0).to({_off:true},1).wait(20));

	// Rhythm2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_4.setTransform(320,860,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggsAAAQAAtiJlplQJmpkNhAAQNiAAJmJkQJkJlAANiQAANjpkJlQpmJktiAAQthAApmpkQplplAAtjg");
	this.shape_5.setTransform(320,860);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggWAAAQAAtYJepgQJfpeNZAAQNaAAJfJeQJeJgAANYQAANZpeJgQpfJetaAAQtZAApfpeQpepgAAtZg");
	this.shape_6.setTransform(320,860);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/yAAQAAtKJUpUQJUpUNKAAQNLAAJUJUQJUJUAANKQAANLpUJUQpUJUtLAAQtKAApUpUQpUpUAAtLg");
	this.shape_7.setTransform(320,860);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/AAAQAAs1JFpGQJGpFM1AAQM2AAJFJFQJGJGAAM1QAAM2pGJFQpFJGs2AAQs1AApGpGQpFpFAAs2g");
	this.shape_8.setTransform(320,860);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+AAAQAAsbIzoyQIyozMbAAQMcAAIyIzQIzIyAAMbQAAMcozIyQoyIzscAAQsbAAoyozQozoyAAscg");
	this.shape_9.setTransform(320,860);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8yAAQAAr6IcobQIcocL6AAQL7AAIcIcQIcIbAAL6QAAL7ocIbQocIcr7AAQr6AAococQocobAAr7g");
	this.shape_10.setTransform(320,860);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7VAAQAArUIBoAQIAoBLUAAQLVAAIAIBQIBIAAALUQAALVoBIAQoAIBrVAAQrUAAoAoBQoBoAAArVg");
	this.shape_11.setTransform(320,860);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A5qAAQAAqnHinhQHhniKnAAQKoAAHhHiQHiHhAAKnQAAKoniHhQnhHhqoAAQqnAAnhnhQninhAAqog");
	this.shape_12.setTransform(320,860);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A3wAAQAAp1G9m+QG+m9J1AAQJ2AAG+G9QG9G+AAJ1QAAJ2m9G+Qm+G9p2AAQp1AAm+m9Qm9m+AAp2g");
	this.shape_13.setTransform(320,860);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1oAAQAAo8GVmXQGXmVI8AAQI9AAGXGVQGVGXAAI8QAAI9mVGXQmXGVo9AAQo8AAmXmVQmVmXAAo9g");
	this.shape_14.setTransform(320,860);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzSAAQAAn/FplpQFrlqH+AAQH/AAFqFqQFqFpAAH/QAAIAlqFpQlqFqn/AAQn+AAlrlqQlplpAAoAg");
	this.shape_15.setTransform(320,860);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AwuAAQAAm6E6k6QE6k6G6AAQG7AAE6E6QE6E6AAG6QAAG7k6E6Qk6E6m7AAQm6AAk6k6Qk6k6AAm7g");
	this.shape_16.setTransform(320,860);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.086)").ss(12).p("At8AAQAAlxEGkFQEFkFFxAAQFyAAEFEFQEGEFAAFxQAAFykGEFQkFEFlyAAQlxAAkFkFQkGkFAAlyg");
	this.shape_17.setTransform(320,860);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.098)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_18.setTransform(320,860);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggpAAAQAAthJkpjQJkplNhAAQNiAAJkJlQJkJjAANhQAANipkJjQpkJltiAAQthAApkplQpkpjAAtig");
	this.shape_19.setTransform(320,860);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggMAAAQAAtUJcpcQJbpcNVAAQNVAAJcJcQJcJcAANUQAANVpcJcQpcJbtVAAQtVAApbpbQpcpcAAtVg");
	this.shape_20.setTransform(320,860);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/bAAQAAtAJNpNQJOpONAAAQNBAAJOJOQJNJNAANAQAANBpNJNQpOJOtBAAQtAAApOpOQpNpNAAtBg");
	this.shape_21.setTransform(320,860);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+XAAQAAskI5o6QI6o5MkAAQMlAAI6I5QI5I6AAMkQAAMlo5I6Qo6I5slAAQskAAo6o5Qo5o6AAslg");
	this.shape_22.setTransform(320,860);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9AAAQAAsAIgofQIgohMAAAQMBAAIgIhQIgIfAAMAQAAMBogIfQogIhsBAAQsAAAogohQogofAAsBg");
	this.shape_23.setTransform(320,860);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A5WAAQAAqfHbnbQHcncKfAAQKgAAHcHcQHbHbAAKfQAAKgnbHbQncHcqgAAQqfAAncncQnbnbAAqgg");
	this.shape_24.setTransform(320,860);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A3FAAQAApjGxmxQGymwJiAAQJjAAGyGwQGxGxAAJjQAAJkmxGxQmyGwpjAAQpiAAmymwQmxmxAApkg");
	this.shape_25.setTransform(320,860);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.055)").ss(12).p("A0fAAQAAoeGAmAQGBmBIeAAQIfAAGBGBQGAGAAAIeQAAIfmAGAQmBGBofAAQoeAAmBmBQmAmAAAofg");
	this.shape_26.setTransform(320,860);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AxnAAQAAnSFLlKQFLlKHRAAQHSAAFLFKQFLFKAAHSQAAHTlLFKQlLFKnSAAQnRAAlLlKQlLlKAAnTg");
	this.shape_27.setTransform(320,860);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AuaAAQAAl9EOkOQEPkPF9AAQF+AAEPEPQEOEOAAF9QAAF+kOEOQkPEPl+AAQl9AAkPkPQkOkOAAl+g");
	this.shape_28.setTransform(320,860);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggnAAAQAAtgJjpkQJkpjNgAAQNgAAJkJjQJkJkAANgQAANhpkJkQpkJjtgAAQtgAApkpjQpjpkAAthg");
	this.shape_29.setTransform(320,860);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggEAAAQAAtSJZpZQJZpZNSAAQNTAAJZJZQJZJZAANSQAANTpZJZQpZJZtTAAQtSAApZpZQpZpZAAtTg");
	this.shape_30.setTransform(320,860);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/LAAQAAs6JJpIQJJpJM5AAQM6AAJJJJQJJJIAAM6QAAM7pJJIQpJJIs6AAQs5AApJpIQpJpIAAs7g");
	this.shape_31.setTransform(320,860);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A96AAQAAsYIxowQIxoyMYAAQMZAAIwIyQIyIwAAMYQAAMZoyIwQowIysZAAQsYAAoxoyQoxowAAsZg");
	this.shape_32.setTransform(320,860);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8SAAQAArtIToSQISoTLtAAQLuAAISITQITISAALtQAALuoTISQoSISruAAQrtAAoSoSQoToSAArug");
	this.shape_33.setTransform(320,860);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6SAAQAAq4HtntQHtntK4AAQK5AAHtHtQHtHtAAK4QAAK5ntHtQntHtq5AAQq4AAntntQntntAAq5g");
	this.shape_34.setTransform(320,860);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A38AAQAAp6HBnAQHBnBJ6AAQJ7AAHAHBQHCHAAAJ6QAAJ7nCHAQnAHBp7AAQp6AAnBnBQnBnAAAp7g");
	this.shape_35.setTransform(320,860);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1OAAQAAoxGOmPQGOmOIyAAQIzAAGOGOQGOGPAAIxQAAIymOGPQmOGOozAAQoyAAmOmOQmOmPAAoyg");
	this.shape_36.setTransform(320,860);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AyKAAQAAngFVlVQFVlUHgAAQHhAAFVFUQFVFVAAHgQAAHhlVFVQlVFUnhAAQngAAlVlUQlVlVAAnhg");
	this.shape_37.setTransform(320,860);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AuuAAQAAmFEVkVQEUkTGFAAQGGAAEUETQEVEVAAGFQAAGGkVEVQkUETmGAAQmFAAkUkTQkVkVAAmGg");
	this.shape_38.setTransform(320,860);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EgghAAAQAAtdJhpiQJipiNeAAQNfAAJiJiQJhJiAANdQAANephJiQpiJitfAAQteAApipiQphpiAAteg");
	this.shape_39.setTransform(320,860);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/uAAQAAtIJTpTQJTpTNIAAQNJAAJTJTQJTJTAANIQAANJpTJTQpTJStJAAQtIAApTpSQpTpTAAtJg");
	this.shape_40.setTransform(320,860);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8eAAQAAryIWoWQIWoWLyAAQLzAAIWIWQIWIWAALyQAALzoWIWQoWIWrzAAQryAAoWoWQoWoWAArzg");
	this.shape_41.setTransform(320,860);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A6DAAQAAqyHpnoQHonoKyAAQKzAAHoHoQHpHoAAKyQAAKznpHoQnoHoqzAAQqyAAnonoQnpnoAAqzg");
	this.shape_42.setTransform(320,860);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzkAAQAAoFFvlwQFwluIFAAQIGAAFwFuQFvFwAAIFQAAIGlvFwQlwFuoGAAQoFAAlwluQlvlwAAoGg");
	this.shape_43.setTransform(320,860);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("AvhAAQAAmaEjkjQEkkjGaAAQGbAAEkEjQEiEjAAGaQAAGbkiEjQkkEjmbAAQmaAAkkkjQkjkjAAmbg");
	this.shape_44.setTransform(320,860);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggdAAAQAAtcJhpgQJgpgNcAAQNdAAJgJgQJgJgAANcQAANdpgJgQpgJgtdAAQtcAApgpgQphpgAAtdg");
	this.shape_45.setTransform(320,860);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9uAAQAAsTItouQIuosMTAAQMUAAIuIsQItIuAAMTQAAMUotIuQouIssUAAQsTAAouosQotouAAsUg");
	this.shape_46.setTransform(320,860);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A4QAAQAAqCHHnHQHHnGKCAAQKDAAHHHGQHHHHAAKCQAAKDnHHHQnHHGqDAAQqCAAnHnGQnHnHAAqDg");
	this.shape_47.setTransform(320,860);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.075)").ss(12).p("AwDAAQAAmpEuktQEsksGpAAQGqAAEsEsQEuEtAAGpQAAGqkuEtQksEsmqAAQmpAAksksQkuktAAmqg");
	this.shape_48.setTransform(320,860);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(845));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(844));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(3).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(843));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(842));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(5).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(841));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(6).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(840));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(362).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(8).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(838));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(9).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(837));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(10).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(836));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(11).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(835));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(12).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(834));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(833));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(241).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(635));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(242).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(507).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(243).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(363).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(244).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(152).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(245).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(631));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(247).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(248).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(202).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(151).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(249).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(361).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(250).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(503).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(251).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(625));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(449).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(442));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(450).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(441));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(451).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(440));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(452).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(439));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(453).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(438));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(454).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(437));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(455).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(456).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(435));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(457).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(434));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(458).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(641).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(642).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(279));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(644).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(645).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(276));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(647).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(274));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(648).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(273));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(801).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(135));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(803).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(805).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(807).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(129));

	// Rhythm1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_49.setTransform(320,860);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1072));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(424,1212,432,432);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;