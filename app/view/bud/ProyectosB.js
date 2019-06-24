Ext.define("Siace.view.bud.ProyectosB",{extend:"Siace.view.PanB",alias:"widget.bud_proyb",items:[
{xtype:"panb1",title:"Módulo de Proyectos ::.",width:"49%",items:[{xtype:"comp_grid",itemId:"grdBP",columns:[{xtype:"rownumberer",width:30},{dataIndex:"proy_code",text:"SNIP",align:"right",width:65},{dataIndex:"actproy_code",align:"right",text:"SIAF",width:75},{dataIndex:"proy_nombre",text:"Descripción",width:1000}]}],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[
 		{xtype:"comp_nrotop",itemId:"proy_code",fieldLabel:"&nbsp;SNIP",maxLength:8},{xtype:"comp_nrotop",itemId:"actproy_code",fieldLabel:"&nbsp;SIAF",maxLength:8},{xtype:"comp_cbotop",itemId:"func_code",valueField:"func_code",displayField:"func_code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{func_code}&nbsp;&nbsp;{func_nombre}</div></tpl>",fieldLabel:"&nbsp;Función",listConfig:{cls:"item00001",minWidth:350},width:50},
		{xtype:"comp_txttop",itemId:"proy_nombre",fieldLabel:"&nbsp;Descripción",maxLength:50,width:250}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagBP"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBM",title:"Metas",items:[
		{xtype:"comp_grid",itemId:"grdSM",columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",align:"center",width:50},{dataIndex:"secfunc_code",text:"S.F.",width:45},{dataIndex:"fina_nombre",text:"Finalidad",width:400},{dataIndex:"secfunc_codigo",text:"Programática",width:250},
			{dataIndex:"metafte_pia",align:"right",renderer:fext_FN(2),text:"PIA",width:100},{dataIndex:"metafte_ampl",align:"right",renderer:fext_FN(2),text:"Ampliación",width:100},{dataIndex:"metafte_cred",align:"right",renderer:fext_FN(2),text:"Crédito",width:100},{dataIndex:"metafte_modif",align:"right",renderer:fext_FN(2),text:"Modficación",width:100},
			{dataIndex:"metafte_pim",align:"right",renderer:fext_FN(2),text:"PIM",width:100},{dataIndex:"metafte_certif",align:"right",renderer:fext_FN(2),text:"Certificado",width:100},{dataIndex:"metafte_compr",align:"right",renderer:fext_FN(2),text:"Compromiso",width:100},{dataIndex:"metafte_deveng",align:"right",renderer:fext_FN(2),text:"Devengado",width:100},{dataIndex:"metafte_giro",align:"right",renderer:fext_FN(2),text:"Girado",width:100},{dataIndex:"metafte_pago",align:"right",renderer:fext_FN(2),text:"Pagado",width:100}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2118},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"proy_code",fieldLabel:"S.N.I.P.",labelWidth:70,width:160},{xtype:"comp_dato",name:"actproy_code",fieldLabel:"SIAF",labelWidth:45,width:130},{xtype:"comp_datomonto",name:"proy_inversion",fieldLabel:"Inversión",labelWidth:55}]},{xtype:"comp_dato",name:"proy_nombre",fieldLabel:"Descripción"},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab",disabled:true}]},{xtype:"comp_pag",itemId:"pagSM",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabD",title:"Documentos",items:[//hidden:true,
		{xtype:"comp_grid",itemId:"grdD",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"documento",text:"Documento",width:85},{dataIndex:"fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"secfunc_code",text:"S.F.",align:"center",width:50},{dataIndex:"fuefin_code",text:"Rub",align:"center",width:40},{dataIndex:"pers_nombre",text:"Proveedor",width:350},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},
			{dataIndex:"monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"montoc",text:"Compromiso",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"montoc",text:"Pagado",align:"right",renderer:fext_FN(2),width:90}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2140},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"proy_code",fieldLabel:"S.N.I.P.",labelWidth:70,width:160},{xtype:"comp_dato",name:"actproy_code",fieldLabel:"SIAF",labelWidth:45,width:130},{xtype:"comp_datomonto",name:"proy_inversion",fieldLabel:"Inversión",labelWidth:55}]},{xtype:"comp_dato",name:"proy_nombre",fieldLabel:"Descripción"},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab",disabled:true},{xtype:"compbud_secfunc_code"},{xtype:"comppub_doc_abrevab"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabDD",title:"Detalle de Documento",items:[
		{xtype:"comp_grid",itemId:"grdDD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:120},{dataIndex:"cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:90},{dataIndex:"preuni",text:"P.U.",align:"right",renderer:fext_FN(6),width:105},{dataIndex:"pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"may_code",text:"Cuenta",width:50},{dataIndex:"subcta_code",text:"Sub Cuenta",width:80}]},
	 ],
	 dockedItems:[
		{xtype:"comp_grid",itemId:"grdTF",dock:"bottom",height:100,columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",width:400}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"siaf",fieldLabel:"S.I.A.F."}
		]}]},{xtype:"comp_pag",itemId:"pagTF",hidden:true}
	]}
]}]
});