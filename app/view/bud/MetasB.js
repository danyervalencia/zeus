Ext.define("Siace.view.bud.MetasB",{extend:"Siace.view.PanB",alias:"widget.bud_metab",items:[
{xtype:"panb1",title:"Módulo de Sucencias Funcionales ::.",width:"49%",items:[{xtype:"comp_grid",itemId:"grdBM",columns:[{xtype:"rownumberer",width:30},{dataIndex:"secfunc_code",text:"S.F.",align:"center",width:45},{dataIndex:"proysnip_id",align:"right",text:"SNIP",width:70},{dataIndex:"secfunc_nombre",text:"Descripción",width:1000},{dataIndex:"secfunc_codigo",text:"Programática",width:250}]}],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[
 		{xtype:"comppub_year_code"},{xtype:"comp_cbotop",itemId:"func_code",valueField:"func_code",displayField:"func_code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{func_code}&nbsp;&nbsp;{func_nombre}</div></tpl>",fieldLabel:"&nbsp;Función",listConfig:{cls:"item00001",minWidth:350},width:50},
		{xtype:"comp_txttop",itemId:"actproy_code",fieldLabel:"&nbsp;SIAF",maxLength:8,width:80},{xtype:"comp_txttop",itemId:"secfunc_nombre",fieldLabel:"&nbsp;Descripción",maxLength:50,width:250}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagBM"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabSG",title:"SIAF",items:[
		{xtype:"comp_grid",itemId:"grdSG",columns:[{xtype:"rownumberer",width:30},{dataIndex:"fuefin_code",text:"Rub",width:40},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},
			{dataIndex:"gast_pia",align:"right",renderer:fext_FN(2),text:"PIA",width:100},{dataIndex:"gast_modif",align:"right",renderer:fext_FN(2),text:"Modificación",width:100},{dataIndex:"gast_pim",align:"right",renderer:fext_FN(2),text:"P.I.M.",width:100},
			{dataIndex:"gast_ejec",align:"right",renderer:fext_FN(2),text:"Ejecución",width:100},{dataIndex:"gast_certif",align:"right",renderer:fext_FN(2),text:"Certificado",width:100},{dataIndex:"gast_compromiso",align:"right",renderer:fext_FN(2),text:"Compromiso",width:100},{dataIndex:"gast_devengado",align:"right",renderer:fext_FN(2),text:"Devengado",width:100},{dataIndex:"gast_girado",align:"right",renderer:fext_FN(2),text:"Girado",width:100},{dataIndex:"gast_pagado",align:"right",renderer:fext_FN(2),text:"Pagado",width:100}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2118},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:70,width:180},{xtype:"comp_dato",name:"",fieldLabel:"Importe",labelWidth:60}]},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"compbud_fuefin_code"},{xtype:"compbud_tiprecur_code",disabled:true}]},{xtype:"comp_pag",itemId:"pagSG",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabBTF",hidden:true,title:"Presupuesto",items:[
		{xtype:"comp_grid",itemId:"grdBTF",columns:[{xtype:"rownumberer",width:30},{dataIndex:"",align:"center",text:"C",width:35},{dataIndex:"fftr_codigo",text:"FF",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"espedet_nombre",text:"Descripción",width:350},
			{dataIndex:"tareafte_pia",align:"right",renderer:fext_FN(2),text:"PIA",width:100},{dataIndex:"tareafte_pim",align:"right",renderer:fext_FN(2),text:"PIM",width:100},
			{dataIndex:"tareafte_egreso",align:"right",renderer:fext_FN(2),text:"Egreso",width:100},{dataIndex:"tareafte_saldo",align:"right",renderer:fext_FN(2),text:"Saldo",width:100}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2118},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:70,width:180},{xtype:"comp_dato",name:"",fieldLabel:"Importe",labelWidth:60}]},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"compbud_fuefin_code"},{xtype:"compbud_tiprecur_code",disabled:true}]},{xtype:"comp_pag",itemId:"pagBTF",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabBTA",hidden:true,title:"Unidades Orgánicas",items:[
		{xtype:"comp_grid",itemId:"grdBTA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"area_nombre",text:"Unidad Orgánica",flex:1},{dataIndex:"area_abrev",text:"Abrev",width:70},{dataIndex:"",width:40}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2119},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:70,width:180},{xtype:"comp_dato",name:"",fieldLabel:"Importe",labelWidth:60}]},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},{xtype:"comp_pag",itemId:"pagBTA",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabBTUA",hidden:true,title:"Usuarios",items:[
		{xtype:"comp_grid",itemId:"grdBTUA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"usuracce_id",text:"Ficha",width:60},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",width:250},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:'tarea_codigo',text:'Tarea',align:'center',width:70},{dataIndex:"cargusur_nombre",text:"Cargo",width:120},{dataIndex:"usur_login",text:"Login",width:100},{dataIndex:"tireq_abrev03",text:"Req",width:60},{dataIndex:"",text:"C.Chica",width:50}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2120},{xtype:"comp_cboopc"},{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:70,width:180},{xtype:"comp_dato",name:"",fieldLabel:"Importe",labelWidth:60}]},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},{xtype:"comp_pag",itemId:"pagBTUA",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Pedidos",items:[
		{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.ped_flga==98?"mx-red-b":(r.data.ped_flga==90?"mx-red":"mx-black");}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Documento",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"area_abrev",text:"U.O.",tooltip:" Unidad Orgánica ",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"FF",width:45},{dataIndex:"fase_nombre",text:"Fase",width:120},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,r,rowI,colI,str,view){return r.data.fase_feho;}},
			{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ajuste",text:"Ampl/Rebaj.",align:"right",renderer:fext_FN(2),width:90},{dataIndex:'pedtareafte_ejecutado',text:'Ejecutado',align:'right',renderer:fext_FN(2),width:90},{dataIndex:'pedtareafte_mtemp',text:'Buena Pro',align:'right',renderer:fext_FN(2),width:90},{dataIndex:"",text:"Saldo",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2121},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:70,width:180},{xtype:"comp_dato",name:"",fieldLabel:"Importe",labelWidth:60}]},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_code",hidden: true},{xtype:"complog_tipped_abrev",disabled:true},{xtype:"comppub_area_abrev"},{xtype:"compbud_tipgast_code",disabled:true}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLP",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"tiporden_code",text:"Proc",tooltip:" Procedencia ",width:40},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:80},{dataIndex:"fftr_codigo",text:"FF",width:40},{dataIndex:"ordenproc_documentos",text:"Referencias",width:90},{dataIndex:"pers_nombre",text:"Proveedor",width:250},{dataIndex:"expe_nro",text:"SIAF",width:70},
			{dataIndex:"orden_monto",align:"right",renderer:fext_FN(2),text:"Importe",width:90},{dataIndex:"orden_percep",align:"right",renderer:fext_FN(2),text:"Percep",width:70}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2122},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:70,width:180},{xtype:"comp_dato",name:"",fieldLabel:"Importe",labelWidth:60}]},{xtype:"comp_dato",name:"func_codename",fieldLabel:"Función"},{xtype:"comp_dato",name:"prog_codename",fieldLabel:"Programa"},{xtype:"comp_dato",name:"subprog_codename",fieldLabel:"SubPrograma"},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_code",hidden: true},{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB"},{xtype:"compbud_tipgast_code",disabled:true},{xtype:"comppub_area_abrev"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLO",disabled:true}
	]}
]}]
});