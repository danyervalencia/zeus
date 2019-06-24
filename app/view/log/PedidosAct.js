Ext.define("Siace.view.log.PedidosAct",{extend:"Siace.view.WinCnf",alias:"widget.log_pedact",iconCls:"icon_activate",layout:{type:"vbox"},title:"Activar Requerimiento ::.",width:500,items:[
{xtype:"form",itemId:"frmLP",border:true,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
	{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35}]},
	{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
]}]},
{xtype:"form",itemId:"frmA",bodyPadding:"4 4 4 4",border:false,defaults:{labelWidth:65,width:"100%"},layout:"vbox",width:"100%",items:[
	{xtype:"comp_cbo",itemId:"fase_key",valueField:"fase_key",displayField:"fase_nombre",fieldLabel:"Fase"},{xtype:"comp_txtarea",itemId:"observ",fieldLabel:"Comentario"}
]}]
});