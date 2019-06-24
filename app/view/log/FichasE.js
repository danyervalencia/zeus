Ext.define("Siace.view.log.FichasE",{extend:"Siace.view.WindowEdit",alias:"widget.log_fiche",width:600,items:[
{xtype:"form",border:true,bodyPadding:8,defaults:{labelWidth:65,width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"fieldcontainer",fieldLabel:"Registro",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"fich_nro",name:"fich_nro",align:"center",disabled:true,width:60},{xtype:"comp_datetop",itemId:"fich_fecha",name:"fich_fecha",allowBlank:false,disabled:true},{xtype:"comp_dato",flex:1},{xtype:"comp_cbo",itemId:"tipfich_id",name:"tipfich_id",store:"array.log.TipFichLFE",valueField:"tipfich_id",displayField:"tipfich_nombre",editable:true,fieldLabel:"Tipo",labelWidth:40,width:190}]},
	{xtype:"fieldcontainer",fieldLabel:"Referencia",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"tablex_key",name:"tablex_key"},{xtype:"hiddenfield",itemId:"TABLEX_NRO"},
		{xtype:"comp_cbotop",itemId:"tablex_doc",store:"array.DocFicha",valueField:"doc_id",displayField:"doc_nombre",disabled:true,width:160},{xtype:"comppub_year_code",fieldLabel:""},
		{xtype:"comp_txttop",itemId:"tablex_nro",align:"center",enableKeyEvents:true,maxLength:6,submitValue:false,vtype:"onlyNumeric",width:70},
		{xtype:"comp_datofecha",itemId:"tablex_fecha",fieldLabel:"",margin:"1 5 0 4",width:100},{xtype:"comp_dato",itemId:"expe_nro",fieldLabel:"SIAF",labelWidth:30,margin:"1 0 0 4"}
	]},
	{xtype:"comp_txtarea",itemId:"fich_observ",name:"fich_observ",fieldLabel:"Comentario"}
]}]
});