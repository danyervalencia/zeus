Ext.define("Siace.view.log.Ordenes_NotificacionesE",{extend:"Siace.view.WindowEdit",alias:"widget.log_ordennotife",width:600,items:[
{xtype:"form",border:true,bodyPadding:"4 8 8 8",defaults:{width:"100%"},items:[{xtype:"hiddenfield",itemId:"orden_key",name:"orden_key"},
	{xtype:"toolbar",defaults:{labelWidth:68},layout:"vbox",padding:"0 0 4 0",ui:"footer",width:"100%",items:[
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"orden_documento",fieldLabel:"Documento",labelWidth:68},{xtype:"comp_dato",flex:1},{xtype:"comp_datofecha",name:"orden_fecha",labelWidth:35}]},
		{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor"}
	]},
	{xtype:"comp_date",itemId:"ordennotif_fecha",name:"ordennotif_fecha",allowBlank:false,fieldLabel:"Fecha Notif.",labelWidth:63,width:165},
	{xtype:"comp_txtarea",itemId:"ordennotif_observ",name:"ordennotif_observ",fieldLabel:"Comentario",labelWidth:63,anchor:"100%"}
]}]
});