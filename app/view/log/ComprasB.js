Ext.define("Siace.view.log.ComprasB",{extend:"Siace.view.PanB",alias:"widget.log_compb",requires:["Siace.view.comp.log.Tiporden_abrev"],items:[
{xtype:"panb1",title:"Módulo Registro de Compras ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"comp_documento",text:"Documento",width:120},{dataIndex:"comp_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"pers_nombre",text:"Proveedor",width:250},
		{dataIndex:"tablex_documento",text:"Procedencia",width:100},{dataIndex:"comp_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"comppub_doc_abrevab"},{xtype:"comp_txttop",itemId:"comp_serie",fieldLabel:"&nbsp;Serie",maxLength:4,vtype:"onlyNumeric",width:40},{xtype:"comp_txttop",itemId:"comp_nro",fieldLabel:"&nbsp;Número",maxLength:8,vtype:"onlyNumeric",width:65},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Proveedor",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPPS"},{xtype:"displayfield",itemId:"pers_nombre",hidden:true,fieldCls:"df00101"}]}
	]},		
	{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnAct",disabled:true,icon:"resources/icons/btnActivate.png",text:"Activar"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagLC"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLCD",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLCD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},
			{dataIndex:"compdet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"compdet_preuni",text:"P.U.",align:"right",renderer:fext_FN(6),width:90},{dataIndex:"compdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ing_documento",fieldLabel:"Documento",labelWidth:65,width:190},{xtype:"comp_datofecha",name:"ing_fecha",fieldLabel:"Fecha",labelWidth:40}]},
			{xtype:"comp_dato",name:"alma_nombre",fieldLabel:"Almacén"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."}
		]}]},{xtype:"comp_pag",itemId:"pagLCD",disabled:true}
	]}
]}]
});