Ext.define("Siace.view.log.PlanillasOK",{extend:"Siace.view.WinOk",alias:"widget.log_planok",width:250,items:[
{xtype:"form",border:false,layout:"vbox",items:[
{xtype:"container",layout:"vbox",margin:"15 0 5 0", width: "100%",items: [
	{xtype:"label",itemId:"doc_nombre",width:"100%",style:{color:"#990000",fontFamily:"Arial Narrow",fontSize:"14px",fontWeight:"bold",textAlign:"center"}},
	{xtype:"label",text:fjsRepeat("=",30),width:"100%",style:{color:"#990000",fontFamily:"Arial Narrow",fontSize:"11px",fontWeight:"bold",textAlign:"center"}},
	{xtype:"label",itemId:"documento",margin:"15 0 20 0",width:"100%",style:{color:"#990000",fontFamily:"Arial Narrow",fontSize:"15px",fontWeight:"bold",textAlign:"center"}}
]}]}]
});