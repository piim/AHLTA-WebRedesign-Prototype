/*
	UIZE JAVASCRIPT FRAMEWORK 2010-01-24

	http://www.uize.com/reference/Uize.Widget.HoverFader.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.HoverFader',required:['Uize.Fx','Uize.Fade.xFactory','Uize.Node'],builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype;c_c.c_d=function(c_e,c_f,c_g){c_f!=(c_g.reverse||false)?Uize.Fx.fadeStyle(c_e,this.c_h,this.c_i,0,c_g):Uize.Fx.fadeStyle(c_e,this.c_i,this.c_h,0,c_g);};c_c.c_j=function(c_e){this.c_d(c_e,true,this.c_k);};c_c.c_l=function(c_e){this.c_d(c_e,false,this.c_m);};c_c.tickle=function(c_g){var c_n=this;if(c_n.isWired){var c_o=c_n.c_o,c_p=c_o.length-1,c_q;Uize.Fade.fade(function(c_r){if(c_q==null)c_q=c_r-1;var c_s=c_r>c_q?1: -1;while(c_q!=c_r)c_n.c_l(c_o[c_q+=c_s]);},0,c_p,0,c_g==null||typeof c_g!='object'?{quantization:1,duration:c_p*(c_g==null?100:c_g)}:c_b.copyInto({quantization:1,duration:750},c_g));}};c_c.wireUi=function(){var c_n=this,c_o=c_n.c_o;if(!c_n.isWired&&c_o){c_n.wireNode(c_n.c_o=Uize.Node.find(c_o),{mouseover:function(){c_n.c_j(this)},mouseout:function(){c_n.c_l(this)}});c_a.prototype.wireUi.call(c_n);}};function c_t(){var c_u=this.c_u;
this.c_k=c_u?c_b.copyInto({},c_u,this.c_v):this.c_v;this.c_m=c_u?c_b.copyInto({},c_u,{reverse:!c_u.reverse},this.c_w):this.c_w;}c_b.registerProperties({c_h:{name:'defaultStyle',value:{color:'fff',backgroundColor:'000'}},c_v:{name:'fadeIn',onChange:c_t,value:{duration:250}},c_u:{name:'fadeInOut',onChange:c_t},c_w:{name:'fadeOut',onChange:c_t,value:{duration:350}},c_i:{name:'hoverStyle',value:{color:'000',backgroundColor:'fff'}},c_o:'nodes'});return c_b;}});