Ext.define("Siace.view.pub.AreasB",{extend:"Siace.view.PanB",alias:"widget.pub_areab",items:[
{xtype:"panb1",title:"Módulo de Unidades Orgánicas ::.",width:"52%",items:[{xtype:"comp_grid",itemId:"grdPA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"area_nombre",text:"Nombre",width:350},{dataIndex:"area_abrev",text:"Abrev",width:70},{dataIndex:"parent_nombre",text:"Dependencia",width:350},{dataIndex:"loc_codename",text:"Local",width:350},{dataIndex:"tiparea_id",text:"Nivel",align:"right",width:50}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comp_txttop",itemId:"area_nombre",fieldLabel:"&nbsp;Nombre",enableKeyEvents:true,maxLength:40,width:250},{xtype:"comppub_loc_codename",name:"loc_key",editable:true,fieldLabel:"&nbsp;Local",labelAlign:"top",width:200}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPA"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBTA",title:"Tareas",items:[
		{xtype:"comp_grid",itemId:"grdBTA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",align:"center",width:50},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"tarea_nombre",text:"Descripción",width:300},{dataIndex:"tipgast_code",text:"T.G.",width:35},{dataIndex:"tipespedet_code",text:"T.C.",width:35},{dataIndex:"secfunc_nombre",text:"Secuencia Funcional",sortable:false,width:1000}]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1128},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"parent_nombre",fieldLabel:"Dependencia"},{xtype:"comp_dato",name:"loc_codename",fieldLabel:"Local"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"}]},{xtype:"comp_pag",itemId:"pagBTA",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabPUA",hidden:true,title:"Usuarios",items:[
		{xtype:"comp_grid",itemId:"grdPUA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"usuracce_id",text:"Ficha",width:60},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",width:250},{dataIndex:"cargusur_nombre",text:"Cargo",width:110},{dataIndex:"tireq_abrev03",text:"Req.",width:60},{dataIndex:"ticch_abrev03",text:"CCh.",width:60},{dataIndex:"indiv_dni",text:"D.N.I.",width:70}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1129},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"parent_nombre",fieldLabel:"Dependencia"},{xtype:"comp_dato",name:"loc_codename",fieldLabel:"Local"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comp_cbotop",itemId:"cargusur_id",valueField:"cargusur_id",displayField:"cargusur_nombre",editable:true,fieldLabel:"&nbsp;Cargo",tpl:"<tpl for='.'><div class='x-boundlist-item'>{cargusur_nombre}&nbsp;</div></tpl>",width:160}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew",disabled:true},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnTarea",disabled:true,icon:"resources/icons/btnAccess.png",text:"Tareas"},{xtype:"comp_btn",itemId:"btnMenu",icon:"resources/icons/btnMenu.png",text:"Menú"}]},{xtype:"comp_pag",itemId:"pagPUA",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLFA",hidden:true,title:"Fases",items:[{xtype:"comp_grid",itemId:"grdLFA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"doc_abrev",text:"Doc",width:45},{dataIndex:"fase_nombre",text:"Fase",width:120},{dataIndex:"cargusur_nombre",text:"Cargo",width:120},{dataIndex:"faseacce_ambito",text:"Ambito",width:160},{dataIndex:"fasen_nombre",text:"Fase (*)",width:120},{dataIndex:"faseacce_vobo",text:"VB",width:35}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1130},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"parent_nombre",fieldLabel:"Dependencia"},{xtype:"comp_dato",name:"loc_codename",fieldLabel:"Local"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagLFA",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Requerimientos",items:[
		{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Documento",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"tarea_codigo",text: "Tarea", align:"center",width:70},{dataIndex:"fftr_codigo",text:"FF",width:45},
			{dataIndex:"fase_nombre",text:"Fase",width:120},{text:"Recibido",width:100,renderer:function(val,mD,r,rowI,colI,str,view){return Ext.Date.format(r.data.fase_fecha,"d/m")+" = "+r.data.fase_hora.substr(0,5);}},
			{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ajuste",text:"Ampl/Rebaj.",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ejecutado",text:"Ejecutado",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"",text:"Saldo",align:"right",renderer:fext_FN(2),width:90},
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1131},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"parent_nombre",fieldLabel:"Dependencia"},{xtype:"comp_dato",name:"loc_codename",fieldLabel:"Local"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comp_cbotop",itemId:"tipped_id",valueField:"tabgen_id",displayField:"tabgen_abrev",fieldLabel:"&nbsp;Tipo",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_abrev}&nbsp;</div></tpl>",disabled:true,listConfig:{cls:"item00001",minWidth:60},width: 60},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLP",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"tiporden_code",text:"Proc",tooltip:" Procedencia ",width:40},
			{dataIndex:"tarea_codigo",text:"Tarea",width:80},{dataIndex:"fftr_codigo",text:"FF",width:40},
			{dataIndex:"ordenproc_documentos",text:"Referencias",width:90},{dataIndex:"pers_nombre",text:"Proveedor",width:250},{dataIndex:"tippag_abrev",text:"TP",tooltip:"TipodePago",width:45},{dataIndex:"expe_nro",text:"SIAF",width:70},
			{dataIndex:"orden_monto",align:"right",renderer:fext_FN(2),text:"Importe",width:90},{dataIndex:"orden_percep",align:"right",renderer:fext_FN(2),text:"Percep",width:70}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1134},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"parent_nombre",fieldLabel:"Dependencia"},{xtype:"comp_dato",name:"loc_codename",fieldLabel:"Local"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLO",disabled:true}
	]}
]}]
});