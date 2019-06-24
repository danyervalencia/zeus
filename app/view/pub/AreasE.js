Ext.define("Siace.view.pub.AreasE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_areae",width:700,items:[
{xtype:"form",border:true,bodyPadding:8,defaults:{labelWidth:70,width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"fieldcontainer",fieldLabel:"Documento",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comppub_doc_nombre",store:"array.DocOrden",fieldLabel:"",margin:"0 4 0 0",width:160},{xtype:"comp_txttop",itemId:"orden_nro",align:"center",width:60},{xtype:"comp_datetop",itemId:"orden_fecha",name:"orden_fecha",allowBlank:false,fieldLabel:""},{xtype:"comp_btn_imgsearch",itemId:"btnOrden_search"}]},
	{xtype:"comppub_loc_codename",name:"loc_key",editable:true,fieldLabel:"Para"},
	{xtype:"comppub_area_nombre",itemId:"parent_key",name:"parent_key",editable:true,fieldLabel:"C.C."},
	{xtype:"comp_txt",itemId:"area_nombre",name:"area_nombre",allowBlank:false,fieldLabel:"Asunto",maxLength:80},
	//{xtype:"comp_txt",itemId:"area_abrev",name:"area_abrev",allowBlank:false,fieldLabel:"Asunto",maxLength:10,width:150},
	{xtype:"htmleditor",height:350},
	{xtype:"comp_txtarea",itemId:"area_observ",name:"area_observ",fieldLabel:"Comentario"}
]}]
});