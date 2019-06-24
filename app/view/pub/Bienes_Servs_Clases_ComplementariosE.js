Ext.define("Siace.view.pub.Bienes_Servs_Clases_ComplementariosE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_bsccomple",layout:{type:"vbox"},width:550,items:[
{xtype:"panel",itemId:"panPBSC",width:"100%",items:[
	{xtype:"form",bodyPadding:"4 4 4 6",layout:{type:"vbox"},width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:35},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",name:"bsg_codename",fieldLabel:"Grupo",submitValue:false},{xtype:"comp_dato",name:"bsc_codename",name:"bsc_codename",fieldLabel:"Clase",submitValue:false}]}]}
]},
{xtype:"panel",itemId:"panPBSCC",margin:"2 0 0 0",width:"100%",items:[
	{xtype:"form",bodyPadding:8,layout:{type:"vbox"},defaults:{labelWidth:80,width:"100%"},width:"100%",items:[{xtype:"hiddenfield",itemId:"bsc_id",name:"bsc_id"},
		{xtype:"comp_cbo",itemId:"compl_key",name:"compl_key",valueField:"compl_key",displayField:"compl_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{compl_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Complementario"},
		{xtype:"container",layout:"hbox",width:"100%",items:[
			{xtype:"comp_curr",itemId:"bsccompl_orden",name:"bsccompl_orden",fieldLabel:"Orden",labelWidth:80,margin:"0 0 5 0",maxLength:2,numberDecimal:0,width:130},{xtype:"displayfield",flex:1},
			{xtype:"label",itemId:"lblBsccompl_fixed",cls:"lbl00003",padding:"5 0 0 0",text:"Obligatorio \xa0 ",width:80},{xtype:"checkbox",itemId:"bsccompl_fixed",name:"_bsccompl_fixed",checked:false},
			{xtype:"label",itemId:"lblBsccompl_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",width:110},{xtype:"checkbox",itemId:"bsccompl_estado",name:"_bsccompl_estado",checked:true}
		]},
		{xtype:"comp_txtarea",itemId:"bsccompl_observ",name:"bsccompl_observ",fieldLabel:"Comentario"}
	]}
]}]
});