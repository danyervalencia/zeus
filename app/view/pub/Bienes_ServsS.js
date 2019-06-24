Ext.define("Siace.view.pub.Bienes_ServsS",{extend:"Siace.view.WindowSearch",alias:"widget.pub_bss",width:750,items:[{xtype:"tabpanel",itemId:"tab",height:"100%",plain:true,items:[
{xtype:"panel",itemId:"tab01",height:"100%",layout:{type:"fit"},title:"Catálogo",items:[{xtype:"comp_grid",itemId:"grdPBS",height:320,columns:[{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",flex:1},{dataIndex:"unimed_nombre",text:"U.M.",tooltip:" Unidad de Medida ",width:100}]}],
 dockedItems:[{xtype:"comp_tooltop",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comppub_bsc_codeab"},{xtype:"comppub_bsf_codeab"},{xtype:"comp_txttop",itemId:"bs_nombre",enableKeyEvents:true,fieldLabel:"&nbsp;Descripción",maxLength:15,width:250}]},{xtype:"comp_pag",itemId:"pagPBS"}]
},
{xtype:"panel",itemId:"tab02",bodyPadding:8,defaults:{labelWidth:75},disabled:true,height:"100%",layout:"vbox",title:"Detalle",items:[{xtype:"hiddenfield",itemId:"bs_key"},
	{xtype:"displayfield",itemId:"bs_codigo",fieldLabel:"Código",fieldCls:"df00104",labelClsExtra:"lbl00101",margin:"-4 8 0 0"},{xtype:"displayfield",itemId:"bs_nombre",fieldLabel:"Descripción",fieldCls:"df00104",labelClsExtra:"lbl00101",margin:"-4 8 0 0"},{xtype:"displayfield",itemId:"unimed_nombre",fieldLabel:"U. Medida",fieldCls:"df00104",labelClsExtra:"lbl00101",margin:"-3 8 4 0"},
	{xtype:"comp_txtarea",itemId:"detalle",fieldLabel:"Especificación",height:162,width:"100%"},{xtype:"comp_cbo",itemId:"espedet_id",valueField:"espedet_id",displayField:"espedet_codename",fieldLabel:"Clasificador",width:"100%",tpl:"<tpl for='.''><div class='x-boundlist-item' data-qtip=' Saldo Presupuestal: {[fjsFormatNumeric(values.tareafte_monto_saldo,2)]} '>{espedet_codename}</div></tpl>"},
	{xtype:"fieldcontainer",fieldLabel:"&nbsp",labelSeparator:"",labelWidth:75,layout:"hbox",items:[{xtype:"comp_currtop",itemId:"cantid",fieldLabel:"&nbsp;Cantidad",maxLength:15,numberDecimal:3,width:100},{xtype:"comp_currtop",itemId:"preuni",fieldLabel:"&nbsp;P.Unitario",maxLength:15,numberDecimal:6,width:120},{xtype:"comp_currtop",itemId:"dscto",disabled:true,fieldLabel:"&nbsp;Descuento",maxLength:15,width:100},{xtype:"comp_currtop",itemId:"pretot",fieldLabel:"&nbsp;SubTotal",maxLength:15,width:100}]}
]}]}],
__bst_id:"",setBst_id:function(pcBst_id){this.__bst_id=pcBst_id;},getBst_id:function(){return this.__bst_id;},
__tk:"",setTK:function(pcTK){this.__tk=pcTK;},getTK:function(){return this.__tk;},
__tc:"",setTC:function(pcTC){this.__tc=pcTC;},getTC:function(){return this.__tc;},
__tgc:"",setTGC:function(pcTGC){this.__tgc=pcTGC;},getTGC:function(){return this.__tgc;},
__ffi:0,setFFI:function(pcFFI){this.__ffi=pcFFI;},getFFI:function(){return this.__ffi;},
__fftrc:0,setFFTRC:function(pcFFTRC){this.__fftrc=pcFFTRC;},getFFTRC:function(){return this.__fftrc;},
__tri:0,setTRI:function(pcTRI){this.__tri=pcTRI;},getTRI:function(){return this.__tri;},
__edt:"",setEDT:function(pcEDT){this.__edt=pcEDT;},getEDT:function(){return this.__edt;},
__tab02:"0",setTab02:function(pcTab02){this.__tab02=pcTab02;},getTab02:function(){return this.__tab02;}// 0 hidden, 1 visible solo para presupuestal, 5 visible para agregar
});