Ext.define("Siace.view.bud.Expedientes_ProcedenciasE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_expeproce",width:600,items:[
{xtype:"form",border:true,bodyPadding:"4 8 6 8",defaults:{width:"100%"},items:[{xtype:"hiddenfield",itemId:"tablex",name:"tablex"},{xtype:"hiddenfield",itemId:"tablex_key",name:"tablex_key"},
	{xtype:"comp_tooltop",layout:"vbox",defaults:{labelWidth:68},padding:"4 0 0 4",items:[
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",itemId:"tablex_documento",name:"tablex_documento",fieldLabel:"Documento",labelWidth:68},{xtype:"comp_dato",flex:1},{xtype:"comp_datofecha",itemId:"tablex_fecha",name:"tablex_fecha",labelWidth:50,width:130}]},
		{xtype:"comp_dato",itemId:"area_nombre",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",itemId:"secfunc_codename",name:"secfunc_codename",fieldLabel:"Sec. Func."},
		{xtype:"comp_dato",itemId:"tarea_codename",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",itemId:"fftr_codename",name:"fftr_codename",fieldLabel:"Rubro"}
	]},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",itemId:"expe_nro",name:"expe_nro",fieldLabel:"Nro. SIAF",labelWidth:63,margin:"0 4 5 0",maxLength:10,vtype:"onlyNumeric",width:160},{xtype:"compbud_tiprecur_codename",fieldLabel:"",flex:1,submitValue:false}]},
	{xtype:"comp_txtarea",itemId:"expeproc_observ",name:"expeproc_observ",fieldLabel:"Comentario",labelWidth:63,anchor:"100%"}
]}]
});