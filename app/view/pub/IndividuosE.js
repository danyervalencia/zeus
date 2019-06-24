Ext.define("Siace.view.pub.IndividuosE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_indive",width:640,items:[{xtype:"form",frame:false,layout:{type:"fit"},items:[{xtype:"tabpanel",activeTab:0,items:[
{xtype:"panel",bodyPadding:10,layout:{type:"hbox"},title:"Datos Principales",items:[
	{xtype:"container",layout:"vbox",width:370,defaults:{labelWidth:70,anchor:"100%",width:"100%"},items:[
		{xtype:"fieldcontainer",fieldLabel:"Doc.Identid.",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"tipdocident"},{xtype:"hiddenfield",itemId:"indiv_pdf",name:"indiv_pdf"},
			{xtype:"comp_cbotop",itemId:"tipdocident_id",name:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",listConfig:{cls:"item00001",minWidth:60},allowBlank:false,maxLength:4,minChars:1,width:60},
			{xtype:"comp_txttop",itemId:"indiv_dni",name:"indiv_dni",emptyText:"Número doc. identidad",maxLength:15,width:120},			
			{xtype:"comp_file",itemId:"ffiIndiv_pdf",name:"ffiIndiv_pdf"},{xtype:"comp_btn_imgpdf",itemId:"btnIndiv_pdfDelete",hidden:true,iconCls:"icon_Delete_90"},{xtype:"comp_btn_imgpdf",itemId:"btnIndiv_pdfDownload",disabled:true}
		]},
		{xtype:"comp_txt",itemId:"indiv_appaterno",name:"indiv_appaterno",fieldLabel:"Ap. Paterno",maxLength:30},
		{xtype:"comp_txt",itemId:"indiv_apmaterno",name:"indiv_apmaterno",fieldLabel:"Ap. Materno",maxLength:30},
		{xtype:"comp_txt",itemId:"indiv_nombres",name:"indiv_nombres",fieldLabel:"Nombre",allowBlank:false,maxLength:30},
		{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[
			{xtype:"comp_cbo",itemId:"tipsex_id",name:"tipsex_id",store:"array.TipSex",valueField:"tipsex_id",displayField:"tipsex_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipsex_nombre}&nbsp;</div></tpl>",allowBlank:false,editable:true,fieldLabel:"Sexo",labelWidth:70,margin:"0 30 0 0",width: 170},
			{xtype:"comp_date",itemId:"indiv_fechanac",name:"indiv_fechanac",fieldLabel:"Fecha Nac.",labelWidth:70,flex:1}
		]},
		{xtype:"comp_cbo",itemId:"tipestaciv_id",name:"tipestaciv_id",store:"array.TipEstaCiv",valueField:"tipestaciv_id",displayField:"tipestaciv_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipestaciv_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Estado Civil",width:170},
		{xtype:"fieldset",layout:{type:"vbox"},padding:"2 8 4 8",width:"100%",title:"Lugar de Nacimiento",items:[{xtype:"pub_paisdptoprvndstt",itemId:"cntPdpd"}]}
	]},
	{xtype:"fieldset",flex:1,margin:"0 0 0 40",padding:"0 8 0 8",title:"Fotografia",items:[
		{xtype:"image",itemId:"imgIndiv_foto",name:"imgIndiv_foto",border:1,height:220,margin:"0 0 5 0",width:"100%",style:{borderColor:"#BDBDBD",borderStyle:"solid",background:"center",position:"relative"}},
		{xtype:"container",layout:{type:"hbox"},margin: "0 0 5 0",items:[{xtype:"hiddenfield",itemId:"indiv_foto",name:"indiv_foto"},
			{xtype:"filefield",itemId:"ffiIndiv_foto",name:"ffiIndiv_foto",buttonConfig:{iconCls:"icon_Add",padding:"2 6 2 8"},buttonOnly:true,margin:"0 5 0 25",buttonText:"&nbsp; Foto",clearOnSubmit:false},
			{xtype:"button",itemId:"btnIndiv_fotoDelete",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8",text:"&nbsp; Foto"}
		]}
	]}
]},
{xtype:"panel",bodyPadding:10,layout:{type:"vbox"},title:"Datos Complementarios",items:[
	{xtype:"container",defaults:{labelClsExtra:"lbl00001",labelWidth:70,},layout:"anchor",width:603,items:[
		{xtype:"comp_txt",itemId:"indiv_mail",name:"indiv_mail",fieldLabel:"E-mail",anchor:"55%",maxLength:"100",vtype:"email"},
		{xtype:"comp_txtarea",itemId:"indiv_observ",name:"indiv_observ",fieldLabel:"Comentario",anchor:"100%",height:250}
	]}
]} 
]}]}]});