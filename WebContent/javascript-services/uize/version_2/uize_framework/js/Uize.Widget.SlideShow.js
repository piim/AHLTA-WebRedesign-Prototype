/*
	UIZE JAVASCRIPT FRAMEWORK 2010-01-24

	http://www.uize.com/reference/Uize.Widget.SlideShow.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.SlideShow',required:'Uize.Widget.Button',builder:function(c_a){var c_b;var c_c=[],c_d={};var c_e=c_a.subclass(null,function(){var c_f=this;c_f.c_g('previous',function(){c_f.advance(-1)});c_f.c_g('next',function(){c_f.advance(1)});c_f.c_g('first',function(){c_f.set({c_h:0})});c_f.c_g('last',function(){c_f.set({c_h:c_f.c_i-1})});c_f.updateUi();}),c_j=c_e.prototype;c_j.c_g=Uize.Widget.Button.addChildButton;c_j.c_k=function(c_l){var c_f=this,c_m= -1,c_i=c_f.c_n();if(c_i){if(c_l==c_b||typeof c_l=='number'){c_m=c_l==c_b?c_f.c_h:c_l;c_m=c_f.c_o?((c_m%c_i)+c_i)%c_i:c_e.constrain(c_m,0,c_i-1);}else{c_m=c_e.indexIn(c_f.c_p,c_l);}}return c_m;};c_j.c_q=function(c_h){return(this.c_p||c_c)[this.c_k(c_h)]||null;};c_j.c_n=function(){return(this.c_p||c_c).length;};c_j.c_r=function(){var c_f=this,c_s=c_f.children;if(c_s.previous){function c_t(c_u,c_v){c_s[c_u].set({enabled:c_i&&c_v?'inherit':false});}var c_i=c_f.c_i,c_h=c_f.c_h,c_w= !!c_h,c_x=c_h!=c_i-1;c_t('previous',c_w||c_f.c_o);
c_t('first',c_w);c_t('next',c_x||c_f.c_o);c_t('last',c_x);}};c_j.c_y=function(c_z,c_A,c_B){var c_f=this,c_C=(c_f.c_D||c_d)[c_z]||c_f.children['slide'+c_e.capFirstChar(c_z)];c_C?(typeof c_C=='function'?c_C(c_A):c_C.set({value:c_A})):c_f.isWired&&c_f.setNodeValue(c_B||c_z,c_A);};c_j.c_E=function(){var c_f=this,c_l=c_f.c_l;for(var c_F in c_l)c_f.c_y(c_F,c_l[c_F],'slide_'+c_F);};c_j.c_G=function(){this.c_y('progress',this.c_H);};c_j.c_I=function(){this.c_y('slideNumber',this.c_h+1);};c_j.c_J=function(){this.c_y('totalSlides',this.c_i);};c_j.updateUi=function(){var c_f=this;c_f.c_r();c_f.c_I();c_f.c_G();c_f.c_J();c_f.c_E();};c_j.advance=function(c_K){this.set({c_h:this.c_h+c_K});};function c_L(){var c_i=this.c_i;this.set({c_H:c_i?Math.round((this.c_h+1)/c_i*100):0});}function c_M(){this.set({c_l:this.c_q()});}c_e.registerProperties({c_H:{name:'progress',onChange:c_j.c_G},c_l:{name:'slide',onChange:c_j.c_E},c_D:'slideBindings',c_h:{name:'slideNo',conformer:function(c_N){return this.c_k(c_N)},onChange:[c_M,c_L,
c_j.c_I,c_j.c_r],value:-1},c_p:{name:'slides',onChange:[function(){this.set({c_h:this.c_h,c_i:this.c_n()});},c_M],value:[]},c_i:{name:'totalSlides',onChange:[c_L,c_j.c_J,c_j.c_r]},c_o:{name:'wrap',value:false,onChange:c_j.c_r}});return c_e;}});