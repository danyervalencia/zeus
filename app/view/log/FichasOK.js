Ext.define("Siace.view.log.FichasOK",{extend:"Siace.view.WindowOk",alias:"widget.log_fichok",width:250,items:[
{xtype:"form",border:false,layout:"vbox",items:[
{xtype:"container",layout:"vbox",margin:"15 0 5 0",width:"100%",items:[
	{xtype:"hiddenfield",itemId:"doc_abrev",disabled:true},{xtype:"hiddenfield",itemId:"fich_documento",disabled:true},
	{xtype:"label",itemId:"doc_nombre",width:"100%",style:{color:"#990000",fontFamily:"ArialNarrow",fontSize:"14px",fontWeight:"bold",textAlign:"center"}},
	{xtype:"label",text:fjsRepeat("=",28),width:"100%",style:{color:"#990000",fontFamily:"arial narrow",fontSize:"11px",fontWeight:"bold",textAlign:"center"}},
	{xtype:"label",itemId:"fich_document",margin:"15 0 20 0",width:"100%",style:{color:"#990000",fontFamily:"arial narrow",fontSize:"15px",fontWeight:"bold",textAlign:"center"}}
]}
]}]});