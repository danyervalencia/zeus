Ext.define("Siace.view.pub.Bienes_ServsB",{extend:"Siace.view.PanB",alias:"widget.pub_bsb",items:[
{xtype:"panb1",title:"Módulo de Bienes y Servicios ::.",width:"58%",items:[
	{xtype:"comp_grid",itemId:"grdPBS",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.bs_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",flex:1},{dataIndex:"unimed_abrev",text:"U.M.",tooltip:"Unidad de Medida",width:50}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comppub_bsc_codeab"},{xtype:"comppub_bsf_codeab"},{xtype:"comp_txttop",itemId:"bs_nombre",fieldCls:"txt00001",fieldLabel:"&nbsp;Descripción",maxLength:50,width:250},{xtype:"comp_cbotop",itemId:"espedet_id",valueField:"espedet_id",displayField:"espedet_codigo",fieldLabel:"&nbsp;Clasificador",listConfig:{cls:"item00001",minWidth:600},tpl:"<tpl for='.'><div class='x-boundlist-item'>{espedet_codename}&nbsp;</div></tpl>",width:100}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagPBS"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabPBSED",title:"Clasificadores",items:[
		{xtype:"comp_grid",itemId:"grdPBSED",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.bsespedet_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"espedet_nombre",text:"Descripción",width:350},{dataIndex:"espedet_siaf",text:"",width:80}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1127},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"},{xtype:"comp_dato",name:"bs_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPBSED",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Pedidos",items:[
		{xtype:"comp_grid",itemId:"grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Documento",width:80},{dataIndex:"ped_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:45},{dataIndex:"peddet_item",text:"Item",align:"right",width:40},{dataIndex:"peddet_cantid",align:"right",renderer:fext_FN(3),text:"Cantid",width:85},{dataIndex:"peddet_preuni",align:"right",renderer:fext_FN(6),text:"P.U.",width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1135},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"},{xtype:"comp_dato",name:"bs_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_doc_abrevab"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLC",hidden:true,title:"Cotizaciones",items:[
		{xtype:"comp_grid",itemId:"grdLCD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"coti_documento",text:"Documento",width:75},{dataIndex:"coti_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:45},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"ped_documento",text:"Referencia",width:85},
			{dataIndex:"cotidet_cantid",align:"right",renderer:fext_FN(3),text:"Cantidad",width:90},{dataIndex:"cotidet_preuni",align:"right",renderer:fext_FN(6),text:"P.U.",width:90}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1136},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"},{xtype:"comp_dato",name:"bs_nombre",fieldLabel:"Descripción"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnProvider",disabled:true,iconCls:"icon_Query",text:"Proveedor"}]},{xtype:"comp_pag",itemId:"pagLCD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLOD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:95},{dataIndex:"orden_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"area_abrev",text:"U.O.",tooltip:"Unidad Orgánica",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:45},
			{dataIndex:"expe_nro",text:"SIAF",width:70},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"",text:"Req.",align:"right",width:80},{dataIndex:"ordendet_item",text:"Item",align:"right",width:40},
			{dataIndex:"ordendet_cantid",align:"right",renderer:fext_FN(3),text:"Cantidad",width:85},{dataIndex:"ordendet_preuni",align:"right",renderer:fext_FN(6),text:"P.Unitario",width:90},{dataIndex:"ordendet_pretot",align:"right",renderer:fext_FN(2),text:"Importe",width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}
		]}
	 ],
	 dockedItems: [{xtype:"comppub_menu",value:1137},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"},{xtype:"comp_dato",name:"bs_nombre",fieldLabel:"Descripción"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"},{xtype:"comp_btn",itemId:"btnProvider",disabled:true,iconCls:"icon_Query",text:"Proveedor"}]},{xtype:"comp_pag",itemId:"pagLOD",disabled:true}
	]}
]}]
});