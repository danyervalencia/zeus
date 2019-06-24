Ext.define("Siace.view.log.ViaticosAct",{extend:"Siace.view.WindowCnf",alias:"widget.log_viatact",iconCls:"icon_activate",layout:{type:"vbox"},title:"Activar Viático ::.",width:500,items:[
{xtype:"form",itemId:"frmLV",border:true,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
	{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"viat_documento",fieldLabel:"Viático",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"viat_fecha",fieldLabel:"Fecha",labelWidth:35}]},
	{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"trabj_codename",fieldLabel:"Comisionado"}
]}]},
{xtype:"form",itemId:"frmA",bodyPadding:"4 4 4 4",border:false,defaults:{labelWidth:65,width:"100%"},layout:"vbox",width:"100%",items:[
	{xtype:"comp_cbo",itemId:"fase_key",valueField:"fase_key",displayField:"fase_nombre",fieldLabel:"Fase"},{xtype:"comp_txtarea",itemId:"observ",fieldLabel:"Comentario"}
]}]
});