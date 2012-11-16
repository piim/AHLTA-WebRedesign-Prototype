/*
	UIZE JAVASCRIPT FRAMEWORK 2010-01-24

	http://www.uize.com/reference/Uize.Widget.ColorCube.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ColorCube',required:['Uize.Color','Uize.Color.xUtil'],builder:function(c_a){var c_b=true,c_c=false,c_d=Uize.Color;var c_e=c_a.subclass(function(){var c_f=this;c_f.c_g=new c_d;c_f.c_h=new c_d;c_f.c_i=new c_d;c_f.c_j=new c_d;c_f.c_k=new c_d;c_f.c_l=new c_d;c_f.c_m=new c_d;}),c_n=c_e.prototype;var c_o=c_n.updateUi=function(){var c_f=this;if(c_f.isWired){var c_g=c_f.c_g.from(c_f.c_p),c_h=c_f.c_h.from(c_f.c_q),c_i=c_f.c_i.from(c_f.c_r),c_j=c_f.c_j.from(c_f.c_s),c_t=c_g.encoding,c_k=c_f.c_k.setEncoding(c_t),c_l=c_f.c_l.setEncoding(c_t),c_m=c_f.c_m.setEncoding(c_t),c_u=c_f.c_u,c_v=c_f.c_v,c_w=c_f.c_w,c_x=c_f.c_x,c_y;for(var c_z= -1;++c_z<c_v;){c_y='y'+c_z;var c_A=c_z*c_x;c_k.blend(c_g,c_i,c_A);c_l.blend(c_h,c_j,c_A);for(var c_B= -1;++c_B<c_u;){c_m.blend(c_k,c_l,c_B*c_w);c_f.getNode('x'+c_B+c_y).style.backgroundColor=c_m.to('RGB string');}}}};c_e.registerProperties({c_p:{name:'colorTopLeft',onChange:c_o,value:'ff0000'},c_q:{name:'colorTopRight',onChange:c_o,value:'ffffff'},c_r:{
name:'colorBottomLeft',onChange:c_o,value:'ffff00'},c_s:{name:'colorBottomRight',onChange:c_o,value:'ff00ff'},c_u:{name:'divisionsX',onChange:function(){this.c_w=1/((this.c_u-1)||1)},value:10},c_v:{name:'divisionsY',onChange:function(){this.c_x=1/((this.c_v-1)||1)},value:10}});c_e.set({html:{process:function(input){var output=[];for(var c_z= -1,c_v=input.divisionsY;++c_z<c_v;){output.push("\n");for(var c_B= -1,c_u=input.divisionsX;++c_B<c_u;){output.push("<img id=\"",input.idPrefix,"-x",c_B,"y",c_z,"\" src=\"",input.blankGif,"\" class=\"swatch\"/>");}output.push("<br/>");}output.push("\n");return output.join("");}}});return c_e;}});