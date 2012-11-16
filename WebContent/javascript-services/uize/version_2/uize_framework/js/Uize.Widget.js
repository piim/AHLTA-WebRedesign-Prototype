/*
	UIZE JAVASCRIPT FRAMEWORK 2010-01-24

	http://www.uize.com/reference/Uize.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget',required:'Uize.Node',builder:function(b_a){var b_b=null,b_c=true,b_d=false,b_e='string',b_f='function',b_g='concatenated',b_h,b_i=Uize.Node,b_j=b_i.doForAll,b_k=b_i.isNode,b_l=b_i.getById;var b_m=b_a.subclass(function(){this.children=this.b_n={};}),b_o=b_m.prototype;b_o.b_p=function(){if(window['$'+this.b_q]&&(!this.parent||this.b_q!=this.parent.b_q)){var b_r='$'+this.b_q;this.set(window[b_r]);window[b_r]=b_h;}};b_o.b_s=function(b_t,b_u,b_v,b_w){return((b_w==b_g|| !b_w)&&b_t!=b_h?(b_t+(b_v!==''?'_':'')+b_v):(b_w=='same as parent'?b_t:b_u));};var b_x={b_y:b_d,b_z:b_c};b_o.b_A=function(){(this.b_B=='inherit'?(this.parent||b_x).b_y:this.b_B)!=this.b_y&&this.set({b_y:!this.b_y});};b_o.b_C=function(){(this.b_D=='inherit'?(this.parent||b_x).b_z:this.b_D)!=this.b_z&&this.set({b_z:!this.b_z});};b_o.b_E=function(b_F,b_G,b_H){var b_I='show'+b_m.capFirstChar(b_F);this.getProvider(b_I)?this.callInherited(b_I)(b_G):setTimeout(function(){var b_J=b_H();
(b_G.callback||(b_J?b_G.yesHandler:b_G.noHandler)||function(){})(b_J)},0);};b_o.confirm=function(b_G){this.b_E('confirm',b_G,function(){return confirm(b_G.message)});};b_o.showInform=b_o.showConfirm=b_h;b_o.inform=function(b_G){this.b_E('inform',b_G,function(){alert(b_G.message);return b_c});};b_o.localize=function(b_K,b_L,b_M){var b_N,b_O=this;while(!(b_N=b_O.b_P?b_O.b_P[b_K]:b_h)&&(b_O=b_O.parent));return(typeof b_N==b_f?b_N.call(this,b_L):b_m.substituteInto(b_N,b_L,b_M||'{KEY}'));};b_o.buildHtml=function(b_Q){var b_R=this,b_S=b_R.b_S;if(b_S!=b_h){var b_T=b_R.b_U||b_R.getNode('shell')||b_R.getNode();if(b_S===b_c){b_S=b_R.b_S=Uize.Template&&b_T?{process:Uize.Template.compile((b_i.find({root:b_T,tagName:'SCRIPT',type:'text/jst'})[0]||b_T).innerHTML,{openerToken:'[%',closerToken:'%]'})}:b_h;if(!b_S)return;}b_R.b_q||b_R.set({b_q:b_R.instanceId});var b_V=b_m.copyInto({pathToResources:b_R.Class.pathToResources,blankGif:b_m.getBlankImageUrl()},b_Q||b_R.get()),b_W=typeof b_S;b_i.injectHtml(b_T||document.body,
b_W!=b_e&&typeof b_S.process==b_f?b_S.process.call(b_R,b_V):b_m.substituteInto(b_W==b_f?b_R.b_S(b_V):b_S,b_V),b_R.b_X||(b_T?'inner replace':'inner bottom'));b_R.b_Y=b_b;b_R.set({b_Z:b_c});}};b_o.wired=function(){return this.isWired};function b_0(b_1,b_2){b_o[b_1+'Node'+b_2]=new Function('arguments.length'+'?(arguments[0]=this.getNode(arguments[0]))'+':(arguments[arguments.length++]=this.getNode());'+'return Uize.Node.'+b_1+b_2+'.apply(0,arguments)');}b_o.getNode=function(b_3){if(b_3==b_b){if(b_3===b_b)return b_b;b_3='';}var b_R=this;if(b_R.b_4&&typeof b_3==b_e){var b_5=b_R.b_4[b_3];if(b_5!==b_h)b_3=b_5;}if(typeof b_3==b_e){return b_l(b_3,b_R.b_q,b_R.b_Y||(b_R.b_Y={}));}else if(b_k(b_3)){return b_3;}else{var b_6=b_b;b_j(b_3,function(b_7){(b_6||(b_6=[])).push(b_7)},b_R.b_q,b_R.b_Y||(b_R.b_Y={}));return b_6;}};b_0('get','Style');b_0('get','Value');b_o.flushNodeCache=function(b_8){if(this.b_Y)b_8==b_h?(this.b_Y=b_b):delete this.b_Y[b_8];};b_o.globalizeNode=function(b_9){var b_R=this,b_ba=document.body;b_j(
b_R.getNode(b_9),function(b_7){if(b_7.parentNode!=b_ba){(b_R.b_bb||(b_R.b_bb=[])).push(b_7);b_i.setStyle(b_7,{position:'absolute',left:-10000,top:-10000});b_ba.appendChild(b_7);}});};b_0('display','');b_0('inject','Html');b_o.removeNode=function(b_9){b_i.remove(this.getNode(b_9));this.flushNodeCache(b_9);};b_0('set','Properties');b_0('set','Opacity');b_0('set','Style');b_0('set','ClipRect');b_0('set','InnerHtml');b_0('set','Value');b_0('show','');b_o.wireNodeEvent=b_o.wireNodeEvents=b_o.wireNode=function(b_9,b_bc,b_bd){arguments.length==3?b_i.wire(this.getNode(b_9),b_bc,b_bd,this.instanceId):b_i.wire(this.getNode(b_9),b_bc,this.instanceId);};b_o.unwireNodeEvent=b_o.unwireNode=function(b_9,b_bc,b_bd){if(b_9!==b_h)b_9=this.getNode(b_9);arguments.length==2&&typeof b_bc=='object'&&b_bc&& !b_bc.virtualDomEvent?b_i.unwire(b_9,b_bc,this.instanceId):b_i.unwire(b_9,b_bc,b_bd,this.instanceId);};b_o.unwireNodeEventsByMatch=function(b_9,b_be){this.unwireNode(b_9,(b_be||(b_be={})).eventName,b_be.handler);};
b_o.addChild=function(b_v,b_bf,b_bg){if(!b_bg)b_bg={};var b_R=this,b_q=b_R.b_q,b_bh=b_m.isInstance(b_bf)?b_bf:b_b,b_u='idPrefix'in b_bg?b_bg.idPrefix:b_bg.node,b_bi=b_bg.idPrefixConstruction;b_bg.parent=b_R;if(b_v==b_h)b_v=b_bg.name;if(b_bh){if(b_v==b_h)b_v=b_bh.b_bj;if(b_u==b_h)b_u=b_bh.b_q;if(!b_bi)b_bi=b_bh.b_w;}if(!b_bi)b_bi=b_u==b_h?b_g:'explicit';b_bg.idPrefixConstruction=b_bi;b_bg.idPrefix=b_R.b_s(b_q,b_u,b_v,b_bi);b_bg.name=b_v;b_bh&&b_bh.set(b_bg);return b_R.b_n[b_v]=b_bh||new b_bf(b_bg);};b_o.removeChild=function(b_bk){var b_n=this.b_n,b_v=typeof b_bk==b_e||b_m.isNumber(b_bk)?b_bk:b_bk.b_bj,b_bh=b_n[b_v];if(b_bh){b_bh.unwireUi();delete b_bh.parent;delete b_n[b_v];}};b_o.getProvider=function(b_bl){var b_bm=this,b_bn;while(((b_bn=b_bm.get(b_bl))==='inherit'||b_bn===b_h)&&(b_bm=b_bm.parent));return b_bm;};b_o.getInherited=function(b_bl){var b_bo=this.getProvider(b_bl);return b_bo?b_bo.get(b_bl):b_h;};b_o.setInherited=function(b_bg){var b_bo;for(var b_bp in b_bg){if(b_bo=this.getProvider(b_bp))
b_bo.set(b_bp,b_bg[b_bp]);}};b_o.callInherited=function(b_bl){var b_R=this;return(function(){var b_bo=b_R.getProvider(b_bl),b_6;if(b_bo){var b_bq=b_bo.get(b_bl);if(typeof b_bq==b_f)b_6=b_bq.apply(b_bo,arguments);}return b_6;});};b_o.kill=function(){b_m.callOn(this.b_n,'kill');b_a.prototype.kill.call(this);};b_o.insertOrWireUi=function(){this.b_Z?this.wireUi():this.insertUi();};b_o.insertUi=function(){this.buildHtml();this.wireUi();};b_o.removeUi=function(){this.unwireUi();this.removeNode();b_i.remove(this.b_bb);this.b_bb=b_h;b_m.callOn(this.b_n,'removeUi');this.set({b_Z:b_d});};b_o.updateUi=function(){};b_o.wireUi=function(){if(!this.isWired){this.b_p();this.set({wired:b_c});var b_n=this.b_n;for(var b_v in b_n)b_n[b_v].insertOrWireUi();this.updateUi();}};b_o.unwireUi=function(){if(this.isWired){this.b_Y=b_b;this.unwireNode();b_m.callOn(this.b_n,'unwireUi');this.set({wired:b_d});}};b_m.getBlankImageUrl=function(){return Uize.pathToResources+'Uize/blank.gif';};b_m.spawn=function(b_bg,b_br){var b_R=this,b_bs=[],
b_bm,b_bt=b_br&&b_br.b_q?b_br.b_q+'_':'',b_bu=b_bt.length;b_j(Uize.Node.find(b_bg.idPrefix),function(b_7){b_bg.idPrefix=b_7;b_br?(b_bm=b_br.addChild(b_7.id.slice(0,b_bu)==b_bt?b_7.id.slice(b_bu):'generatedChildName'+b_m.getGuid(),b_R,b_bg)):(b_bm=new b_R(b_bg)).insertOrWireUi();b_bs.push(b_bm);});return b_bs;};b_m.registerProperties({b_Z:{name:'built',value:b_c},b_B:{name:'busy',onChange:b_o.b_A,value:'inherit'},b_y:{name:'busyInherited',onChange:function(){b_m.callOn(this.b_n,b_o.b_A)},value:b_d},b_U:'container',b_D:{name:'enabled',onChange:b_o.b_C,value:'inherit'},b_z:{name:'enabledInherited',onChange:function(){b_m.callOn(this.b_n,b_o.b_C)},value:b_c},b_S:'html',b_q:{name:'idPrefix|node',conformer:function(b_q){return b_k(b_q)?(b_q.id||(b_q.id=Uize.getGuid())):b_q;},onChange:function(){var b_R=this,b_q=b_R.b_q;b_R.b_Y=b_b;if(b_q!=b_h){b_R.b_p();var b_n=b_R.b_n,b_bh;for(var b_v in b_n)(b_bh=b_n[b_v]).set({b_q:b_R.b_s(b_q,b_bh.b_q,b_v,b_bh.b_w)});if(b_R.isWired){b_R.set({wired:b_d});b_R.wireUi();}}}},
b_w:'idPrefixConstruction',b_X:'insertionMode',b_P:'localized',b_bj:'name',b_4:'nodeMap',isWired:{name:'wired',value:b_d}});function b_bv(b_bw,b_bx){b_i.wire(window,b_bw,function(){b_m.fire(b_bx)});}b_bv('load','Document Loaded');b_bv('unload','Document Unload');b_bv('resize','Window Resized');b_bv('scroll','Window Scrolled');return b_m;}});