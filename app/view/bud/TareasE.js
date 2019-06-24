Ext.define("Siace.view.bud.TareasE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_tareae",width:780,items:[
{xtype:"form",border:true,bodyPadding:8,defaults:{labelWidth:65,width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[
	{xtype:"comppub_year_code",name:"year_id",fieldLabel:"Ejecutora",labelAlign:"left",labelWidth:65,margin:"0 4 0 0",width:130},{xtype:"compbud_unieje_nombre",name:"unieje_key",fieldLabel:"",flex:1}]},
	{xtype:"compbud_secfunc_codename",editable:true},{xtype:"comp_dato",itemId:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",itemId:"fina_codename",fieldLabel:"Finalidad"},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_cbo",itemId:"tiptarea_id",name:"tiptarea_id",valueField:"tiptarea_id",displayField:"tiptarea_codename",editable:true,fieldLabel:"Tipo Tarea",labelWidth:65,margin:"0 4 0 0",width:330},{xtype:"comp_txt",itemId:"tarea_nombre",name:"tarea_nombre",maxLength:120,flex:1}]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_txt",itemId:"tarea_nro",name:"tarea_nro",disabled:true,fieldLabel:"Código",labelWidth:65,margin:"0 4 0 0",maxLength:3,width:125},
		{xtype:"comp_cbo",itemId:"tipgast_id",name:"tipgast_id",valueField:"tabgen_id",displayField:"tabgen_code",listConfig:{cls:"item00001",minWidth:45},tpl:"<tpl for='.''><div class='x-boundlist-item'>{tabgen_code}&nbsp;</div></tpl>",editable:true,width:45},{xtype:"displayfield",flex: 1},
		{xtype:"comp_cbo",itemId:"tipespedet_id",name:"tipespedet_id",store:"array.bud.TipEspeDet",valueField:"tipespedet_id",displayField:"tipespedet_nombre",editable:true,fieldLabel:"Tipo Clasificador",labelWidth:90,width:220},
	]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_date",itemId:"tarea_fechaini",name:"tarea_fechaini",endDateField:"tarea_fechafin",fieldLabel:"Periodo",labelWidth:65,margin:"0 4 0 0",vtype:"daterange",width:165},{xtype:"comp_date",itemId:"tarea_fechafin",name:"tarea_fechafin",startDateField:"tarea_fechaini",vtype:"daterange"},{xtype:"label",itemId:"lblTarea_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",flex:1},{xtype:"checkbox",itemId:"tarea_estado",name:"_tarea_estado",checked:true,width:13}]},
	{xtype:"comp_txtarea",itemId:"tarea_observ",name:"tarea_observ",fieldLabel:"Comentario"}
]}]
});