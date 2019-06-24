Ext.define("Siace.view.pub.Bienes_Servs_Especificas_DetE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_bsespedete",layout:{type:"vbox"},width:550,items:[
{xtype:"panel",itemId:"panPBS",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"vbox"},width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"},{xtype:"comp_dato",name:"bs_nombre",fieldLabel:"Descripción"}]}]}]},
{xtype:"panel",margin:"0 0 0 0",width:"100%",items:[{xtype:"form",itemId:"frmPBSED",bodyPadding:"4 8 8 8",border:false,defaults:{labelWidth:65},width:"100%",items:[{xtype:"hiddenfield",itemId:"bs_key",name:"bs_key"},
	{xtype:"compbud_espedet_codename",name:"espedet_id",editable:true,anchor:"100%"},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0", width:"100%",items:[{xtype:"label",itemId:"lblBsespedet_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Habilitado \xa0 ",flex:1},{xtype:"checkbox",itemId:"bsespedet_estado",name:"_bsespedet_estado",checked:true,width:13}]},
	{xtype:"comp_txtarea",itemId:"bsespedet_observ",name:"bsespedet_observ",fieldLabel:"Comentario",labelWidth:65,anchor:"100%"}
]}]}
]});