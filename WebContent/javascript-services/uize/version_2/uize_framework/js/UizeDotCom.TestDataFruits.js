Uize.module({name:'UizeDotCom.TestDataFruits',required:'Uize.Data',builder:function(){var _a,_b=function(_c){var _d=[{name:'Apples',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228935673692621070&max_dim=500',skinColor:'#40CA3B',fleshColor:'#D8FF9D',calories:52,totalFat:.17,saturatedFat:.028,cholesterol:0,sodium:1,totalCarbs:13.81,dietaryFiber:2.4,sugars:10.39,protein:.26,calcium:6,potassium:107},{name:'Avocados',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228927352143582163&max_dim=500',skinColor:'#487F14',fleshColor:'#CAFF62',calories:160,totalFat:14.66,saturatedFat:2.126,cholesterol:0,sodium:7,totalCarbs:8.53,dietaryFiber:6.7,sugars:.66,protein:2,calcium:12,potassium:485},{name:'Bananas',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228979295817353226&max_dim=500',skinColor:'#FFE534',fleshColor:'#FFFF72',calories:89,totalFat:.33,saturatedFat:.112,cholesterol:0,sodium:1,totalCarbs:22.84,dietaryFiber:2.6,
sugars:12.23,protein:1.09,calcium:5,potassium:358},{name:'Dates',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228897711281453018&max_dim=500',skinColor:'#553306',fleshColor:'#8E4400',calories:277,totalFat:.15,saturatedFat:0,cholesterol:0,sodium:1,totalCarbs:74.97,dietaryFiber:6.7,sugars:66.47,protein:1.81,calcium:64,potassium:696},{name:'Grapefruits',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228367106784827894&max_dim=500',skinColor:'#FFC551',fleshColor:'#FF206F',calories:42,totalFat:.14,saturatedFat:.021,cholesterol:0,sodium:0,totalCarbs:10.66,dietaryFiber:1.6,sugars:6.89,protein:.77,calcium:22,potassium:135},{name:'Grapes',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228786882284124549&max_dim=500',skinColor:'#750047',fleshColor:'#A6DF9C',calories:67,totalFat:.35,saturatedFat:.114,cholesterol:0,sodium:2,totalCarbs:17.15,dietaryFiber:.9,sugars:16.25,protein:.63,calcium:14,potassium:191},{name:'Mangos',
image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228428092943531202&max_dim=500',skinColor:'#DD2600',fleshColor:'#FFAF09',calories:65,totalFat:.27,saturatedFat:.066,cholesterol:0,sodium:2,totalCarbs:17,dietaryFiber:1.8,sugars:14.8,protein:.51,calcium:10,potassium:156},{name:'Oranges',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228870165395519299&max_dim=500',skinColor:'#FF5A00',fleshColor:'#FFA800',calories:49,totalFat:.15,saturatedFat:.017,cholesterol:0,sodium:1,totalCarbs:12.54,dietaryFiber:2.2,sugars:8.5,protein:.91,calcium:43,potassium:166},{name:'Pears',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228197023342145752&max_dim=500',skinColor:'#BCF000',fleshColor:'#EAF57A',calories:58,totalFat:.12,saturatedFat:.006,cholesterol:0,sodium:1,totalCarbs:15.46,dietaryFiber:3.1,sugars:9.8,protein:.38,calcium:9,potassium:119},{name:'Plums',
image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228984929702082003&max_dim=500',skinColor:'#3A0041',fleshColor:'#6F003D',calories:46,totalFat:.28,saturatedFat:.017,cholesterol:0,sodium:0,totalCarbs:11.42,dietaryFiber:1.4,sugars:9.92,protein:.7,calcium:6,potassium:157},{name:'Raspberries',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228107715373535116&max_dim=500',skinColor:'#BC162F',fleshColor:'#E71D3A',calories:52,totalFat:.65,saturatedFat:.019,cholesterol:0,sodium:1,totalCarbs:11.94,dietaryFiber:6.5,sugars:4.42,protein:1.2,calcium:25,potassium:151},{name:'Strawberries',image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228277330698553901&max_dim=500',skinColor:'#D00000',fleshColor:'#E53520',calories:32,totalFat:.3,saturatedFat:.015,cholesterol:0,sodium:1,totalCarbs:7.68,dietaryFiber:2,sugars:4.89,protein:.67,calcium:16,potassium:153},{name:'Watermelons',
image:'http://rlv.zcache.com/isapi/designall.dll?action=realview&rvtype=pre&pid=228224616887582204&max_dim=500',skinColor:'#2B630C',fleshColor:'#EC4434',calories:30,totalFat:.15,saturatedFat:.016,cholesterol:0,sodium:1,totalCarbs:7.55,dietaryFiber:.4,sugars:6.2,protein:.61,calcium:7,potassium:112}];return _c?_d:(_a=_d);};var _e={},_f={name:{_g:'Name'},skinColor:{_g:'Skin Color'},fleshColor:{_g:'Flesh Color'},calories:{_g:'Calories',_h:'kcal',_i:'#f00'},totalFat:{_g:'Total Fat',_h:'g',_i:'#e6d985'},saturatedFat:{_g:'Saturated Fat',_h:'g',_i:'#ea7934'},cholesterol:{_g:'Cholesterol',_h:'mg',_i:'#ff4200'},sodium:{_g:'Sodium',_h:'mg',_i:'#da79e3'},totalCarbs:{_g:'Total Carbs',_h:'g',_i:'#5767ff'},dietaryFiber:{_g:'Dietary Fiber',_h:'g',_i:'#ad5703'},sugars:{_g:'Sugars',_h:'g',_i:'#fffaea'},protein:{_g:'Protein',_h:'g',_i:'#971601'},calcium:{_g:'Calcium',_h:'mg',_i:'#fff'},potassium:{_g:'Potassium',_h:'mg',_i:'#6292be'}};_b.getNutritionProperties=function(){var _j=[],_k=_b()[0];for(var _l in _k)
_l.search(/(^image|^name|color)$/i)<0&&_j.push(_l);return _j;};_b.getPropertyDisplayName=function(_l){return(_f[_l]||_e)._g;};_b.getPropertyUnit=function(_l){return(_f[_l]||_e)._h;};_b.getPropertyColor=function(_l){return(_f[_l]||_e)._i;};_b.getValueBoundsForProperty=function(_l){var _m=_b(),_n=Uize.Data.getColumn(_m,_l),_o=Uize.Data.min(_n),_p=Uize.Data.max(_n);return{minValue:_o,maxValue:_p+(_p==_o?1:0)};};return _b;}});