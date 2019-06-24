Ext.define("Siace.view.log.Vales_AtendidosE",{extend:"Siace.view.WinE",alias:"widget.log_valatende",layout:{type:"vbox"},width:500,items:[
{xtype:"panel",itemId:"panLV",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",layout:{type:"vbox"},width:"100%",items:[{xtype:"comp_tooltop",layout:"vbox",defaults:{labelWidth:65},width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"val_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"val_fecha",labelWidth:35}]},
	{xtype:"comp_dato",name:"motval_nombre",fieldLabel:"Motivo"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"tablex_documento",fieldLabel:"Referencia",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"tablex_fecha",labelWidth:35}]},
	{xtype:"comp_dato",name:"indiv_dniname",fieldLabel:"Operador"},{xtype:"comp_dato",name:"veh_placa",fieldLabel:"Vehículo"}
]}]}]},
{xtype:"panel",itemId:"panLVA",margin:"0 0 0 0",width:"100%",items:[
{xtype:"form",bodyPadding:"4 8 8 8",border:false,defaults:{labelWidth:65},width:"100%",items:[{xtype:"hiddenfield",itemId:"val_key",name:"val_key"},
	{xtype:"container",layout:"hbox",items:[{xtype:"comp_date",itemId:"valatend_fecha",name:"valatend_fecha",fieldLabel:"Fecha",labelWidth:65,margin:"0 25 5 0",width:170},{xtype:"comp_time",name:"valatend_hora",fieldLabel:"Hora",increment:60,labelWidth:35,width:100}]},
	{xtype:"comp_curr",name:"valatend_odometro",fieldCls:"txt00006",fieldLabel:"Odómetro",maxLength:15,numberDecimal:1,width:170},
	{xtype:"comp_txtarea",name:"valatend_observ",fieldLabel:"Comentario",anchor:"100%"}
]}]}
]});