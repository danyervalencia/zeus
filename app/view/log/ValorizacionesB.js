Ext.define("Siace.view.log.ValorizacionesB",{extend:"Siace.view.PanB",alias:["widget.log_valrzb"],items:[
{xtype:"panb1",title:"Módulo Valorizaciones ::.",width:"50%",items:[
	{xtype:"comp_grid",itemId:"grdLV",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.valrz_flga==98?"mx-letra-rojo-bold":(rec.data.valatend_id*1>0?"mx-letra-negro":"mx-letra-negro");}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"valrz_documento",text:"Documento",width:90},{dataIndex:"valrz_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"tablex_docnro",text:"Referencia",width:120},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fuefin_code",text:"FF",align:"center",width:35},{dataIndex:"valrz_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"valrz_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLV"}
 ]
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLVD",title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdLVD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tablex_documento",text:"Vale",width:60},{dataIndex:"tablex_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"motval_nombre",text:"Motivo",width:150},{dataIndex:"veh_placa",text:"Placa",width:80},{dataIndex:"valrzdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"valrz_documento",fieldLabel:"Documento",labelWidth:65,width:200},{xtype:"comp_datofecha",name:"valrz_fecha",labelWidth:35}]},
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"tablex_docnro",fieldLabel:"Referencia",labelWidth:65,width:200},{xtype:"comp_datofecha",name:"tablex_fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Fue. Financ."},
		]}]}
	]},
]}]
});