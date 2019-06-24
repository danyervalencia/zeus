Ext.define("Siace.view.log.PedidosAtt",{extend:"Siace.view.WindowBrowse",alias:"widget.log_pedatt",closable:true,iconCls:"icon_Attach",title:"Archivos Adjuntos",width:250,items:[{xtype:"form",border:false,layout:"vbox",items:[
{xtype:"hiddenfield",itemId:"pedettr_key",name:"pedettr_key"},{xtype:"hiddenfield",itemId:"pedettr_file1",name:"pedettr_file1"},{xtype:"hiddenfield",itemId:"pedettr_file2",name:"pedettr_file2"},{xtype:"hiddenfield",itemId:"ped_documento"},{xtype:"hiddenfield",itemId:"doc_abrev"},
{xtype:"displayfield",itemId:"ped_document",fieldCls:"df00105",padding:"10 0 -5 0",width:"100%"},{xtype:"displayfield",fieldCls:"df00105",padding:"-5 0 0 0",value:fjsRepeat("=",19),width:"100%"},
{xtype:"container",layout:"hbox",margin:"10 0 10 0",width:"100%",items:[
	{xtype:"displayfield",flex:1},{xtype:"comp_btnPdf",itemId:"btnF1",disabled:true,text:""},
	{xtype:"displayfield",flex:1},{xtype:"comp_btnPdf",itemId:"btnF2",disabled:true,text:""},{xtype:"displayfield",flex:1}
]}
]}]});