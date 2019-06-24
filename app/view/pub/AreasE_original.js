Ext.define("Siace.view.pub.AreasE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_areae",width:500,items:[
{xtype:"form",border:true,bodyPadding:8,defaults:{labelWidth:70,width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"comppub_loc_codename",name:"loc_key",editable:true},{xtype:"comppub_area_nombre",itemId:"parent_key",name:"parent_key",editable:true,fieldLabel:"Dependencia"},
	{xtype:"comp_txt",itemId:"area_nombre",name:"area_nombre",allowBlank:false,fieldLabel:"Nombre",maxLength:80},{xtype:"comp_txt",itemId:"area_abrev",name:"area_abrev",allowBlank:false,fieldLabel:"Abrev.",maxLength:10,width:150},{xtype:"comp_txtarea",itemId:"area_observ",name:"area_observ",fieldLabel:"Comentario"}
]}]
});