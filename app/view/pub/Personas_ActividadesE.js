Ext.define("Siace.view.pub.Personas_ActividadesE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_persactive",layout:{type:"vbox"},width:450,items:[
{xtype:"panel",itemId:"panPP",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"vbox"},width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]}]},
{xtype:"panel",margin:"0 0 0 0",width:"100%",items:[
{xtype:"form",itemId:"frmPPA",bodyPadding:"4 8 8 8",border:false,defaults:{labelWidth:65},width:"100%",items:[{xtype:"hiddenfield",itemId:"pers_key",name:"pers_key"},
	{xtype:"comp_cbo",itemId:"activ_key",name:"activ_key",valueField:"activ_key",displayField:"activ_nombre",tpl:"<tpl for="."><div class="x-boundlist-item">{activ_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Actividad",anchor:"100%"},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[
		{xtype:"label",itemId:"lblPersactiv_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Habilitado \xa0 ",flex:1},
		{xtype:"checkbox",itemId:"persactiv_estado",name:"_persactiv_estado",checked:true,width:13},
	]},
	{xtype:"comp_txtarea",itemId:"persactiv_observ",name:"persactiv_observ",fieldLabel:"Comentario",labelWidth:65,anchor:"100%"}
]}]}
]});