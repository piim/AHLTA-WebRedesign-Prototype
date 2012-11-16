/*
	UIZE JAVASCRIPT FRAMEWORK 2010-01-24

	http://www.uize.com/reference/Uize.Widget.Page.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Page',builder:function(c_a){var c_b=true,c_c=false,c_d;var c_e=c_a.subclass(),c_f=c_e.prototype;c_f.c_g=function(c_h,c_i,c_j){var c_k=this;c_k.useDialog({component:c_k.c_l.component,widgetClassName:c_k.c_l.widgetClassName||'Uize.Widget.Dialog.Confirm',widgetProperties:{name:'confirmDialog',title:c_j.title||'',message:(c_j.message+'').replace(/\n/g,'<br/>'),mode:c_h,state:c_j.state||c_i,okText:c_j.okText||null,cancelText:c_j.cancelText||null},submitHandler:function(c_m){var c_n=c_j.callback||(c_m?c_j.yesHandler:c_j.noHandler);c_n&&c_n(c_m);}});};c_f.useDialog=function(c_j){var c_k=this,c_o=c_j.widgetProperties,c_p=c_o.parent||c_k,c_q=c_o.name,c_r=c_p.children[c_q],c_s=c_j.component,c_t;if(c_s){var c_u=c_o.idPrefix||(c_p.get('idPrefix')+'_'+c_q);c_t={name:c_s.name,rootNodeId:c_u,params:c_e.copyInto({idPrefix:c_u},c_s.params)};}function c_v(c_w){var c_x=c_k.get('productType');c_r.fire({name:'Track Event',extra:c_w+(c_x?(' ('+c_x+')'):''),bubble:c_b});}function c_y(c_z){setTimeout(
function(){function c_A(c_B,c_C){var c_n=c_j[c_B];c_n&&c_n.apply(0,c_C);}function c_D(c_E){var c_C=[c_E];c_A(c_E.name.toLowerCase()+'Handler',c_C);c_A('dismissHandler',c_C);}c_r.unwire(c_r.eventHandlersForUseDialog||{});c_r.eventHandlersForUseDialog={'Submission Complete':function(c_E){c_A('submitHandler',[c_E.result,c_E])},Close:c_D,Cancel:c_D};c_r.wire(c_r.eventHandlersForUseDialog);c_r.set(c_o);c_r.set({shown:c_b});c_v(c_z);},0);}if(c_r&&(c_r.componentProfile==c_t||Uize.Data.identical(c_r.componentProfile,c_t))){c_y('subsequent');}else{var c_F=c_t&& !!c_r;if(c_F){c_r.removeUi();c_p.removeChild(c_q);}function c_G(){var c_H=c_j.widgetClassName;Uize.module({required:c_H,builder:function(){c_r=c_p.addChild(c_q,eval(c_H),c_o);c_r.componentProfile=c_t;c_r.wire(c_j.widgetEventHandlers);c_r.insertOrWireUi();c_y(c_F?'refetched':'initial');}});}c_t?c_k.loadComponentIntoNode({rootNodeId:c_t.rootNodeId,componentParams:c_e.copyInto({cp:c_t.name},c_t.params),injectMode:'inner bottom',alwaysReplace:c_c,callback:c_G})
:c_G();}};c_f.wireUi=function(){var c_k=this;if(!c_k.isWired){var c_I=c_k.get('idPrefix');function c_J(c_K,c_L){var c_M,c_N;for(var c_O in c_L)(typeof(c_M=c_K[c_O])=='object'&&typeof(c_N=c_L[c_O])=='object'&&c_M&&c_N)?c_J(c_M,c_N):(c_K[c_O]=c_L[c_O]);}var c_P={},c_Q=c_c,c_R='$'+c_I+'_',c_S=c_R.length,c_T;for(var c_O in window){if(c_O.charAt(0)=='$'&&c_O.substr(0,c_S)==c_R&&typeof(c_T=window[c_O])=='object'&&c_T&&c_T.widgetClass){c_Q=c_b;for(var c_U= -1,c_V=c_P,c_W=c_O.substr(c_S).split('_'),c_X=c_W.length;++c_U<c_X;){var c_Y=c_W[c_U],c_Z=c_V[c_Y];if(c_U<c_X-1){if(!c_Z)c_Z=c_V[c_Y]={};c_V=c_Z.children||(c_Z.children={});}else{c_Z?c_J(c_Z,c_T):(c_V[c_Y]=c_T);window[c_O]=c_d;}}}}if(c_Q){function c_0(c_1,c_2){function c_3(c_4,c_5,c_6){var c_7=c_6.children,c_8=c_1(c_4,c_5,c_6);c_7&&c_9(c_8,c_7);c_2&&c_2(c_8);}function c_9(c_4,c_ba){for(var c_5 in c_ba)c_3(c_4,c_5,c_ba[c_5]);}c_9(c_k,c_P);}var c_bb={},c_bc=[];c_0(function(c_4,c_5,c_6){var c_bd=c_6.widgetClass;if(c_bd&& !c_bb[c_bd]){c_bb[c_bd]=1;c_bc.push(c_bd);}});
Uize.module({required:c_bc,builder:function(){c_0(function(c_4,c_5,c_6){var c_8=c_4.children[c_5],c_bd=c_6.widgetClass||Uize.Widget;delete c_6.widgetClass;delete c_6.children;c_8?c_8.set(c_6):(c_8=c_5.charCodeAt(0)==36&&c_5.charCodeAt(1)==36?eval(c_bd).spawn(c_6,c_4):c_4.addChild(c_5,eval(c_bd),c_6));return c_8;},c_k.isWired?function(c_8){c_e.callOn(c_8,'insertOrWireUi')}:0);}});}c_a.prototype.wireUi.call(c_k);}};var c_be={yes:1,on:1,1:1,'true':1};c_e.launchPopup=c_f.launchPopup=function(c_j){if(!c_j)c_j={};if(c_j.width==c_d)c_j.width=850;if(c_j.height==c_d)c_j.height=600;var c_bf=window.screen;if(c_j.left==c_d)c_j.left=Math.max((c_bf.width-c_j.width-10)>>1,0);if(c_j.top==c_d)c_j.top=Math.max((c_bf.height-c_j.height-40)>>1,0);function c_bg(c_bh){return c_bh+'='+c_j[c_bh];}function c_bi(c_bh,c_bj){return(c_bh+'='+(c_be[c_j[c_bh]==c_d?c_bj:c_j[c_bh]+'']?'yes':'no'));}var c_bk=window.open(c_j.url||'',c_j.name||'popupWindow',[c_bg('width'),c_bg('height'),c_bg('top'),c_bg('left'),c_bi('toolbar',0),
c_bi('location',0),c_bi('directories',0),c_bi('status',0),c_bi('menubar',0),c_bi('scrollbars',1),c_bi('resizable',1)].join(','));c_bk&&c_bk.focus();return c_bk;};c_e.registerProperties({c_l:{name:'confirmDialog',value:{}}});c_e.set({idPrefix:'page'});c_f.showConfirm=function(c_j){this.c_g('confirm','confirm',c_j);};c_f.showInform=function(c_j){this.c_g('alert','info',c_j);};return c_e;}});