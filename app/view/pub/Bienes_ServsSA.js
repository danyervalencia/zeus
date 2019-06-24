Ext.define("Siace.view.pub.Bienes_ServsSA",{extend:"Siace.view.WindowSearch",alias:"widget.pub_bssa",width:750,items:[{xtype:"tabpanel",itemId:"tabSearch",height:"100%",plain:true,items:[
{xtype:"panel",itemId:"tab01",height:"100%",layout:{type:"fit"},title:"Catálogo",items:[{xtype:"comp_grid",itemId:"grdPBS",height:320,columns:[{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",flex:1},{dataIndex:"unimed_nombre",text:"U.M.",tooltip:" Unidad de Medida ",width:100}]}],
 dockedItems:[{xtype:"comp_tooltop",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comppub_bsc_codeab"},{xtype:"comppub_bsf_codeab"},{xtype:"comp_txttop",itemId:"bs_nombre",enableKeyEvents:true,fieldLabel:"&nbsp;Descripción",maxLength:15,width:250}]},{xtype:"comp_pag",itemId:"pagPBS"}]
},
{xtype:"panel",itemId:"tab02",bodyPadding:6,defaults:{labelWidth:75},height:"100%",layout:"vbox",title:"Detalle",items:[{xtype:"hiddenfield",itemId:"bs_key"},
	{xtype:'panel',itemId:'panPBS',border:false,width:'100%',items:[
	{xtype:'comp_tooltop',defaults:{labelWidth:78},layout:'vbox',items:[{xtype:'comp_dato',itemId:'bs_codigo',fieldLabel:"Código"},{xtype:'comp_dato',itemId:'bs_nombre',fieldLabel:"Descripción"},{xtype:'comp_dato',itemId:"unimed_nombre",fieldLabel:"U. Medida"}]}]},
	{xtype:"comp_txtarea",itemId:"detalle",fieldLabel:"Especificación",rows:18,width:"100%"},{xtype:"compbud_espedet_codename",editable:true},
	{xtype:"fieldcontainer",fieldLabel:"&nbsp",labelSeparator:"",labelWidth:75,layout:"hbox",items:[{xtype:"comp_currtop",itemId:"cantid",fieldLabel:"&nbsp;Cantidad",maxLength:15,numberDecimal:3,width:100},{xtype:"comp_currtop",itemId:"preuni",fieldLabel:"&nbsp;P.Unitario",maxLength:15,numberDecimal:6,width:120},{xtype:"comp_currtop",itemId:"dscto",disabled:true,fieldLabel:"&nbsp;Descuento",maxLength:15,width:100},{xtype:"comp_currtop",itemId:"pretot",fieldLabel:"&nbsp;SubTotal",maxLength:15,width:100}]}
]}]}],

__bst_id:"",setBst_id:function(pcBst_id){this.__bst_id=pcBst_id;},getBst_id:function(){return this.__bst_id;},
__e:"1",setE:function(pcE){this.__e=pcE;},getE:function(){return this.__e;},
});