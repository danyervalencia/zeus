Ext.define("Siace.view.siaf.ExpedientesB",{extend:"Siace.view.PanB",alias:"widget.siaf_expeb",items:[
{xtype:"panb1",title:"Módulo de Expedientes SIAF ::.",width:"49%",items:[{xtype:"comp_grid",itemId:"grdSE",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",align:"center",width:50},{dataIndex:"expe_nro",align:"right",text:"Expe",width:70},{dataIndex:"expe_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"tipoper_code",text:"Oper",width:60},{dataIndex:"modcomp_code",text:"Mod.Cont.",width:60},{dataIndex:"expe_compr",text:"Compromiso",align:"right",renderer:fext_FN(2)},{dataIndex:"expe_devng",text:"Devengado",align:"right",renderer:fext_FN(2)},{dataIndex:"expe_giro",text:"Girado",align:"right",renderer:fext_FN(2)}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"expe_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagSE"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabSF",title:"Fases",items:[
		{xtype:"comp_grid",itemId:"grdSF",height:300,columns:[{xtype:"rownumberer",width:30},
			{dataIndex:"fase_code",align:"center",text:"F",width:25},{dataIndex:"certif_codigo",align:"center",text:"Certificado",width:110},
			{dataIndex:"doc_code",text:"Doc",sortable:false,width:35},{dataIndex:"doc_serie",text:"Serie",sortable:false,width:40},{dataIndex:"doc_num",text:"Número",sortable:false,width:100},{dataIndex:"doc_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
			{dataIndex:"rubr_codigo",text:"Rb",sortable:false,width:40},{dataIndex:"tippag_codigo",text:"TP",sortable:false,width:60},
			{dataIndex:"ctacte_year",text:"Año",sortable:false,width:40},{dataIndex:"banc_code",text:"Bco",sortable:false,width:40},{dataIndex:"ctacte_code",text:"Cta",sortable:false,width:40},{dataIndex:"mone_code",text:"Mo",sortable:false,width:35},{dataIndex:"expesec_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"estaenv_code",align:"center",text:"EE",sortable:false,width:30}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2118},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"expe_nro",fieldLabel:"Expediente",labelWidth:70,width:160},,{xtype:"comp_datofecha",name:"expe_fecha",fieldLabel:"Fecha",labelWidth:35}]},{xtype:"comp_dato",name:"tipoper_nombre",fieldLabel:"Tipo Oper."},{xtype:"comp_dato",name:"modcomp_nombre",fieldLabel:"Mod. Compra"}]}]},
			{xtype:"comp_grid",itemId:"grdSM",dock:"bottom",height:200,columns:[{xtype:"rownumberer",width:30},
				{dataIndex:"secfunc_code",align:"center",text:"S.F.",width:50},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"monto",text:"Importe",align:"right",renderer:fext_FN(2)},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",width:300},{dataIndex:"secfunc_codigo",align:"center",text:"Programática",width:250},{dataIndex:"secfunc_nombre",text:"Descripción Secuencia Funcional",width:500}
			]},
	 ]},
	{xtype:"tabb1",itemId:"tabSM",title:"Documentos",items:[
		/*{xtype:"comp_grid",itemId:"grdSM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"documento",text:"Documento",width:85},{dataIndex:"fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"secfunc_code",text:"S.F.",align:"center",width:50},{dataIndex:"fuefin_code",text:"Rub",align:"center",width:40},{dataIndex:"pers_nombre",text:"Proveedor",width:350},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},
			{dataIndex:"monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"montoc",text:"Compromiso",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"montoc",text:"Pagado",align:"right",renderer:fext_FN(2),width:90}
		]},*/
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2140},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"proy_code",fieldLabel:"S.N.I.P.",labelWidth:70,width:160},{xtype:"comp_dato",name:"actproy_code",fieldLabel:"SIAF",labelWidth:45,width:130},{xtype:"comp_datomonto",name:"proy_inversion",fieldLabel:"Inversión",labelWidth:55}]},{xtype:"comp_dato",name:"proy_nombre",fieldLabel:"Descripción"},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab",disabled:true},{xtype:"compbud_secfunc_code"},{xtype:"comppub_doc_abrevab"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagD",disabled:true}
	]}
]}]
});