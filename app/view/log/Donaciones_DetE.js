Ext.define("Siace.view.log.Donaciones_DetE",{extend:"Siace.view.WindowEdit",alias:"widget.log_donadete",layout:{type:"vbox"},width:600,items:[
{xtype:"panel",itemId:"panLD",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 4",defaults:{width:"100%"},layout:{type:"vbox"},items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"dona_documento",fieldLabel:"Documento",labelWidth:65,width:230},{xtype:"comp_datofecha",name:"dona_fecha",fieldLabel:"Fecha",labelWidth:40}]},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor"}]}
]}]},
{xtype:"panel",itemId:"panLDD",margin:"0 0 0 0",width:"100%",items:[
{xtype:"form",bodyPadding:"6 6 6 6",border:false,defaults:{labelWidth:40},items:[{xtype:"hiddenfield",itemId:"dona_key",name:"dona_key"},
	{xtype:"fieldcontainer",fieldLabel:"Bien",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"bs_key",name:"bs_key"},{xtype:"hiddenfield",itemId:"BS_CODIGO"},{xtype:"comp_txttop",itemId:"bs_codigo",disabled:true,maxLength:15,submitValue:false,width:110},{xtype:"comp_btn_imgsearch",itemId:"btnBs_search"},{xtype:"displayfield",itemId:"bs_nombre",fieldCls:"df00101"}]},
	{xtype:"fieldcontainer",fieldLabel:"&nbsp",labelSeparator:"",layout:"hbox",items:[{xtype:"comp_currtop",itemId:"donadet_cantid",name:"donadet_cantid",fieldLabel:"&nbsp;Cantidad",maxLength:15,numberDecimal:3,width:110},{xtype:"comp_currtop",itemId:"donadet_preuni",name:"donadet_preuni",fieldLabel:"&nbsp;P.Unitario",maxLength:18,numberDecimal:8,width:120},{xtype:"comp_currtop",itemId:"dscto",disabled:true,fieldLabel:"&nbsp;Descuento",width:100},{xtype:"comp_currtop",itemId:"donadet_pretot",name:"donadet_pretot",fieldLabel:"&nbsp;SubTotal",maxLength:15,width:100}]},
	{xtype:"comp_txtarea",itemId:"donadet_detalle",name:"donadet_detalle",fieldLabel:"Glosa",anchor:"100%"}
]}]}],
__compPBSS:null,setCompPBSS:function(poComp){this.__compPBSS=poComp;},getCompPBSS:function(){return this.__compPBSS;},
});