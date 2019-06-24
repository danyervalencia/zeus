Ext.define("Siace.view.pub.PersonasE",{extend:"Siace.view.WinE",alias:"widget.pub_perse",width:570,items:[
{xtype:"form",bodyPadding:8,border:true,defaults:{labelWidth:75},layout:{type:"vbox"},items:[
	{xtype:"fieldcontainer",fieldLabel:"Registro",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_pdf",name:"pers_pdf"},
		{xtype:"comp_cbotop",itemId:"tipdocident_id",name:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",allowBlank:false,maxLength:4,minChars:1,width:70},
		{xtype:"comp_txttop",itemId:"pers_ruc",name:"pers_ruc",disabled:true,maxLength:15,width:130},
		{xtype:"comp_file",itemId:"ffiPers_pdf",name:"ffiPers_pdf"},{xtype:"comp_btn_imgpdf",itemId:"btnPers_pdfDelete",hidden:true,iconCls:"icon_Delete_90"},{xtype:"comp_btn_imgpdf",itemId:"btnPers_pdfDownload",disabled:true}
	]},
	{xtype:"comp_txt",itemId:"pers_nombre",name:"pers_nombre",fieldLabel:"Razón Social",allowBlank:false,maxLength:80,width:"100%"},
	{xtype:"comp_txt",itemId:"pers_nombre02",name:"pers_nombre02",fieldLabel:"N. Comercial",maxLength:80,width:"100%"},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"indiv_key",name:"indiv_key"},{xtype:"hiddenfield",itemId:"INDIV_DNI",name:"INDIV_DNI",submitValue:false},{xtype:"comp_txt",itemId:"indiv_dni",name:"indiv_dni",enableKeyEvents:true,fieldLabel:"Persona",labelWidth:75,margin:"0 4 5 0",maxLength:15,submitValue:false,width: 150},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"indiv_apenom",name:"indiv_apenom",fieldCls:"df00101"}]},
	{xtype:"comp_cbo",itemId:"grupempr_id",name:"grupempr_id",fieldLabel:"Grupo Empr.",width:"100%"},
	{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
		{xtype:"panel",bodyPadding:8,layout:{type:"vbox"},defaults:{labelWidth:80},title:" Domicilio Fiscal ",items:[{xtype:"pub_paisdptoprvndstt",itemId:"cntPdpd"},{xtype:"comp_txt",itemId:"pers_domicilio",name:"pers_domicilio",fieldLabel:"Dirección",allowBlank:false,maxLength:100,width:"100%"}]},
		{xtype:"panel",bodyPadding:8,defaults:{labelWidth:70,msgTarget:"title"},layout:{type:"vbox"},title:" Datos Complementarios ",width:"100%",items:[
			{xtype:"comp_txt",itemId:"pers_mail",name:"pers_mail",fieldLabel:"E mail",maxLength:"100",vtype:"email",width:"100%"},{xtype:"comp_txt",itemId:"pers_web",name:"pers_web",fieldLabel:"Página web",maxLength:"100",vtype:"url",width:"100%"},{xtype:"comp_txtarea",itemId:"pers_observ",name:"pers_observ",rows:6,fieldLabel:"Comentario",width:"100%"}
		]}
	]}
]}],
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;}
});