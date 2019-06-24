Ext.define("Siace.view.log.Buena_ProEG",{extend:"Siace.view.WinE",alias:"widget.log_bpeg",width:600,items:[
{xtype:"form",border:true,bodyPadding:"4 8 8 8",defaults:{labelWidth:63,width:"100%"},items:[
	{xtype:"fieldcontainer",fieldLabel:"Buena Pro",labelClsExtra:"lbl00001",layout:"hbox",margin:"0 0 2 0",items:[{xtype:"comp_txttop",name:"bp_nro",align:"center",disabled:true,fieldCls:"txt00005",submitValue:false,width:70},{xtype:"comp_date",name:"bp_fecha",allowBlank:false}]},
	{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:68},padding:"0 0 4 0",ui:"footer",width:"100%",items:[
		{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor"}
	]},
	{xtype:"comp_txtarea",name:"bp_observ",fieldLabel:"Comentario",anchor:"100%"}
]}]
});