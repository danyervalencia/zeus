Ext.define("Siace.view.log.ViaticosB",{extend:"Siace.view.PanB",alias:"widget.log_viatb",items:[
{xtype:"panb1",title:"Módulo de Viáticos ::.",width:"60%",items:[
	{xtype:"comp_grid",itemId:"grdLV",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"viat_documento",text:"Número",width:55},{dataIndex:"viat_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},
	 	{dataIndex:"fase_nombre",text:"Fase",width:120},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,r,rowI,colI,str,view){return r.data.fase_feho;}},
		{dataIndex:"expe_nro",text:"SIAF",align:"right",width:65},{dataIndex:"viat_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:80},{dataIndex:"viat_rendido",text:"Rendido",align:"right",renderer:function(val,metaD,r,rowI,colI,str,view){return (r.data.viat_monto*1==r.data.viat_rendido?"":fjsFormatNumeric(r.data.viat_rendido,2));},width:80},
		{dataIndex:"indiv_apenom",text:"Comisionado",width:200},{dataIndex:"carg_nombre",text:"Cargo",width:150},{dataIndex:"dest_abrev",text:"Destino",width:100},
		{text:"Fecha Salida",align:"center",width:115,renderer:function(val,metaD,rec,rowI,colI,str,view){return Ext.Date.format(rec.data.viat_fechaini, "d/m/Y")+" &nbsp;"+rec.data.viat_horaini.substr(0,5);}},
		{text:"Fecha Retorno",align:"center",width:115,renderer:function(val,metaD,rec,rowI,colI,str,view){return Ext.Date.format(rec.data.viat_fechafin, "d/m/Y")+" &nbsp;"+rec.data.viat_horafin.substr(0,5);}},		
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"viat_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnActivate",disabled:true,icon:"resources/icons/btnActivate.png",text:"Activar"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnSiaf",disabled:true,icon:"resources/icons/siaf.png",text:"SIAF",hidden:true},{xtype:"comp_btn",itemId:"btnRebaja",disabled:true,icon:"resources/icons/form_delete.png",text:"Rebaja",hidden:true},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLV"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLVD",title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdLVD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"viatdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}]}],
 	 dockedItems:[
 	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"viat_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"viat_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"viat_rendido",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"trabj_codename",fieldLabel:"Comisionado"},{xtype:"comp_dato",name:"viat_siaf",fieldLabel:"S.I.A.F."}
		]}]},{xtype:"comp_pag",itemId:"pagLVD",disabled:true}
	]}
]}]
});