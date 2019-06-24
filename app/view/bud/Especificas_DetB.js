Ext.define("Siace.view.bud.Especificas_DetB",{extend:"Siace.view.PanB",alias:"widget.bud_espedetb",items:[
{xtype:"panb1",title:"Módulo de Clasificadores Presupuestales ::.",width:"58%",items:[{xtype:"comp_grid",itemId:"grdBED",columns:[{xtype:"rownumberer",width:30},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"espedet_nombre",text:"Descripción",width:470},{dataIndex:"espedet_siaf",text:"SIAF",width:70},{dataIndex:"espedet_type",text:"T",width:30}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comp_cbotop",itemId:"tiptrans_code",store:"array.bud.TipTransAB",valueField:"tiptrans_code",displayField:"tiptrans_code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tiptrans_codename}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Tipo",listConfig:{cls:"item00001",minWidth:180},value:"",width:40},{xtype:"comp_cbotop",itemId:"gene_code",valueField:"gene_code",displayField:"gene_codigo",tpl:"<tpl for='.'><div class='x-boundlist-item'>{gene_codename}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Gen.",listConfig:{cls:"item00001",minWidth:250},disabled:true,width:50},
		{xtype:"comp_cbotop",itemId:"subgene_code",valueField:"subgene_code",displayField:"subgene_code",fieldLabel:"&nbsp;Sub Gen.",listConfig:{cls:"item00001",minWidth:200},tpl:"<tpl for='.'><div class='x-boundlist-item'>{subgene_codename}&nbsp;</div></tpl>",width:65},{xtype:"comp_txttop",itemId:"espedet_nombre",fieldLabel:"&nbsp;Descripción",maxLength:30,width:300}
	]},	
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagBED"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBTF",title:"Tareas",items:[
		{xtype:"comp_grid",itemId:"grdBTF",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",align:"center",width:50},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"tarea_nombre",text:"Descripción",width:300},{dataIndex:"tipgast_code",text:"T.G.",width:35},{dataIndex:"fftr_code",text:"FFTR",width:40},
			{dataIndex:"tareafte_pia",text:"PIA",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_pim",text:"PIM",align:"right",renderer:fext_FN(2),width:90},
			{dataIndex:"tareafte_ajuste",text:"Ajuste",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_otro",text:"Otro Ejercicio",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_egreso",text:"Egreso",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_saldo",text:"Saldo",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:68},layout:"vbox",items:[{xtype:"comp_dato",name:"gene_codename",fieldLabel:"Genérica"},{xtype:"comp_dato",name:"subgene_codename",fieldLabel:"SubGen."},{xtype:"comp_dato",name:"subgenedet_codename",fieldLabel:"SubGen. Det"},{xtype:"comp_dato",name:"espe_codename",fieldLabel:"Específica"},{xtype:"comp_dato",name:"espedet_codigo",fieldLabel:"Clasificador"},{xtype:"comp_dato",name:"espedet_nombre",fieldLabel:"Descripción"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_fuefin_code"}]},{xtype:"comp_pag",itemId:"pagBTF",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabBEDSC",hidden:true,title:"Cuentas Contables",items:[{xtype:"comp_grid",itemId:"grdBEDSC",columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",width:50},{dataIndex:"may_code",text:"Cuenta",width:50},{dataIndex:"subcta_code",text:"Sub Cuenta",width:80},{dataIndex:"subcta_nombre",text:"Descripción",width:400}]}],
	 dockedItems:[{xtype:"comppub_menu",value:2136},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:68},layout:"vbox",items:[{xtype:"comp_dato",name:"gene_codename",fieldLabel:"Genérica"},{xtype:"comp_dato",name:"subgene_codename",fieldLabel:"SubGen."},{xtype:"comp_dato",name:"subgenedet_codename",fieldLabel:"SubGen. Det"},{xtype:"comp_dato",name:"espe_codename",fieldLabel:"Específica"},{xtype:"comp_dato",name:"espedet_codigo",fieldLabel:"Clasificador"},{xtype:"comp_dato",name:"espedet_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagBEDSC",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabPBSED",hidden:true,title:"Bienes y/o Servicios",items:[{xtype:"comp_grid",itemId:"grdPBSED",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Codigo",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:400},{dataIndex:"unimed_nombre",text:"U.M.",width:100}]}],
	 dockedItems:[{xtype:"comppub_menu",value:2115},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:68},layout:"vbox",items:[{xtype:"comp_dato",name:"gene_codename",fieldLabel:"Genérica"},{xtype:"comp_dato",name:"subgene_codename",fieldLabel:"SubGen."},{xtype:"comp_dato",name:"subgenedet_codename",fieldLabel:"SubGen. Det"},{xtype:"comp_dato",name:"espe_codename",fieldLabel:"Específica"},{xtype:"comp_dato",name:"espedet_codigo",fieldLabel:"Clasificador"},{xtype:"comp_dato",name:"espedet_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comppub_bsc_codeab"},{xtype:"comppub_bsf_codeab"},{xtype:"comp_txttop",itemId:"bs_nombre",fieldCls:"txt00001",fieldLabel:"&nbsp;Descripción",maxLength:50,width:250}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagPBSED",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Requerimientos",items:[
		{xtype:"comp_grid",itemId: "grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Documento",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"",text:"Co",tooltip:"Componente",width:40},{dataIndex:"fftr_codigo",text:"FF",width:45},
			{dataIndex:"peddet_item",text:"Item",align:"right",width:40},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},
			{dataIndex:"peddet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"peddet_preuni",text:"P.U.",align:"right",renderer:fext_FN(6),width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2116},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:68},layout:"vbox",items:[{xtype:"comp_dato",name:"gene_codename",fieldLabel:"Genérica"},{xtype:"comp_dato",name:"subgene_codename",fieldLabel:"SubGen."},{xtype:"comp_dato",name:"subgenedet_codename",fieldLabel:"SubGen. Det"},{xtype:"comp_dato",name:"espe_codename",fieldLabel:"Específica"},{xtype:"comp_dato",name:"espedet_codigo",fieldLabel:"Clasificador"},{xtype:"comp_dato",name:"espedet_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"complog_tipped_abrev"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLOD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"area_abrev",text:"U.O.",tooltip:"Unidad Orgánica",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:45},
			{dataIndex:"expe_nro",text:"SIAF",width:70},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"ordendet_item",text:"Item",align:"right",width:40},
			{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},
			{dataIndex:"ordendet_cantid",align:"right",renderer:fext_FN(3),text:"Cantidad",width:85},{dataIndex:"ordendet_preuni",align:"right",renderer:fext_FN(6),text:"P.Unitario",width:90},{dataIndex:"ordendet_pretot",align:"right",renderer:fext_FN(2),text:"Importe",width:90},
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2117},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:68},layout:"vbox",items:[{xtype:"comp_dato",name:"gene_codename",fieldLabel:"Genérica"},{xtype:"comp_dato",name:"subgene_codename",fieldLabel:"SubGen."},{xtype:"comp_dato",name:"subgenedet_codename",fieldLabel:"SubGen. Det"},{xtype:"comp_dato",name:"espe_codename",fieldLabel:"Específica"},{xtype:"comp_dato",name:"espedet_codigo",fieldLabel:"Clasificador"},{xtype:"comp_dato",name:"espedet_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB",disabled:true},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLOD",disabled:true}
	]}
]}]
});