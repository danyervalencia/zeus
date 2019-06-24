Ext.define("Siace.view.pub.Bienes_Servs_Clases_MarcasE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_bscmarce",layout:{type:"vbox"},width:550,items:[
{xtype:"panel",itemId:"panPBSC",width:"100%",items:[
	{xtype:"form",bodyPadding:"4 4 4 6",layout:{type:"vbox"},width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:35},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",name:"bsg_codename",fieldLabel:"Grupo",submitValue:false},{xtype:"comp_dato",name:"bsc_codename",name:"bsc_codename",fieldLabel:"Clase",submitValue:false}]}]}
]},
{xtype:"panel",itemId:"panPBSCM",margin:"2 0 0 0",width:"100%",items:[
	{xtype:"form",bodyPadding:8,layout:{type:"vbox"},defaults:{labelWidth:60,width:"100%"},width:"100%",items:[{xtype:"hiddenfield",itemId:"bsc_id",name:"bsc_id"},
		{xtype:"comp_cbo",itemId:"marc_key",name:"marc_key",valueField:"marc_key",displayField:"marc_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{marc_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Marca"},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"displayfield",flex:1},{xtype:"label",itemId:"lblBscmarc_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",width:80},{xtype:"checkbox",itemId:"bscmarc_estado",name:"_bscmarc_estado",checked:true}]},
		{xtype:"comp_txtarea",itemId:"bscmarc_observ",name:"bscmarc_observ",fieldLabel:"Comentario"}
	]}
]}]
});