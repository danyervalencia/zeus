Ext.define("Siace.view.log.PedidosB",{extend:"Siace.view.PanB",alias:"widget.log_pedb",items:[
{xtype:"panb1",title:"Módulo de Requerimientos ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.ped_flga==98?"mx-letra-rojo-bold":(r.data.ped_flga==90?"mx-letra-rojo":"mx-letra-negro");}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Número",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
		{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},
		{dataIndex:"fase_nombre",text:"Fase",width:120},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,r,rowI,colI,str,view){return r.data.fase_feho;}},
		{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ajuste",text:"Ampl/Rebaj.",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ejecutado",text:"Ejecutado",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_mtemp",text:"Buena Pro",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"complog_tipped_abrev"},{xtype:"comp_nrotop",itemId:"ped_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},
		{xtype:"comp_cbotop",itemId:"filter",store:"array.FFAB",valueField:"ff",displayField:"code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{code}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Filtro",listConfig:{cls:"item00001",minWidth:50},value:"",width:50},
		{xtype:"comp_cbotop",itemId:"fase_id",valueField:"fase_id",displayField:"fase_abrev",fieldLabel:"&nbsp;Fase",tpl:"<tpl for='.'><div class='x-boundlist-item'>{fase_abrev}&nbsp;</div></tpl>",width:90}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btn",itemId:"btnEttr",disabled:true,iconCls:"icon_Invoice",text:"E.T./T.R."},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btn",itemId:"btnActivate",disabled:true,icon:"resources/icons/btnActivate.png",text:"Activar"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLP",border:false}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLPD",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},
			{dataIndex:"peddet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"peddet_preuni",text:"P.U.",align:"right",renderer:fext_FN(8),width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}
		]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]},            
	{xtype:"tabb1",itemId:"tabLC",hidden:true,title:"Cotizaciones",items:[
		{xtype:"comp_grid",itemId:"grdLC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return (r.data.coti_flga==98?"mx-letra-rojo":(r.data.coti_monto*1>0&&r.data.coti_monto*1==r.data.bp_monto*1?"mx-letra-azul":(r.data.bp_monto*1>0?"mx-letra-azul-bold":"mx-letra-negro")));}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"coti_documento",text:"Documento",width:75},{dataIndex:"coti_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"pers_ruc",text:"RUC",width:90},{dataIndex:"pers_nombre",text:"Razón Social",width:300},
			{dataIndex:"coti_vigencia",text:"V",align:"right",tooltip:"Validez",width:30},{dataIndex:"coti_plazo",text:"PE",align:"right",tooltip:"PlazodeEntrega",width:30},{dataIndex:"lugentr_abrev",text:"LE",tooltip:"LugardeEntrega",width:40},{dataIndex:"tippag_abrev",text:"TP",tooltip:"Tipo de Pago",width:45},
			{dataIndex:"coti_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"bp_monto",text:"BuenaPro",align:"right",renderer:fext_FN(2),width:90},
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5119},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnCuadro",disabled:true,icon:"resources/icons/btnComplementary.png",text:"Cuadro"}]},{xtype:"comp_pag",itemId:"pagLC",disabled:true},
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
			{dataIndex:"area_abrev",text:"U.O.",tooltip:"Unidad Orgánica",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:40},
			{dataIndex:"pers_ruc",text:"RUC",width:100},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"tippag_abrev",text:"TP",tooltip:"TipodePago",width:45},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},
			{dataIndex:"orden_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"orden_percep",text:"Percep.",align:"right",renderer:fext_FN(2),width:70}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5120},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLO",disabled:true}
	]}
]}]
});