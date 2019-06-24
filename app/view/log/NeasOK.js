Ext.define("Siace.view.log.NeasOK",{extend:"Siace.view.WindowOk",alias:"widget.log_neaok",width:250,items:[{xtype:"form",border:false,layout:"vbox",items:[
{xtype:"container",layout:"vbox",margin:"15 0 5 0",width:"100%",items:[
	{xtype:"hiddenfield",itemId:"doc_abrev",disabled:true},{xtype:"hiddenfield",itemId:"nea_documento",disabled:true},
	{xtype:"label",itemId:"doc_nombre",width:"100%",style:{color:"#990000",fontFamily:"ArialNarrow",fontSize:"14px",fontWeight:"bold",textAlign:"center"}},
	{xtype:"label",text:fjsRepeat("=",34),width:"100%",style:{color:"#990000",fontFamily:"arial narrow",fontSize:"11px",fontWeight:"bold",textAlign:"center"}},
	{xtype:"label",itemId:"nea_document",margin:"15 0 20 0",width:"100%",style:{color:"#990000",fontFamily:"arial narrow",fontSize:"15px",fontWeight:"bold",textAlign:"center"}}
]}
]}]});