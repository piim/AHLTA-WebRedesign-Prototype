/*
	UIZE JAVASCRIPT FRAMEWORK 2010-01-24

	http://www.uize.com/reference/Uize.Fade.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Fade',builder:function(b_a){var b_b,b_c='object',b_d=Uize.constrain;var b_e={},b_f=[],b_g=false,b_h;function b_i(){if((b_g= !!b_f.length)!= !!b_h)b_h=b_g?setInterval(b_j,10):clearInterval(b_h);}function b_j(){for(var b_k= -1,b_l;++b_k<b_f.length;)(b_l=b_f[b_k]).b_m?b_l.b_j():b_f.splice(b_k--,1);b_i();}function b_n(b_o){return b_o}var b_p=b_a.subclass(),b_q=b_p.prototype;b_q.b_r=function(){var b_s=this,b_o=b_t(b_s.b_u,b_s.b_v,b_s.b_w,b_s.b_x,b_s.b_y,b_s.b_o);if(b_o!=b_e)b_o!=b_s.b_o?b_s.set({b_o:b_o}):b_s.fire('Changed.value');};b_q.b_j=function(){var b_z=Math.min(((Date.now?Date.now(): +new Date)-this.b_A)/this.b_B,1);this.set({b_w:this.b_C?1-b_z:b_z});if(b_z==1){this.stop();this.fire('Done');}};b_q.stop=function(){this.set({b_m:false});};b_q.start=function(b_D){this.stop();this.set(b_p.copyInto({b_m:true},b_D));};var b_t=b_p.blendValues=function(b_E,b_F,b_G,b_x,b_y,b_H){if(b_E===b_F){return b_H!==b_b&&b_E===b_H?b_e:b_E;}else{if(b_y&&typeof b_y=='function'){b_G=b_y(b_G);b_y=b_b;}
if(typeof b_E==b_c&&b_E&& !(b_E instanceof RegExp)){var b_I=b_H&&typeof b_H==b_c,b_J=b_x&&typeof b_x==b_c,b_K=b_y&&typeof b_y==b_c,b_L=b_I?b_H:b_p.isArray(b_E)?[]:{},b_M;for(var b_N in b_E){var b_O=b_t(b_E[b_N],b_F[b_N],b_G,b_J?b_x[b_N]:b_x,b_K?b_y[b_N]:b_y,b_M=b_L[b_N]);if(b_I)b_I=b_O==b_e||(typeof b_O!=b_c&&b_O==b_M);if(b_O!=b_e)b_L[b_N]=b_O;}return b_I?b_e:b_L;}else{var b_L= !b_G?b_E:b_G==1?b_F: !b_x?b_E+(b_F-b_E)*b_G:b_G>0&&b_G<1?b_d(b_E+Math.round((b_F-b_E)*b_G/b_x)*b_x,b_E,b_F):b_E+Math.round((b_F-b_E)*b_G/b_x)*b_x;return b_H!==b_b&&b_L===b_H?b_e:b_L;}}};b_p.celeration=function(b_P,b_Q){var b_R=1-(b_P=b_P||0)-(b_Q=b_Q||0),b_S=2/(1+b_R),b_T=b_P?b_S/b_P:0,b_U=b_T/2,b_V=b_Q? -b_S/b_Q:0,b_W=b_V/2,b_X=b_P*b_P,b_Y;return(b_R>=1?b_n:function(b_o){return((b_o=(b_P?b_d(b_o*b_o,0,b_X)*b_U:0)+(b_R?b_S*b_d(b_o-b_P,0,b_R):0)+(b_Q?((b_S+(b_Y=b_d(b_o-b_P-b_R,0,b_Q))*b_W)*b_Y):0))>1?1:b_o);});};function b_Z(){this.set({b_y:this.b_P||this.b_Q?b_p.celeration(this.b_P,this.b_Q):null});}function b_0(){this.b_o=null;
this.b_r();}b_p.registerProperties({b_P:{name:'acceleration',onChange:b_Z},b_y:{name:'curve',onChange:b_0},b_Q:{name:'deceleration',onChange:b_Z},b_B:{name:'duration',value:2000},b_v:{name:'endValue',onChange:b_0,value:100},b_m:{name:'inProgress',onChange:function(){var b_s=this;if(b_s.b_m){b_s.b_A=Date.now?Date.now(): +new Date;b_s.fire('Start');b_s.b_o=b_s.b_w=null;b_s.b_j();b_f.push(b_s);b_i();}},value:false},b_w:{name:'progress',onChange:b_q.b_r,value:0},b_C:'reverse',b_u:{name:'startValue',onChange:b_0,value:0},b_x:'quantization',b_o:{name:'value',value:0}});return b_p;}});