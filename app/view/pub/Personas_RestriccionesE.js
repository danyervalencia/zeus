Ext.define("Siace.view.pub.Personas_RestriccionesE",{extend:"Siace.view.WinE",alias:"widget.pub_persrestre",layout:{type:"vbox"},width:500,items:[
{xtype:"comp_frmview",itemId:"frmPP",items:[
	{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}
]},
{xtype:"form",itemId:"frmPPR",bodyPadding:"6 6 2 6",border:true,width:"100%",items:[{xtype:"hiddenfield",itemId:"pers_key",name:"pers_key"},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"container",layout:"vbox",width:250,items:[
			{xtype:"comp_cbo",itemId:"tiprestr_id",name:"tiprestr_id",valueField:"tabgen_id",displayField:"tabgen_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Restricción",labelWidth:65,width:"100%"},
			{xtype:"fieldset",defaults:{labelWidth:115,value:0.00,anchor:"100%"},margin:"0 0 6 0",padding:"0 6 2 6",title:"Importes Máximos",width:"100%",items:[
				{xtype:"comp_curr",itemId:"persrestr_montot",name:"persrestr_montot",fieldLabel:"Importe Acumulado"},
				{xtype:"comp_curr",itemId:"persrestr_montoa",name:"persrestr_montoa",fieldLabel:"Importe Anual"},
				{xtype:"comp_curr",itemId:"persrestr_montoi",name:"persrestr_montoi",fieldLabel:"Importe x Documento"}
			]}
		]},{xtype:"displayfield",flex:1},
		{xtype:"container",defaults:{labelWidth:75,width:"100%"},layout:"vbox",width:185,items:[
			{xtype:"comp_date",itemId:"persrestr_fechaini",name:"persrestr_fechaini",fieldLabel:"Fecha Inicial",endDateField:"persrestr_fechafin",vtype:"daterange"},
			{xtype:"comp_date",itemId:"persrestr_fechafin",name:"persrestr_fechafin",fieldLabel:"Fecha Final",startDateField:"persrestr_fechaini",vtype:"daterange"},
			{xtype:"comp_txt",fieldLabel:"Auxiliar",disabled:true,},
			{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"displayfield",flex:1},{xtype:"label",itemId:"lblPersrestr_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 "},{xtype:"checkbox",itemId:"persrestr_estado",name:"_persrestr_estado",checked:true,width:13}]}
		]}
	]},
	{xtype:"comp_txtarea",itemId:"persrestr_observ",name:"persrestr_observ",fieldLabel:"Comentario",anchor:"100%",labelWidth:65,rows:6}
]}]}
);