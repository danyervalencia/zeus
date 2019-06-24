Ext.define("Siace.view.pub.ModelosE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_mode",layout:{type:"vbox"},width:550,items:[
{xtype:"panel",itemId:"panPBSF",width:"100%",items:[
	{xtype:"form",bodyPadding:"4 4 4 6",layout:{type:"vbox"},width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[
		{xtype:"comp_dato",name:"bsg_codename",name:"bsg_codename",fieldLabel:"Grupo",submitValue:false},{xtype:"comp_dato",name:"bsc_codename",name:"bsc_codename",fieldLabel:"Clase",submitValue:false},{xtype:"comp_dato",name:"bsf_codename",name:"bsf_codename",fieldLabel:"Familia",submitValue:false}
	]}]}
]},
{xtype:"panel",itemId:"panPM",margin:"2 0 0 0",width:"100%",items:[
	{xtype:"form",bodyPadding:8,layout:{type:"hbox"},width:"100%",items:[{xtype:"hiddenfield",itemId:"bsf_id",name:"bsf_id"},
		{xtype:"container",layout:"vbox",width:300,defaults:{labelWidth:60,width:"100%"},items:[
			{xtype:"comp_cbo",itemId:"marc_key",name:"marc_key",valueField:"marc_key",displayField:"marc_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{marc_nombre}&nbsp;</div></tpl>",allowBlank:false,editable:true,fieldLabel:"Marca"},{xtype:"comp_txt",itemId:"mod_nombre",name:"mod_nombre",allowBlank:false,fieldLabel:"Modelo",maxLength:80},
			{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",itemId:"mod_abrev",name:"mod_abrev",fieldLabel:"Abrev.",labelWidth:60,margin:"0 0 5 0",maxLength:10,width:150},{xtype:"displayfield",flex:1},{xtype:"label",itemId:"lblMod_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",width:80},{xtype:"checkbox",itemId:"mod_estado",name:"_mod_estado",checked:true}]},
			{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"hiddenfield",itemId:"mod_file",name:"mod_file"},{xtype:"comp_file",itemId:"ffiMod_file",name:"ffiMod_file",buttonOnly:false,hideLabel:false,fieldLabel:"Ficha Téc.",labelWidth:60,width:248},{xtype:"comp_btn_imgpdf",itemId:"btnMod_fileDelete",disabled:true,iconCls:"icon_Delete_90"},{xtype:"comp_btn_imgpdf",itemId:"btnMod_fileDownload",disabled:true,margin:"0 0 0 0"}]},
			{xtype:"comp_txt",itemId:"xxx",fieldLabel:"Xxxxxxxx",disabled:true},{xtype:"comp_txtarea",itemId:"mod_observ",name:"mod_observ",fieldLabel:"Comentario"}
		]},
		{xtype:"fieldset",flex:1,margin:"0 0 0 20",padding:"0 4 0 4",title:"Imagen",items:[
			{xtype:"image",itemId:"imgMod_foto",name:"imgMod_foto",border:1,height:220,margin:"0 0 5 0",src:"attach/sin_imagen.jpg",width:"100%",style:{borderColor:"#BDBDBD",borderStyle:"solid",background:"center",position:"relative"}},
			{xtype:"container",layout:{type:"hbox"},margin: "0 0 5 0",items:[{xtype:"hiddenfield",itemId:"mod_foto",name:"mod_foto"},
				{xtype:"filefield",itemId:"ffiMod_foto",name:"ffiMod_foto",buttonConfig:{iconCls:"icon_Add",padding:"2 6 2 8"},buttonOnly:true,margin:"0 5 0 25",buttonText:"&nbsp; Foto",clearOnSubmit:false},
				{xtype:"button",itemId:"btnMod_fotoDelete",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8",text:"&nbsp; Foto"}
			]}
		]}
	]}
]}]
});