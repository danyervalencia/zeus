Ext.define("Siace.view.access.MainPanel",{extend:"Ext.tab.Panel",alias:"widget.access_mainpanel",activeTab:0,items:[
{xtype:"panel",name:"mainPanel",closable:false,iconCls:"icon_home",title:"Inicio",items:[
	{xtype:"container",layout:"hbox",margin:"10 0 0 10",width:"100%",items:[
		{xtype:"comp_btnPdf",itemId:"ah_btnManual",text:" Descargar Manual del Usuario "},{xtype:"displayfield",flex:1},
		//{xtype:"image",height:450,src:"resources/images/letizia.jpg",width:350},{xtype:"displayfield",width:20}
	]}
]}
]});