Ext.define("Siace.view.bud.Tareas_FftredSA",{extend:"Siace.view.WinS",alias:"widget.bud_tareaftesa",width:650,items:[{xtype:"form",frame:false,items:[
{xtype:"container",layout:"hbox",margin:"0 0 2 0",items:[{xtype:"compbud_secfunc_code",editable:true},{xtype:"compbud_tarea_codigo"},{xtype:"compbud_fuefin_code",itemId:"fuefin_idx"},{xtype:"comppub_area_nombre",itemId:"area_keyx",editable:true,fieldLabel:"&nbsp;Unidad Orgánica",flex:1,labelAlign:"top"}]},
{xtype:"comp_grid",itemId:"grdBTF",height:320,columns:[{dataIndex:"fftr_code",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:85},{dataIndex:"espedet_nombre",text:"Descripción",flex:1},{dataIndex:"tareafte_saldo",text:"Saldo",align:"right",renderer:fext_FN(2),width:90}]},
{xtype:"comp_pag",itemId:"pagBTF"},
]}],
__yi:"",setYI:function(pcYI){this.__yi=pcYI;},getYI:function(){return this.__yi;},
__ak:"",setAK:function(pcAK){this.__ak=pcAK;},getAK:function(){return this.__ak;},
__mei:"",setMEI:function(pcMEI){this.__mei=pcMEI;},getMEI:function(){return this.__mei;},
__tk:"",setTK:function(pcTK){this.__tk=pcTK;},getTK:function(){return this.__tk;},
__ffi:"",setFFI:function(pcFFI){this.__ffi=pcFFI;},getFFI:function(){return this.__ffi;},
__fA:false,setFA:function(pcFA){this.__fA=pcFA;},getFA:function(){return this.__fA;},
__fT:false,setFT:function(pcFT){this.__fT=pcFT;},getFT:function(){return this.__fT;}
});