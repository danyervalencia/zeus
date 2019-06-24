Ext.define("Siace.view.log.IngresosB",{extend:"Siace.view.PanB",alias:["widget.log_ingb"],items:[
{xtype:"panb1",title:"Módulo de Recepciones ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLI",columns:[{xtype:"rownumberer",width:30},{dataIndex:"ing_documento",text:"Documento",width:100},{dataIndex:"ing_fecharec",text:"Recibido",align:"center",renderer:fext_FD(),width:80},{dataIndex:"alma_abrev",text:"Almac",width:50},{dataIndex:"tablex_documento",text:"Procedencia",width:100},
		{dataIndex:"area_abrev",text:"U.O.",tooltip:"Unidad Orgánica",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},
		{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"tipprocreg_abrev",text:"Tipo",width:40},{dataIndex:"ing_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"comppub_doc_abrevab"},{xtype:"comp_txttop",itemId:"ing_serie",fieldLabel:"&nbsp;Serie",maxLength:4,vtype:"onlyNumeric",width:40},{xtype:"comp_txttop",itemId:"ing_nro",fieldLabel:"&nbsp;Número",maxLength:8,vtype:"onlyNumeric",width:65},
		{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Proveedor",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search"},{xtype:"displayfield",itemId:"pers_nombre",hidden:true,fieldCls:"df00101"}]}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLI"}
 ],
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLID",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLID",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},
			{dataIndex:"ingdet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"ingdet_preuni",text:"P.U.",align:"right",renderer:fext_FN(6),width:90},{dataIndex:"ingdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ing_documento",fieldLabel:"Documento",labelWidth:65,width:190},{xtype:"comp_datofecha",name:"ing_fecha",fieldLabel:"Fecha",labelWidth:40}]},
			{xtype:"comp_dato",name:"alma_nombre",fieldLabel:"Almacén"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."}
		]}]},{xtype:"comp_pag",itemId:"pagLID",disabled:true}
	]}
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});