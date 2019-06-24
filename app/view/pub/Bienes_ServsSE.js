Ext.define("Siace.view.pub.Bienes_ServsSE",{extend:"Siace.view.WinS",alias:"widget.pub_bsse",width:750,items:[{xtype:"tabpanel",itemId:"tab",height:"100%",plain:true,items:[
{xtype:"panel",itemId:"tab01",height:"100%",layout:{type:"fit"},title:"Catálogo",items:[{xtype:"comp_grid",itemId:"grdPBS",height:320,columns:[{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",flex:1},{dataIndex:"unimed_nombre",text:"U.M.",tooltip:" Unidad de Medida ",width:100}]}],
 dockedItems:[{xtype:"comp_tooltop",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comppub_bsc_codeab"},{xtype:"comppub_bsf_codeab"},{xtype:"comp_txttop",itemId:"bs_nombre",enableKeyEvents:true,fieldLabel:"&nbsp;Descripción",maxLength:15,width:250}]},{xtype:"comp_pag",itemId:"pagPBS"}]
},
{xtype:"panel",itemId:"tab02",bodyPadding:8,defaults:{labelWidth:75},disabled:true,height:"100%",layout:"vbox",title:"Detalle",items:[{xtype:"hiddenfield",itemId:"item"},{xtype:"hiddenfield",itemId:"bs_key"},
	{xtype:"comp_dato",itemId:"bs_codigo",fieldLabel:"Código",margin:"-4 4 0 0"},{xtype:"comp_dato",itemId:"bs_nombre",fieldLabel:"Descripción",margin:"-8 4 0 0"},{xtype:"comp_dato",itemId:"unimed_nombre",fieldLabel:"U. Medida",margin:"-8 4 4 0"},
	{xtype:"comp_txtarea",itemId:"detalle",fieldLabel:"Especificación",height:162,width:"100%"},{xtype:"comp_cbo",itemId:"espedet_id",valueField:"espedet_id",displayField:"espedet_codename",fieldLabel:"Clasificador",width:"100%",tpl:"<tpl for='.''><div class='x-boundlist-item' data-qtip=' Saldo Presupuestal: {[fjsFormatNumeric(values.tareafte_monto_saldo,2)]} '>{espedet_codename}</div></tpl>"},
	{xtype:"fieldcontainer",fieldLabel:"&nbsp",labelSeparator:"",labelWidth:75,layout:"hbox",items:[{xtype:"comp_currtop",itemId:"cantid",fieldLabel:"&nbsp;Cantidad",maxLength:15,numberDecimal:3,width:100},{xtype:"comp_currtop",itemId:"preuni",fieldLabel:"&nbsp;P.Unitario",maxLength:15,numberDecimal:6,width:120},{xtype:"comp_currtop",itemId:"dscto",disabled:true,fieldLabel:"&nbsp;Descuento",maxLength:15,width:100},{xtype:"comp_currtop",itemId:"pretot",fieldLabel:"&nbsp;SubTotal",maxLength:15,width:100}]}
]}]}],
__bst:"",setBst:function(pcBst){this.__bst=pcBst;},getBst:function(){return this.__bst;},
__mei:"",setMEI:function(pcMEI){this.__mei=pcMEI;},getMEI:function(){return this.__mei;},
__tk:"",setTK:function(pcTK){this.__tk=pcTK;},getTK:function(){return this.__tk;},
__ffi:0,setFFI:function(pcFFI){this.__ffi=pcFFI;},getFFI:function(){return this.__ffi;},
__tri:0,setTRI:function(pcTRI){this.__tri=pcTRI;},getTRI:function(){return this.__tri;},
__edt:"",setEDT:function(pcEDT){this.__edt=pcEDT;},getEDT:function(){return this.__edt;},
__type:0,setType:function(pcT){this.__type=pcT;},getType:function(){return this.__type;}
});