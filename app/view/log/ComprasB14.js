Ext.define("Siace.view.log.ComprasB14",{extend:"Siace.view.PanB",alias:"widget.log_compb14",requires:["Siace.view.comp.log.Tiporden_abrev"],items:[
{xtype:"panb1",title:"Módulo Servicios Básicos ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"tiporden_abrev",text:"T.O.",width:50},{dataIndex:"comp_documento",text:"Documento",width:120},{dataIndex:"comp_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
		{dataIndex:"fuefin_code",text:"Rb",align:"center",width:40},{dataIndex:"pers_nombre",text:"Proveedor",width:250},{dataIndex:"tablex_documento",text:"Orden",width:80},{dataIndex:"comp_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"complog_tiporden_abrev"},{xtype:"comp_nrotop",itemId:"comp_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},
	]},
	{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnAct",disabled:true,icon:"resources/icons/btnActivate.png",text:"Activar"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagLC"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tab1",title:"Presupuesto",items:[
		{xtype:"comp_grid",itemId:"grdLCDTF",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:85},{dataIndex:"area_nombre",text:"U. Orgánica",width:200}]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"comp_documento",fieldLabel:"Documento",labelWidth:65,width:200},{xtype:"comp_datofecha",name:"comp_fecha",fieldLabel:"Fecha",labelWidth:35,width:130},{xtype:"comp_datomonto",name:"comp_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"tiporden_nombre",fieldLabel:"Servicio"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagLCD",disabled:true}
	]}
]}]
});