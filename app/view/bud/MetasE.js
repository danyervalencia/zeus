Ext.define("Siace.view.bud.MetasE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_metae",width:700,items:[
{xtype:"form",border:true,bodyPadding:8,defaults:{labelWidth:68,width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"fieldcontainer",labelClsExtra:"lbl00001",fieldLabel:"Sec. Func.",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comppub_year_code",name:"year_id",fieldLabel:"",width:60},{xtype:"comp_txttop",itemId:"secfunc_code",name:"secfunc_code",allowBlank:false,disabled:true,fieldCls:"txt00105",maxLength:4,vtype:"onlyNumeric",width:60},{xtype:"displayfield",flex:1},{xtype:"comp_txt",itemId:"actproy_code",name:"actproy_code",allowBlank:false,fieldLabel:"Actividad / Proyecto(SNIP)",disabled:true,labelWidth:135,fieldCls:"txt00105",maxLength:8,vtype:"onlyNumeric",width:210},]},
	{xtype:"comp_cbo",disabled:true,fieldLabel:"Función"},{xtype:"comp_cbo",disabled:true,fieldLabel:"Programa"},{xtype:"comp_cbo",disabled:true,fieldLabel:"SubPrograma"},{xtype:"comp_cbo",disabled:true,fieldLabel:"Componente"},
	{xtype:"comp_txtarea",itemId:"secfunc_nombre",name:"secfunc_nombre",fieldLabel:"Descripción",rows:3},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_date",itemId:"secfunc_fechaini",name:"secfunc_fechaini",endDateField:"secfunc_fechafin",fieldLabel:"Periodo",labelWidth:68,margin:"0 4 0 0",vtype:"daterange",width:168},{xtype:"comp_date",itemId:"secfunc_fechafin",name:"secfunc_fechafin",startDateField:"secfunc_fechaini",vtype:"daterange"},{xtype: "displayfield",flex:1},
		{xtype:"comp_curr",itemId:"secfunc_latitud",name:"secfunc_latitud",fieldLabel:"Latitud",labelWidth:50,maxLength:13,numberDecimal:10,width:170},
	]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype: "displayfield",flex:1},
		{xtype:"comp_curr",itemId:"secfunc_longitud",name:"secfunc_longitud",fieldLabel:"Longitud",labelWidth:50,maxLength:13,numberDecimal:10,width:170},
	]},
	{xtype:"comp_txtarea",itemId:"secfunc_observ",name:"secfunc_observ",fieldLabel:"Comentario"}
]}]
});