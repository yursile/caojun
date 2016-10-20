(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgimage.jpg", id:"bgimage"},
		{src:"sounds/music.mp3", id:"music"}
	]
};



// symbols:

// stage content:

(lib.pulse = function(mode,startPosition,loop) {
	loop = false;
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.paused = true;

	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1072));

	// Rhythm3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(28).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape.setTransform(320,860);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(57,159,193,0.667)").ss(22.7).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_1.setTransform(320,860);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(62,113,130,0.333)").ss(17.4).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_2.setTransform(320,860);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(68,68,68,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_3.setTransform(320,860);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},105).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Rhythm2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_4.setTransform(320,860,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggzAAAQAAtlJnpnQJnpnNlAAQNmAAJnJnQJnJnAANlQAANmpnJnQpnJntmAAQtlAApnpnQpnpnAAtmg");
	this.shape_5.setTransform(320,860);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggyAAAQAAtlJnpmQJmpnNlAAQNmAAJmJnQJnJmAANlQAANmpnJmQpmJntmAAQtlAApmpnQpnpmAAtmg");
	this.shape_6.setTransform(320,860);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggyAAAQAAtkJnpmQJnpoNkAAQNlAAJmJoQJoJmAANkQAANlpoJmQpmJotlAAQtkAApnpoQpnpmAAtlg");
	this.shape_7.setTransform(320,860);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggxAAAQAAtjJnpnQJmpmNkAAQNkAAJnJmQJmJnAANjQAANkpmJnQpnJmtkAAQtkAApmpmQpnpnAAtkg");
	this.shape_8.setTransform(320,860);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggwAAAQAAtjJnpmQJmpnNjAAQNkAAJmJnQJnJmAANjQAANkpnJmQpmJntkAAQtjAApmpnQpnpmAAtkg");
	this.shape_9.setTransform(320,860);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EgguAAAQAAtiJlpnQJmplNjAAQNkAAJmJlQJlJnAANiQAANjplJnQpmJltkAAQtjAApmplQplpnAAtjg");
	this.shape_10.setTransform(320,860);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggtAAAQAAtiJmplQJlpmNiAAQNjAAJlJmQJmJlAANiQAANjpmJlQplJmtjAAQtiAAplpmQpmplAAtjg");
	this.shape_11.setTransform(320,860);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggrAAAQAAthJlplQJlplNhAAQNiAAJlJlQJlJlAANhQAANiplJlQplJltiAAQthAAplplQplplAAtig");
	this.shape_12.setTransform(320,860);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggoAAAQAAtgJkpkQJkpkNgAAQNhAAJkJkQJkJkAANgQAANhpkJkQpkJkthAAQtgAApkpkQpkpkAAthg");
	this.shape_13.setTransform(320,860);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggmAAAQAAtfJjpkQJkpjNfAAQNgAAJkJjQJjJkAANfQAANgpjJkQpkJjtgAAQtfAApkpjQpjpkAAtgg");
	this.shape_14.setTransform(320,860);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggjAAAQAAteJipjQJjpiNeAAQNfAAJiJiQJjJjAANeQAANfpjJiQpiJjtfAAQteAApjpjQpipiAAtfg");
	this.shape_15.setTransform(320,860);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EgggAAAQAAtdJhpiQJiphNdAAQNeAAJhJhQJiJiAANdQAANepiJiQphJhteAAQtdAApiphQphpiAAteg");
	this.shape_16.setTransform(320,860);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggdAAAQAAtcJgphQJhpgNcAAQNdAAJhJgQJgJhAANcQAANdpgJhQphJgtdAAQtcAAphpgQpgphAAtdg");
	this.shape_17.setTransform(320,860);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggaAAAQAAtaJgpgQJgpgNaAAQNbAAJgJgQJgJgAANaQAANbpgJgQpgJgtbAAQtaAApgpgQpgpgAAtbg");
	this.shape_18.setTransform(320,860);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggWAAAQAAtYJepgQJfpeNZAAQNaAAJfJeQJeJgAANYQAANZpeJgQpfJetaAAQtZAApfpeQpepgAAtZg");
	this.shape_19.setTransform(320,860);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggSAAAQAAtXJdpeQJepdNXAAQNYAAJeJdQJdJeAANXQAANYpdJeQpeJdtYAAQtXAApepdQpdpeAAtYg");
	this.shape_20.setTransform(320,860);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggOAAAQAAtWJcpbQJcpdNWAAQNXAAJbJdQJdJbAANWQAANXpdJbQpbJdtXAAQtWAApcpdQpcpbAAtXg");
	this.shape_21.setTransform(320,860);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggKAAAQAAtTJbpcQJbpbNUAAQNVAAJbJbQJbJcAANTQAANUpbJcQpbJbtVAAQtUAApbpbQpbpcAAtUg");
	this.shape_22.setTransform(320,860);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggFAAAQAAtSJapZQJZpaNSAAQNTAAJZJaQJaJZAANSQAANTpaJZQpZJatTAAQtSAApZpaQpapZAAtTg");
	this.shape_23.setTransform(320,860);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggAAAAQAAtPJYpYQJYpZNQAAQNQAAJYJZQJZJYAANPQAANQpZJYQpYJZtQAAQtQAApYpZQpYpYAAtQg");
	this.shape_24.setTransform(320,860);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/7AAQAAtOJXpWQJXpWNNAAQNOAAJXJWQJWJWAANOQAANPpWJWQpXJXtOAAQtNAApXpXQpXpWAAtPg");
	this.shape_25.setTransform(320,860);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/1AAQAAtLJVpVQJVpVNLAAQNMAAJVJVQJVJVAANLQAANMpVJVQpVJVtMAAQtLAApVpVQpVpVAAtMg");
	this.shape_26.setTransform(320,860);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/wAAQAAtJJUpTQJUpTNIAAQNJAAJUJTQJTJTAANJQAANKpTJTQpUJTtJAAQtIAApUpTQpUpTAAtKg");
	this.shape_27.setTransform(320,860);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/qAAQAAtGJSpSQJSpSNGAAQNHAAJSJSQJSJSAANGQAANHpSJSQpSJStHAAQtGAApSpSQpSpSAAtHg");
	this.shape_28.setTransform(320,860);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/jAAQAAtEJPpQQJRpPNDAAQNEAAJQJPQJQJQAANEQAANEpQJQQpQJQtEAAQtDAApRpQQpPpQAAtEg");
	this.shape_29.setTransform(320,860);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/dAAQAAtBJOpOQJOpNNBAAQNCAAJOJNQJNJOAANBQAANCpNJOQpOJOtCAAQtBAApOpOQpOpOAAtCg");
	this.shape_30.setTransform(320,860);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/WAAQAAs+JMpMQJMpMM+AAQM/AAJMJMQJMJMAAM+QAAM/pMJMQpMJMs/AAQs+AApMpMQpMpMAAs/g");
	this.shape_31.setTransform(320,860);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/PAAQAAs7JKpKQJJpKM8AAQM8AAJKJKQJKJKAAM7QAAM8pKJKQpKJKs8AAQs8AApJpKQpKpKAAs8g");
	this.shape_32.setTransform(320,860);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/IAAQAAs5JIpHQJHpHM5AAQM6AAJHJHQJHJHAAM5QAAM6pHJHQpHJHs6AAQs5AApHpHQpIpHAAs6g");
	this.shape_33.setTransform(320,860);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/AAAQAAs1JFpGQJGpFM1AAQM2AAJFJFQJGJGAAM1QAAM2pGJFQpFJGs2AAQs1AApGpGQpFpFAAs2g");
	this.shape_34.setTransform(320,860);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A+5AAQAAsyJEpDQJDpDMyAAQMzAAJDJDQJDJDAAMyQAAMzpDJDQpDJDszAAQsyAApDpDQpEpDAAszg");
	this.shape_35.setTransform(320,860);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A+xAAQAAsvJBpAQJBpCMvAAQMwAAJBJCQJBJAAAMvQAAMwpBJAQpBJCswAAQsvAApBpCQpBpAAAswg");
	this.shape_36.setTransform(320,860);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A+oAAQAAsrI+o/QI/o+MrAAQMsAAI+I+QI/I/AAMrQAAMso/I/Qo+I+ssAAQsrAAo/o+Qo+o/AAssg");
	this.shape_37.setTransform(320,860);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+gAAQAAsnI8o9QI8o7MoAAQMoAAI9I7QI7I9AAMnQAAMoo7I9Qo9I7soAAQsoAAo8o7Qo8o9AAsog");
	this.shape_38.setTransform(320,860);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+XAAQAAskI5o6QI6o5MkAAQMlAAI6I5QI5I6AAMkQAAMlo5I6Qo6I5slAAQskAAo6o5Qo5o6AAslg");
	this.shape_39.setTransform(320,860);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+OAAQAAshI3o2QI3o3MgAAQMhAAI3I3QI3I2AAMhQAAMio3I2Qo3I3shAAQsgAAo3o3Qo3o2AAsig");
	this.shape_40.setTransform(320,860);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+FAAQAAscI0o1QI0o0MdAAQMdAAI0I0QI0I1AAMcQAAMdo0I1Qo0IzsdAAQsdAAo0ozQo0o1AAsdg");
	this.shape_41.setTransform(320,860);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A97AAQAAsYIxoyQIxoxMZAAQMZAAIyIxQIxIyAAMYQAAMZoxIyQoyIxsZAAQsZAAoxoxQoxoyAAsZg");
	this.shape_42.setTransform(320,860);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A9yAAQAAsVIvouQIuovMVAAQMWAAIuIvQIvIuAAMVQAAMWovIuQouIvsWAAQsVAAouovQovouAAsWg");
	this.shape_43.setTransform(320,860);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9oAAQAAsRIsorQIrosMRAAQMSAAIrIsQIsIrAAMRQAAMRosIsQorIrsSAAQsRAAororQososAAsRg");
	this.shape_44.setTransform(320,860);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9dAAQAAsMIoooQIpopMMAAQMNAAIoIpQIpIoAAMMQAAMNopIoQooIpsNAAQsMAAopopQooooAAsNg");
	this.shape_45.setTransform(320,860);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9TAAQAAsIImolQImomMHAAQMIAAImImQImIlAAMIQAAMJomIlQomIlsIAAQsHAAomolQomolAAsJg");
	this.shape_46.setTransform(320,860);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9IAAQAAsDIioiQIjojMDAAQMEAAIiIjQIjIiAAMDQAAMEojIiQoiIjsEAAQsDAAojojQoioiAAsEg");
	this.shape_47.setTransform(320,860);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A89AAQAAr+IfogQIfoeL/AAQMAAAIfIeQIeIgAAL+QAAL/oeIgQofIfsAAAQr/AAofofQofogAAr/g");
	this.shape_48.setTransform(320,860);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8yAAQAAr6IcobQIcocL6AAQL7AAIcIcQIcIbAAL6QAAL7ocIbQocIcr7AAQr6AAococQocobAAr7g");
	this.shape_49.setTransform(320,860);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8mAAQAAr1IYoZQIZoYL1AAQL2AAIZIYQIYIZAAL1QAAL2oYIZQoZIYr2AAQr1AAoZoYQoYoZAAr2g");
	this.shape_50.setTransform(320,860);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8aAAQAArxIVoUQIUoVLxAAQLxAAIVIVQIVIUAALxQAALxoVIVQoVIVrxAAQrxAAoUoVQoVoVAArxg");
	this.shape_51.setTransform(320,860);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8OAAQAArrIRoRQIRoSLsAAQLsAAISISQIRIRAALrQAALsoRIRQoSISrsAAQrsAAoRoSQoRoRAArsg");
	this.shape_52.setTransform(320,860);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8CAAQAArmIOoOQIOoOLmAAQLnAAIOIOQIOIOAALmQAALnoOIOQoOIOrnAAQrmAAoOoOQoOoOAArng");
	this.shape_53.setTransform(320,860);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A71AAQAArhIKoKQIKoKLhAAQLiAAIKIKQIKIKAALhQAALioKIKQoKIKriAAQrhAAoKoKQoKoKAArig");
	this.shape_54.setTransform(320,860);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7oAAQAArcIGoGQIGoGLcAAQLdAAIGIGQIGIGAALcQAALcoGIHQoGIGrdAAQrcAAoGoGQoGoHAArcg");
	this.shape_55.setTransform(320,860);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7bAAQAArWICoDQICoCLXAAQLYAAICICQICIDAALWQAALXoCIDQoCICrYAAQrXAAoCoCQoCoDAArXg");
	this.shape_56.setTransform(320,860);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7OAAQAArRH+n+QIAn/LQAAQLRAAIAH/QH+H+AALRQAALSn+H+QoAH/rRAAQrQAAoAn/Qn+n+AArSg");
	this.shape_57.setTransform(320,860);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A7AAAQAArLH6n6QH7n7LLAAQLMAAH7H7QH6H6AALLQAALMn6H6Qn7H7rMAAQrLAAn7n7Qn6n6AArMg");
	this.shape_58.setTransform(320,860);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6zAAQAArGH3n2QH2n3LGAAQLHAAH2H3QH3H2AALGQAALHn3H2Qn2H2rHAAQrGAAn2n2Qn3n2AArHg");
	this.shape_59.setTransform(320,860);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6lAAQAArAHznyQHynzLAAAQLBAAHyHzQHzHyAALAQAALBnzHyQnyHzrBAAQrAAAnynzQnznyAArBg");
	this.shape_60.setTransform(320,860);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6WAAQAAq5HunvQHunuK6AAQK6AAHvHuQHuHvAAK5QAAK6nuHvQnvHuq6AAQq6AAnunuQnunvAAq6g");
	this.shape_61.setTransform(320,860);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A6IAAQAAqzHqnqQHqnqK0AAQK1AAHqHqQHqHqAAKzQAAK0nqHqQnqHqq1AAQq0AAnqnqQnqnqAAq0g");
	this.shape_62.setTransform(320,860);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A55AAQAAquHmnlQHmnlKtAAQKuAAHmHlQHmHlAAKuQAAKvnmHlQnmHlquAAQqtAAnmnlQnmnlAAqvg");
	this.shape_63.setTransform(320,860);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A5qAAQAAqnHinhQHhniKnAAQKoAAHhHiQHiHhAAKnQAAKoniHhQnhHhqoAAQqnAAnhnhQninhAAqog");
	this.shape_64.setTransform(320,860);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A5aAAQAAqhHcndQHdncKhAAQKiAAHdHcQHcHdAAKhQAAKincHdQndHcqiAAQqhAAndncQncndAAqig");
	this.shape_65.setTransform(320,860);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A5LAAQAAqaHYnZQHYnYKbAAQKcAAHYHYQHYHZAAKaQAAKbnYHZQnYHYqcAAQqbAAnYnYQnYnZAAqbg");
	this.shape_66.setTransform(320,860);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A47AAQAAqUHUnTQHTnUKUAAQKVAAHTHUQHUHTAAKUQAAKVnUHTQnTHUqVAAQqUAAnTnUQnUnTAAqVg");
	this.shape_67.setTransform(320,860);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A4rAAQAAqNHPnPQHPnPKNAAQKOAAHPHPQHPHPAAKNQAAKOnPHPQnPHPqOAAQqNAAnPnPQnPnPAAqOg");
	this.shape_68.setTransform(320,860);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A4aAAQAAqGHKnKQHKnKKGAAQKHAAHKHKQHKHKAAKGQAAKHnKHKQnKHKqHAAQqGAAnKnKQnKnKAAqHg");
	this.shape_69.setTransform(320,860);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A4KAAQAAqAHFnEQHFnGKAAAQKBAAHEHGQHGHEAAKAQAAKBnGHEQnEHGqBAAQqAAAnFnGQnFnEAAqBg");
	this.shape_70.setTransform(320,860);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A35AAQAAp4HAnBQHBnAJ4AAQJ5AAHBHAQHAHBAAJ4QAAJ5nAHBQnBHAp5AAQp4AAnBnAQnAnBAAp5g");
	this.shape_71.setTransform(320,860);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A3oAAQAApxG7m8QG8m6JxAAQJyAAG8G6QG7G8AAJxQAAJym7G8Qm8G6pyAAQpxAAm8m6Qm7m8AApyg");
	this.shape_72.setTransform(320,860);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A3WAAQAApqG2m2QG2m2JqAAQJrAAG2G2QG2G2AAJqQAAJrm2G2Qm2G2prAAQpqAAm2m2Qm2m2AAprg");
	this.shape_73.setTransform(320,860);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A3FAAQAApjGxmxQGymwJiAAQJjAAGyGwQGxGxAAJjQAAJkmxGxQmyGwpjAAQpiAAmymwQmxmxAApkg");
	this.shape_74.setTransform(320,860);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A2zAAQAApcGsmrQGrmsJcAAQJdAAGrGsQGsGrAAJcQAAJdmsGrQmrGspdAAQpcAAmrmsQmsmrAApdg");
	this.shape_75.setTransform(320,860);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0.047)").ss(12).p("A2gAAQAApUGmmmQGmmmJUAAQJVAAGmGmQGmGmAAJUQAAJVmmGmQmmGmpVAAQpUAAmmmmQmmmmAApVg");
	this.shape_76.setTransform(320,860);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(0,0,0,0.047)").ss(12).p("A2OAAQAApMGhmhQGhmhJMAAQJNAAGhGhQGhGhAAJMQAAJNmhGhQmhGhpNAAQpMAAmhmhQmhmhAApNg");
	this.shape_77.setTransform(320,860);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0.047)").ss(12).p("A17AAQAApFGbmbQGcmbJEAAQJFAAGcGbQGbGbAAJFQAAJGmbGbQmcGbpFAAQpEAAmcmbQmbmbAApGg");
	this.shape_78.setTransform(320,860);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1oAAQAAo8GVmXQGXmVI8AAQI9AAGXGVQGVGXAAI8QAAI9mVGXQmXGVo9AAQo8AAmXmVQmVmXAAo9g");
	this.shape_79.setTransform(320,860);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1VAAQAAo1GQmQQGQmQI1AAQI2AAGQGQQGQGQAAI1QAAI2mQGQQmQGQo2AAQo1AAmQmQQmQmQAAo2g");
	this.shape_80.setTransform(320,860);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1CAAQAAosGLmLQGKmLItAAQIuAAGKGLQGLGLAAIsQAAItmLGLQmKGLouAAQotAAmKmLQmLmLAAotg");
	this.shape_81.setTransform(320,860);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0.055)").ss(12).p("A0uAAQAAolGFmEQGEmFIlAAQImAAGEGFQGFGEAAIlQAAImmFGEQmEGFomAAQolAAmEmFQmFmEAAomg");
	this.shape_82.setTransform(320,860);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(0,0,0,0.055)").ss(12).p("A0aAAQAAocF/l/QF/l/IcAAQIdAAF/F/QF/F/AAIcQAAIdl/F/Ql/F/odAAQocAAl/l/Ql/l/AAodg");
	this.shape_83.setTransform(320,860);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("A0GAAQAAoUF5l5QF5l5IUAAQIVAAF5F5QF5F5AAIUQAAIVl5F5Ql5F5oVAAQoUAAl5l5Ql5l5AAoVg");
	this.shape_84.setTransform(320,860);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzyAAQAAoMFzlzQFzlzIMAAQINAAFzFzQFzFzAAIMQAAINlzFzQlzFzoNAAQoMAAlzlzQlzlzAAoNg");
	this.shape_85.setTransform(320,860);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzdAAQAAoDFtltQFtltIDAAQIEAAFtFtQFtFtAAIDQAAIEltFtQltFtoEAAQoDAAltltQltltAAoEg");
	this.shape_86.setTransform(320,860);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(0,0,0,0.063)").ss(12).p("AzIAAQAAn6FnlnQFnlnH6AAQH7AAFnFnQFnFnAAH6QAAH7lnFnQlnFnn7AAQn6AAlnlnQlnlnAAn7g");
	this.shape_87.setTransform(320,860);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0.063)").ss(12).p("AyzAAQAAnxFhlhQFhlgHxAAQHyAAFhFgQFgFhAAHxQAAHylgFhQlhFgnyAAQnxAAlhlgQlhlhAAnyg");
	this.shape_88.setTransform(320,860);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(0,0,0,0.063)").ss(12).p("AydAAQAAnpFalaQFalaHpAAQHqAAFaFaQFaFaAAHpQAAHqlaFaQlaFanqAAQnpAAlalaQlalaAAnqg");
	this.shape_89.setTransform(320,860);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AyIAAQAAngFUlUQFUlUHgAAQHhAAFUFUQFUFUAAHgQAAHhlUFUQlUFUnhAAQngAAlUlUQlUlUAAnhg");
	this.shape_90.setTransform(320,860);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AxyAAQAAnXFOlNQFOlNHWAAQHXAAFOFNQFNFNAAHXQAAHYlNFNQlOFNnXAAQnWAAlOlNQlOlNAAnYg");
	this.shape_91.setTransform(320,860);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AxbAAQAAnNFHlHQFHlHHNAAQHOAAFHFHQFHFHAAHNQAAHOlHFHQlHFHnOAAQnNAAlHlHQlHlHAAnOg");
	this.shape_92.setTransform(320,860);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AxFAAQAAnEFBlAQFAlAHEAAQHFAAFAFAQFAFAAAHEQAAHFlAFAQlAFAnFAAQnEAAlAlAQlBlAAAnFg");
	this.shape_93.setTransform(320,860);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AwuAAQAAm6E6k6QE6k6G6AAQG7AAE6E6QE6E6AAG6QAAG7k6E6Qk6E6m7AAQm6AAk6k6Qk6k6AAm7g");
	this.shape_94.setTransform(320,860);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(0,0,0,0.075)").ss(12).p("AwXAAQAAmxEzkzQEzkzGxAAQGyAAEzEzQEzEzAAGxQAAGykzEzQkzEzmyAAQmxAAkzkzQkzkzAAmyg");
	this.shape_95.setTransform(320,860);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.075)").ss(12).p("AwAAAQAAmnEsktQEtksGnAAQGoAAEtEsQEsEtAAGnQAAGoksEtQktEsmoAAQmnAAktksQksktAAmog");
	this.shape_96.setTransform(320,860);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("AvoAAQAAmeElklQElklGeAAQGfAAElElQElElAAGeQAAGfklElQklElmfAAQmeAAklklQklklAAmfg");
	this.shape_97.setTransform(320,860);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("AvRAAQAAmUEfkeQEekeGUAAQGVAAEeEeQEfEeAAGUQAAGVkfEeQkeEemVAAQmUAAkekeQkfkeAAmVg");
	this.shape_98.setTransform(320,860);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("Au5AAQAAmKEYkXQEXkXGKAAQGLAAEXEXQEXEXAAGKQAAGLkXEXQkXEXmLAAQmKAAkXkXQkYkXAAmLg");
	this.shape_99.setTransform(320,860);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AugAAQAAmAEQkQQEQkQGAAAQGBAAEQEQQEQEQAAGAQAAGBkQEQQkQEQmBAAQmAAAkQkQQkQkQAAmBg");
	this.shape_100.setTransform(320,860);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AuIAAQAAl2EJkJQEJkJF2AAQF3AAEJEJQEJEJAAF2QAAF3kJEJQkJEJl3AAQl2AAkJkJQkJkJAAl3g");
	this.shape_101.setTransform(320,860);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.086)").ss(12).p("AtvAAQAAlsECkBQEBkCFsAAQFtAAEBECQECEBAAFsQAAFtkCEBQkBECltAAQlsAAkBkCQkCkBAAltg");
	this.shape_102.setTransform(320,860);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(0,0,0,0.086)").ss(12).p("AtWAAQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6Qj6j7AAlig");
	this.shape_103.setTransform(320,860);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0.09)").ss(12).p("As9AAQAAlWD0j0QDzjzFWAAQFXAADzDzQD0D0AAFWQAAFXj0D0QjzDzlXAAQlWAAjzjzQj0j0AAlXg");
	this.shape_104.setTransform(320,860);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(0,0,0,0.09)").ss(12).p("AsjAAQAAlMDsjrQDrjsFMAAQFNAADrDsQDsDrAAFMQAAFNjsDrQjrDslNAAQlMAAjrjsQjsjrAAlNg");
	this.shape_105.setTransform(320,860);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0.094)").ss(12).p("AsKAAQAAlBDkjlQDljjFBAAQFCAADlDjQDjDlAAFBQAAFCjjDlQjlDjlCAAQlBAAjljjQjkjlAAlCg");
	this.shape_106.setTransform(320,860);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(0,0,0,0.094)").ss(12).p("ArwAAQAAk3DdjcQDdjcE2AAQE3AADdDcQDdDcAAE3QAAE4jdDcQjdDck3AAQk2AAjdjcQjdjcAAk4g");
	this.shape_107.setTransform(320,860);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0.098)").ss(12).p("ArVAAQAAksDVjUQDUjVEsAAQEtAADUDVQDVDUAAEsQAAEtjVDUQjUDVktAAQksAAjUjVQjVjUAAktg");
	this.shape_108.setTransform(320,860);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(0,0,0,0.098)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_109.setTransform(320,860);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(424,1212,432,432);

(lib.pulse2 = function(mode,startPosition,loop) {
	loop = false;
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.paused = true;
    // this.stop();

    // this.began = function(){
    //     this.paused = false;
    //     // this.play()
    //     // this.frame_0 = function() {
    //         createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    //     // }

	// 	setTimeout(function(){
	// 		// this.began(); 
	// 	}.bind(this),TIME);
    // }
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


(lib.bgimage = function() {
	this.initialize(img.bgimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1140);


(lib.clouds = function() {
	this.initialize();

	// yun
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Egx6AFeQAADwCRDcQCNDVDlB6QDwCAECgRQEcgTDzjFQA+C+C/CNQC1CGD0A0QD5A0Dog1QD9g5CoipQC0DhEpBTQEWBNEyg/QExhADmi3QD2jEBXkXQEcB2D6gHQDygHC3h8QC1h8BjjgQBljnAAk3QAAiuhqjaQhujgixiqQjEi9jdg+Qj9hGj3BtQiAk8lTi7QkviomGgaQl3gZkpBwQk1B2hYDeQj9jWlagSQk5gRk3CQQkuCMi6DrQjED4AHEGQiDg4ilAcQilAdiRBqQibBxhaCtQhjC+AADrg");
	this.shape.setTransform(319.5,168.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGTZmQkqhTiyjhQiqCpj8A5QjoA1j5g0Qj0g0i1iGQi+iNg/i+QjzDFkcATQkCARjwiAQjlh6iNjVQiQjcgBjwQABjrBii+QBaitCbhxQCRhqCmgdQCkgcCEA4QgIkGDEj4QC7jrEtiMQE3iQE5ARQFaASD+DWQBXjeE1h2QEphwF3AZQGGAaEvCoQFSC7CBE8QD3htD8BGQDeA+DEC9QCwCqBuDgQBqDaAACuQAAE3hlDnQhiDgi1B8Qi3B8jyAHQj6AHkdh2QhWEXj2DEQjmC3kxBAQiKAdiEAAQihAAiZgrg");
	this.shape_1.setTransform(319.5,168.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,643,340.2);






(lib.shadow = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.082,1],0,0,0,0,0,113.5).s().p("AshCTQlMg9gBhWQABhVFMg+QFMg9HVAAQHVAAFNA9QFMA+AABVQAABWlMA9QlNA+nVAAQnVAAlMg+g");
	this.shape.setTransform(113.5,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227,41.9);


(lib.Waterpipe01 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AgTgxQgkAAgaAXQgdAaAtAXQApAXA3AHQAcAEAUgBIAOhvg");
	this.shape.setTransform(-32.7,105.5,1.05,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA1Qg3gHgpgXQgtgXAdgaQAagXAkAAIBwgGIgOBvIgIAAQgRAAgXgDg");
	this.shape_1.setTransform(-32.7,105.5,1.05,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ABgArQAJg6gEhUQgDhNgIgaQgIgYhSAPQhSAQAAAhQAAAXgKCGQgKCEAAAaQAAAkBOAUQBLAVAMgbQASgnAPh5g");
	this.shape_2.setTransform(-39.7,105.1,1.05,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYDRQhOgUAAgkQAAgaAKiEQAKiGAAgXQAAghBSgQQBSgPAIAYQAIAaADBNQAEBUgJA6QgPB5gSAnQgHAPgcAAQgVAAgfgJg");
	this.shape_3.setTransform(-39.7,105.1,1.05,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("Ah8gFIBcAIQBlAHA4gK");
	this.shape_4.setTransform(20.3,119.7,1.05,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggADIhcgIID4AFQgiAGg1AAQggAAglgDg");
	this.shape_5.setTransform(20.3,119.7,1.05,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("AkLgZIAUAJQAcAKAlAHQB1AbCjgCQBUgBAzgNQAagGAJgG");
	this.shape_6.setTransform(14.1,104.1,1.05,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai2ABQglgHgcgKIgUgJIIXAZQgJAGgaAGQgzANhUABIgWAAQiVAAhtgZg");
	this.shape_7.setTransform(14.1,104.1,1.05,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("AixjjIieBhIgKChICUCxIFiAUICtiqIAQiRIiFh4g");
	this.shape_8.setTransform(12.8,110,1.05,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjFDQIiUixIAKihICehhIGGAUICFB4IgQCRIitCqg");
	this.shape_9.setTransform(12.8,110,1.05,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,1).p("AiuifIgCC7IgcAeQgTAkAuAbQAzAeCAAIQCEAHAtgdQAqgbgOgfIgXgZIAKjT");
	this.shape_10.setTransform(10.6,147,1.05,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACCfQiAgIgzgeQgugbATgkIAcgeIACi7IFwACIgKDTIAXAZQAOAfgqAbQgjAXhbAAIgzgBg");
	this.shape_11.setTransform(10.6,147,1.05,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("AEIg1Qh0BdihANQiZALhhhA");
	this.shape_12.setTransform(22.8,-157.6,1.05,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkHAAIIPg1Qh0BdihANQgWABgVAAQh8AAhTg2g");
	this.shape_13.setTransform(22.8,-157.6,1.05,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,1,1).p("Ah2zSQg5CTguD4QhdHvA4HyQAcD3AqE3QAXDrgXELQBSAsClgSQBUgJBDgRQAOhagBitQgBlZhImcQhDmAAvmKQAlk4Bxlc");
	this.shape_14.setTransform(14.6,-32.2,1.05,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai8S+QAXkLgXjrQgqk3gcj3Qg4nyBdnvQAuj4A5iTIGOgKQhxFcglE4QgvGKBDGAQBIGcABFZQABCtgOBaQhDARhUAJQgwAFgmAAQhnAAg6gfg");
	this.shape_15.setTransform(14.6,-32.2,1.05,1);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.5,-165.1,105.2,330.2);

(lib.Waterpipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Waterpipe01("synched",0);
	this.instance.setTransform(48.2,0.1,1,1,0,0,0,0,-163.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-163.2,scaleX:1.1,scaleY:0.94,y:0},10).to({regY:-163.1,scaleX:1,scaleY:1,y:0.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-1.9,105.2,330.2);


// stage content:



(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// // WATER PIPE
	// this.instance = new lib.Waterpipe();
	// this.instance.setTransform(305.5,172.1,1,1,0,0,0,48.1,163.2);

	this.instance_1 = new lib.clouds();
	this.instance_1.setTransform(320,-82.9,1,1,0,0,0,319.5,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(120));

	// SHADOW
	this.instance_2 = new lib.shadow();
	this.instance_2.setTransform(320,742.6,1,1,0,0,0,113.5,20.9);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// BACKGROUND
	this.instance_3 = new lib.bgimage();
	this.instance_3.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.5,315,643,1391.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;