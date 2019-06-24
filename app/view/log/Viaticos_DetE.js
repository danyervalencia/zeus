Ext.define("Siace.view.log.Viaticos_DetE",{extend:"Siace.view.WinE",alias:"widget.log_viatdete",layout:{type:"vbox"},width:600,items:[
{xtype:"panel",itemId:"panLV",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 4",defaults:{width:"100%"},layout:{type:"vbox"},items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"viat_documento",fieldLabel:"Documento",labelWidth:65,width:230},{xtype:"comp_datofecha",itemId:"viat_fecha",fieldLabel:"Fecha",labelWidth:40}]},{xtype:"comp_dato",itemId:"indiv_codename",fieldLabel:"Comisionado"}]}
]}]},
{xtype:"panel",itemId:"panLVD",margin:"0 0 0 0",width:"100%",items:[{xtype:"form",bodyPadding:"6 6 6 6",border:false,defaults:{labelWidth:65},items:[{xtype:"hiddenfield",itemId:"viat_key",name:"viat_key"},
	{xtype:"comp_cbo",itemId:"bs_key",valueField:"bs_key",displayField:"bs_nombre",fieldLabel:"Servicio",anchor:"100%"},
	{xtype:"comp_cbo",itemId:"espedet_id",valueField:"espedet_id",displayField:"espedet_codename",fieldLabel:"Clasificador",anchor:"100%",tpl:"<tpl for='.''><div class='x-boundlist-item' data-qtip=' Saldo Presupuestal: {[fjsFormatNumeric(values.tareafte_monto_saldo,2)]} '>{espedet_codename}</div></tpl>"},
	{xtype:"comp_curr",itemId:"viatdet_pretot",name:"viatdet_pretot",fieldLabel:"Importe",maxLength:15,width:170}
]}]}],
__tk:"",setTK:function(pcTK){this.__tk=pcTK;},getTK:function(){return this.__tk;},
__edi:0,setEDI:function(pcEDI){this.__edi=pcEDI;},getEDI:function(){return this.__edi;},
__ffi:0,setFFI:function(pcFFI){this.__ffi=pcFFI;},getFFI:function(){return this.__ffi;},
__tri:0,setTRI:function(pcTRI){this.__tri=pcTRI;},getTRI:function(){return this.__tri;},
__bsk:"",setBSK:function(pcBSK){this.__bsk=pcBSK;},getBSK:function(){return this.__bsk;}
});