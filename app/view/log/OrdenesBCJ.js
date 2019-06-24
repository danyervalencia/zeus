Ext.define("Siace.view.log.OrdenesBCJ",{extend:"Siace.view.WinB",alias:"widget.log_ordenbcj",requires:["Siace.view.comp.log.Tiporden_name"],icon:"resources/icons/generate.png",title:"&nbsp;Canje de Documentos a Orden ::.",width:750,items:[
{xtype:"comp_grid",itemId:"grdLC",height:200,selType:"checkboxmodel",selModel:{mode:"MULTI",injectCheckbox:0},columns:[
	{xtype:"rownumberer",width:30},{dataIndex:"comp_documento",text:"Documento",width:120},{dataIndex:"comp_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
	{dataIndex:"secfunc_code",text:"SecFunc",align:"center",width:60},{dataIndex:"fuefin_code",text:"Rb",align:"center",width:40},{dataIndex:"pers_nombre",text:"Proveedor",width:270},{dataIndex:"comp_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:95}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",style:"background-color:#FFFFFF;",items:[{xtype:"comppub_year_code"},{xtype:"complog_tiporden_name"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"}]},
	{xtype:"comp_toolbtn",style:"background-color:#FFFFFF;",items:[{xtype:"comp_btn",itemId:"btnGO",icon:"resources/icons/generate.png",text:"Generar Orden de Servicio"},{xtype:"comp_btnExit",disabled:false},{xtype:"displayfield",flex:1},
		{xtype:"comp_curr",itemId:"monto",disabled:true,fieldLabel:"Total Importe de Orden",labelWidth:120,value:0,width:220},{xtype:"displayfield",width:8}]},{xtype:"comp_pag",itemId:"pagLC"}
 ]
}
]});