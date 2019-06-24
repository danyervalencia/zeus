Ext.define("Siace.view.log.PedidosBC",{extend:"Siace.view.PanB",alias:["widget.log_pedbc"],items:[
{xtype:"panb1",title:"Módulo Control de Requerimiento ::.",width:"53%",items:[
	{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Registro",sortable:true,width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",renderer:fext_FD(),sortable:true,width:80},{dataIndex:"categ_abrev",text:"Categ",lockable:false,width:50},{dataIndex:"pedweb_fechafin",text:"Vig. Web",align:"center",renderer:fext_FD(),sortable:true,width:80},
		{dataIndex:"area_abrev",text:"U.O.",lockable:false,sortable:true,width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",lockable:false,sortable:true,width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",lockable:false,sortable:true,width:45},{dataIndex:"fase_nombre",text:"Fase",lockable:false,sortable:true,width:120},
		{dataIndex:"fase_datetime",text:"Recibido",width:100,renderer:function(val,metaD,r,rowI,colI,str,view){return r.data.fase_feho;}},{dataIndex:"usur_login",text:"Cotizador",width:100},{dataIndex:"cantid_doc511",text:"#Cot",align:"right",tooltip:"Número de Cotizaciones",width:45},
		{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),lockable:false,sortable:true,width:90},{dataIndex:"pedtareafte_ajuste",text:"Ampl/Rebaj.",align:"right",renderer:fext_FN(2),lockable:false,sortable:true,width:90},{dataIndex:"pedtareafte_ejecutado",text:"Ejecutado",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_mtemp",text:"Buena Pro",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"complog_tipped_abrev"},{xtype:"comp_nrotop",itemId:"ped_nro"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},
		{xtype:"comp_cbotop",itemId:"filter",store:"array.FFAB",valueField:"ff",displayField:"code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{code}&nbsp;</div></tpl>",fieldLabel:" Filtro",listConfig:{cls:"item00001",minWidth:50},value:"",width:50},
		{xtype:"comp_cbotop",itemId:"fase_id",valueField:"fase_id",displayField:"fase_abrev",fieldLabel:"&nbsp;Fase",tpl:"<tpl for='.'><div class='x-boundlist-item'>{fase_abrev}&nbsp;</div></tpl>",width:90},{xtype:"comp_cbotop",itemId:"categ_id",valueField:"tabgen_id",displayField:"tabgen_abrev",fieldLabel:"&nbsp;Categ.",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_abrev}&nbsp;</div></tpl>",listConfig:{cls:"item00001",minWidth:60},width:60}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnModify",hidden:true,text:""},{xtype:"comp_btn",itemId:"btnEttr",disabled:true,hidden:true,iconCls:"icon_Invoice",text:""},{xtype:"comp_btnQuery",text:""},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnAdd",disabled:true,icon:"resources/icons/user_add.png",text:"Cotizador"},{xtype:"comp_btn",itemId:"btnChange",disabled:true,icon:"resources/icons/user_change.png",text:"Cambiar Cotizador",hidden:true},{xtype:"comp_btn",itemId:"btnSolicitud",disabled:true,icon:"resources/icons/btnPdf.gif",text:"Solicitud"},{xtype:"comp_btn",itemId:"btnReject",disabled:true,icon:"resources/icons/btnCancel.png",text:"Rechazar"}]},{xtype:"comp_pag",itemId:"pagLP"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLPD",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"peddet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"peddet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLPW",hidden:true,title:"Publicación Web",items:[
		{xtype:"comp_grid",itemId:"grdLPW",viewConfig:{getRowClass:function(r,rowI,rowP,str){return (r.data.pedweb_flga==98?"mx-letra-negro":"mx-letra-negro");}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"pedweb_fechaini",text:"F. Inicio",align:"center",renderer:fext_FD(),width:80},{dataIndex:"pedweb_dias",text:"DP",align:"right",tooltip:" Días Publicación ",width:45},{dataIndex:"pedweb_fechafin",text:"F. Final",align:"center",renderer:fext_FD(),width:80}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5152},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagLPW",disabled:true}
	]},	
	{xtype:"tabb1",itemId:"tabLC",hidden:true,title:"Cotizaciones",items:[
		{xtype:"comp_grid",itemId:"grdLC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"coti_documento",text:"Documento",width:75},{dataIndex:"coti_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"pers_ruc",text:"RUC",width:90},{dataIndex:"pers_nombre",text:"Razón Social",width:300},
			{dataIndex:"coti_plazo",text:"PE",align:"right",tooltip:" Plazo de Entrega ",width:30},{dataIndex:"lugentr_abrev",text:"LE",tooltip:" Lugar de Entrega ",width:40},{dataIndex:"coti_vigencia",text:"V",align:"right",tooltip:"Validez",width:30},{dataIndex:"tippag_abrev",text:"TP",tooltip:"Tipo de Pago",width:45},
			{dataIndex:"coti_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"bp_monto",text:"BuenaPro",align:"right",renderer:fext_FN(2),width:90},
			{xtype:"actioncolumn",align:"center",width:30,items:[{icon:"resources/icons/btnDownload.png",tooltip:"<b>DESCARGAR </b>, archivo adjunto.",getClass:function(val,metD,r){return r.data.coti_file1==""?"x-hide-display":"x-grid-center-icon";}}]}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5112},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnBuenapro",disabled:true,icon:"resources/icons/btnVobo.png",text:"BuenaPro"},{xtype:"comp_btnPdf",itemId:"btnCCP",disabled:true,text:"Cuadro"},{xtype:"comp_btnExcel",itemId:"btnCCE",disabled:true,text:"Cuadro"}]},{xtype:"comp_pag",itemId:"pagLC",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.orden_flga==98?"mx-letra-rojo":"mx-letra-negro";}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:95},{dataIndex:"orden_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:40},{dataIndex:"pers_ruc",text:"RUC",width:100},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"tippag_abrev",text:"TP",width:45},{dataIndex:"expe_nro",text:"SIAF",width:70},
			{dataIndex:"orden_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"orden_percep",text:"Percep.",align:"right",renderer:fext_FN(2),width:70}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5113},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLO",disabled:true}
	]}
]}]
});