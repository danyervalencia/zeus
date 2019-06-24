Ext.define("Siace.view.siaf.Sub_CuentaB",{extend:"Siace.view.PanB",alias:"widget.siaf_subctab",items:[
{xtype:"panb1",title:"Móduño de Cuentas Contables",width:"58%",items:[{xtype:"comp_grid",itemId:"grdSSC",columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",width:50},{dataIndex:"may_code",text:"Cuenta",width:50},{dataIndex:"subcta_code",text:"Sub Cuenta",width:80},{dataIndex:"subcta_nombre",text:"Descripción",width:470},{dataIndex:"espedet_siaf",text:"SIAF",width:70},{dataIndex:"espedet_type",text:"T",width:30}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"comp_cbotop",itemId:"may_code",valueField:"may_code",displayField:"may_code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{may_codename}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Cuenta",listConfig:{cls:"item00001",minWidth:450},width:65},
		{xtype:"comp_txttop",itemId:"subcta_nombre",fieldLabel:"&nbsp;Descripción",maxLength:30,width:300}
	]},	
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagSSC"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBEDSC",title:"Clasificador",items:[{xtype:"comp_grid",itemId:"grdBEDSC",columns:[{xtype:"rownumberer",width:30},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"espedet_nombre",text:"Descripción",width:400}]}],
	 dockedItems:[{xtype:"comppub_menu",value:2136},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"year_id",fieldLabel:"Año",labelWidth:65,width:160},{xtype:"comp_dato",name:"natur_nombre",fieldLabel:"Naturaleza",labelWidth:60}]},{xtype:"comp_dato",name:"may_codename",fieldLabel:"Cuenta"},{xtype:"comp_dato",name:"subcta_code",fieldLabel:"Sub Cuenta"},{xtype:"comp_dato",name:"subcta_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagBEDSC",disabled:true}
	]},
]}]
});