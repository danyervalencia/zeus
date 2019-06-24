Ext.define("Siace.view.log.OrdenesEG",{extend:"Siace.view.WindowEdit",alias:"widget.log_ordeneg",width:600,items:[
{xtype:"form",border:true,bodyPadding:"4 8 8 8",defaults:{width:"100%"},items:[{xtype:"hiddenfield",itemId:"orden_key",name:"orden_key"},
	{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:68},padding:"0 0 4 0",ui:"footer",width:"100%",items:[
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"orden_documento",fieldLabel:"Documento",labelWidth:68},{xtype:"comp_dato",flex:1},{xtype:"comp_datofecha",name:"orden_fecha",fieldLabel:"Fecha",labelWidth:40,width:120},]},
		{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor"}
	]},
	{xtype:"compbud_tiprecur_codename",itemId:"tiprecur_id",name:"tiprecur_id",editable:true,fieldLabel:"T. Recurso",labelWidth:63,anchor:"100%"},
	{xtype:"comp_txtarea",itemId:"orden_observ",name:"orden_observ",fieldLabel:"Comentario",labelWidth:63,anchor:"100%"}
]}]
});