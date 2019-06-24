Ext.define("Siace.view.pub.Bienes_ServsE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_bse",width:650,items:[{xtype:"form",bodyPadding:8,border:true,defaults:{labelWidth:60,anchor:"100%"},width:"100%",items:[
{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cbo",itemId:"bst_id",name:"bst_id",store:"array.Bst",valueField:"bst_id",displayField:"bst_code",fieldLabel:"Tipo/Grupo",labelWidth:60,listConfig:{cls:"item00001",minWidth:40},margin:"0 4 5 0",width:100},{xtype:"comp_cbo",itemId:"bsg_id",name:"_bsg_id",valueField:"bsg_id",displayField:"bsg_codename",tpl:"<tpl for='.'><div class='x-boundlist-item'>{bsg_codename}&nbsp;</div></tpl>",allowBlank:false,flex:1}]},
{xtype:"comp_cbo",itemId:"bsc_id",name:"_bsc_id",valueField:"bsc_id",displayField:"bsc_codename",tpl:"<tpl for='.'><div class='x-boundlist-item'>{bsc_codename}&nbsp;</div></tpl>",fieldLabel:"Clase",allowBlank:false},
{xtype:"comp_cbo",itemId:"bsf_id",name:"_bsf_id",valueField:"bsf_id",displayField:"bsf_codename",tpl:"<tpl for='.'><div class='x-boundlist-item'>{bsf_codename}&nbsp;</div></tpl>",editable:true,fieldLabel:"Familia",width:"100%"},
{xtype:"container",itemId:"cntClasificador",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",itemId:"bs_code",name:"bs_code",fieldLabel:"Item",labelWidth:60,maxLength:4,vtype:"onlyNumeric",width:110},{xtype:"displayfield",margin:"0 0 5 0",width:20}]},
{xtype:"comp_txt",itemId:"bs_nombre",name:"bs_nombre",fieldLabel:"Nombre",allowBlank:false,maxLength:100,width:"100%"},
{xtype:"container",layout:{type:"hbox"},width:"100%",items:[
	{xtype:"container",layout:"vbox",defaults:{labelWidth:60,anchor:"100%"},flex:11,items:[
		{xtype:"comp_txt",itemId:"bs_abrev",name:"bs_abrev",fieldLabel:"Abreviado",maxLength:30,width:"100%"},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cbo",itemId:"unimed_id",name:"unimed_id",valueField:"unimed_id",displayField:"unimed_nombre",allowBlank:false,editable:true,fieldLabel:"U. Medida",labelWidth:60,margin:"0 20 4 0",tpl:"<tpl for='.'><div class='x-boundlist-item'>{unimed_nombre}&nbsp;</div></tpl>",width: 220},{xtype:"comp_curr",itemId:"bs_peso",name:"bs_peso",fieldLabel:"Peso (Kg)",labelWidth:55,numberDecimal:3,flex:1}]},
		{xtype:"comp_cbo",itemId:"marc_key",name:"_marc_key",valueField:"marc_key",displayField:"marc_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{marc_nombre}&nbsp;</div></tpl>",disabled:true,fieldLabel:"Marca",width:220},
		{xtype:"comp_cbo",itemId:"mod_key",name:"_mod_key",valueField:"mod_key",displayField:"mod_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{mod_nombre}&nbsp;</div></tpl>",disabled:true,fieldLabel:"Modelo",width:220},
		{xtype:"comp_cbo",itemId:"xxxx",disabled:true,fieldLabel:"xxxxxxxxx",width:220},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"bsalma_key",name:"bsalma_key"},{xtype:"comp_cbo",itemId:"alma_key",name:"alma_key",valueField:"alma_key",displayField:"alma_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{alma_abrev}&nbsp;</div></tpl>",disabled:true,fieldLabel:"xxxxxxxxx",labelWidth:60,margin:"0 4 4 0",width:220},{xtype:"comp_txt",itemId:"bsalma_code",name:"bsalma_code",anchor:"100%",disabled:true,maxLength:30,flex:1}]},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"displayfield",itemId:"lblBs_estado_compl",fieldCls:"df00003",value:"Permitir Complementario \xa0 ",width:230},{xtype:"checkbox",itemId:"bs_estado_compl",name:"_bs_estado_compl",width:40},{xtype:"label",itemId:"lblBs_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",width:80},{xtype:"checkbox",itemId:"bs_estado",name:"_bs_estado",checked:true,flex:1}]},
		{xtype:"comp_txtarea",itemId:"bs_observ",name:"bs_observ",fieldLabel:"Comentario",width:"100%"}
	]},
	{xtype:"fieldset",padding:"0 8 0 8",margin:"0 0 0 55",title:"Fotografia",flex:6,items:[
		{xtype:"image",itemId:"imgIndiv_foto",border:1,height:190,margin:"0 0 5 0",width:"100%",style:{borderColor:"#BDBDBD",borderStyle:"solid",background:"center",position:"relative"}},
		{xtype:"container",layout:{type:"hbox",},margin:"0 0 5 0",items:[{xtype:"hiddenfield",name:"indiv_foto"},{xtype:"fileuploadfield",id:"form-file",itemId:"ffiIndiv_foto",buttonConfig:{iconCls:"icon_Add",padding:"2 6 2 8"},buttonOnly:true,buttonText:"&nbsp; Foto",margin:"0 5 0 25"},{xtype:"button",itemId:"btnIndiv_fotoDelete",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8",text:"&nbsp; Foto"}]}
	]}
]},
{xtype:"container",itemId:"cntNandina",hidden:true,layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"partaran_key",name:"partaran_key"},{xtype:"hiddenfield",itemId:"PARTARAN_CODIGO",name:"PARTARAN_CODIGO"},
	{xtype:"comp_txt",itemId:"partaran_codigo",name:"partaran_codigo",enableKeyEvents:true,fieldLabel:"Partida",labelWidth:60,margin:"0 4 4 0",maxLength:15,width:150},
	{xtype:"comp_btn_imgsearch",itemId:"btnPartaran_search"},{xtype:"displayfield",itemId:"partaran_nombre",name:"partaran_nombre",fieldCls:"df00101"}
]}
]}]});