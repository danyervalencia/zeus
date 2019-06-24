Ext.define("Siace.view.access.Header",{extend:"Ext.toolbar.Toolbar",alias:"widget.access_header",height:45,width:"100%",defaults:{margin:"-5 0 0 0"},margin:"-1 0 0 0",items:[
{xtype:"image",id:"ah_imgUnieje_logo",itemId:"ah_imgUnieje_logo",height:45,padding:"0 0 0 0",width:43},
{xtype:"container",layout:"vbox",style:"background-color:#FFFFFF;",width:5,items:[
	{xtype:"label",html:"<div class='titleHeader' style='font-size:12px;'>&nbsp;</div>",padding:"0 0 0 0"},
	{xtype:"label",html:"<div class='subtitleHeader'>&nbsp;</div>"},
	{xtype:"label",html:"<div class='subtitleHeader' style='height:15px;'>&nbsp;</div>"}
]},
{xtype:"container",layout:"vbox",style:"background-color:#FFFFFF;",width:500,items:[
	{xtype:"displayfield",id:"ah_lblUnieje_nombre",itemId:"ah_lblUnieje_nombre",fieldCls:"title_unieje",margin:"5 0 0 0", anchor:"100%"},
	{xtype:"displayfield",id:"ah_lblArea_nombre",itemId:"ah_lblArea_nombre",margin:"-6 0 -6 0",fieldCls:"title_area"},
	//{xtype:"displayfield",id:"ah_lblArea_nombre",itemId:"ah_lblArea_nombre",margin:"-6 0 0 0",style:"color:#990000 !important;font-family:arial,Tahoma,verdana;font-size:11px;"},
	{xtype:"label",html:"<div class='subtitleHeader' style='color:#0000A0;'>Tramite Documentario v2.0.5</div>"},
]},
{xtype:"container",flex:1,layout:{type:"vbox",align:"right"},style:"background-color:#FFFFFF;",items:[
	{xtype:"label",id:"ah_lblDate_server",itemId:"lblDate_server",padding:"5 4 0 0",style:"font-family:arial,Tahoma,verdana;font-size:11px;text-align:right;",text:"",width:"100%"},
	{xtype:"label",html:"<divclass='lbl0003'style='height:7px;'>&nbsp;</div>",margin:"-5 0 0 0"},
	{xtype:"container",layout:{type:"hbox",align:"right"},style:"background-color:#FFFFFF;",margin:"0 4 2 0",items:[
		{xtype:"hiddenfield",id:"ah_txtUsursess_key"},{xtype:"hiddenfield",id:"ah_txtUnieje_key"},{xtype:"hiddenfield",id:"ah_txtUsuracce_key"},{xtype:"hiddenfield",id:"ah_txtYear_id"},{xtype:"hiddenfield",id:"ah_txtUsur_key"},{xtype:"hiddenfield",id:"ah_txtArea_key"},{xtype:"hiddenfield",id:"ah_txtAlma_key"},
		{xtype:"displayfield",id:"ah_lblData_user",itemId:"lblData_user",value:"",style:"color:#990000 !important;font-family:arial,Tahoma,verdana;font-size:11px;text-align:right;"},
		{xtype:"displayfield",value:"&nbsp; &nbsp;",style:"font-family:arial,Tahoma,verdana;text-align:right;"},
		{xtype:"button",itemId:"btnLogout",text:"Cerrar Sesión",height:21,iconCls:"icon_logout_90",padding:"1 2 1 4"}
	]}
]}
]});