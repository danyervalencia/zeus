Ext.define("Siace.view.log.Pedidos_WebE",{extend:"Siace.view.WindowEdit",alias:"widget.log_pedwebe",width:600,items:[
{xtype:"form",border:true,bodyPadding:"4 8 8 8",defaults:{width:"100%"},items:[{xtype:"hiddenfield",itemId:"ped_key",name:"ped_key"},
	{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:65},padding:"0 0 4 0",ui:"footer",width:"100%",items:[
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
		{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
	]},
	{xtype:"fieldcontainer",fieldLabel:"Periodo",labelClsExtra:"lbl00001",labelWidth:65,layout:"hbox",margin:"0 0 5 0",items:[{xtype:"comp_datetop",itemId:"pedweb_fechaini",name:"pedweb_fechaini",allowBlank:false,endDateField:"pedweb_fechafin",vtype:"daterange"},{xtype:"comp_datetop",itemId:"pedweb_fechafin",name:"pedweb_fechafin",allowBlank:false,startDateField:"pedweb_fechaini",vtype:"daterange"},{xtype:"label",itemId:"lblPedweb_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",flex:1},{xtype:"checkbox",itemId:"pedweb_estado",name:"_pedweb_estado",checked:true,width:13}]},
	{xtype:"comp_txtarea",itemId:"pedweb_observ",name:"pedweb_observ",fieldLabel:"Comentario",labelWidth:65,anchor:"100%"}
]}]
});