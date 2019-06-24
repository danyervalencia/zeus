Ext.define("Siace.view.pub.PersonasB",{extend:"Siace.view.PanB",alias:"widget.pub_persb",items:[
{xtype:"panb1",title:"Módulo de Proveedores ::.",width:"58%",items:[
	{xtype:"comp_grid",itemId:"grdPP",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tipdocident_abrev",text:"TDI",tooltip:"Tipo Documento Identidad",width:40},{dataIndex:"pers_ruc",text:"Registro",width:95},{dataIndex:"pers_nombre",text:"Razon Social",width:400},
		{dataIndex:"clav_id",text:"Código Pro",align:"center",hidden:true,width:80},{dataIndex:"persacce_fecha",text:"Fecha",align:"center",hidden:true,renderer:fext_FD(),width:85},{dataIndex:"pers_ubigeo",text:"Ubigeo",sortable:false,width:90},{dataIndex:"pers_domicilio",text:"Dirección",width:400}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comp_cbotop",itemId:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipdocident_abrev}&nbsp;</div></tpl>",fieldLabel:"&nbsp;TDI",listConfig:{cls:"item00001",minWidth:55},maxLength:4,minChars:1,width:55},{xtype:"comp_txttop",itemId:"pers_ruc",fieldLabel:"&nbsp;Registro",maxLength:15,width:100},{xtype:"comp_txttop",itemId:"pers_nombre",fieldLabel:"&nbsp;Razón Social",maxLength:15,width:300}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btn",itemId:"btnClave",icon:"resources/icons/user_add.png",disabled:true,hidden:true,text:"Registrar Clave"},{xtype:"comp_btn",itemId:"btnConstancy",icon:"resources/icons/btnPrinter.png",disabled:true,hidden:true,text:"Constancia"}]},{xtype:"comp_pag",itemId:"pagPP"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabPPA",title:"Actividades",items:[
		{xtype:"comp_grid",itemId:"grdPPA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.persactiv_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"activ_nombre",text:"Actividad",flex:1},{dataIndex:"bst_abrev",text:"Tipo",width:50}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1126},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPPA",disabled:true},
	]},
	{xtype:"tabb1",itemId:"tabPPD",hidden:true,title:"Direcciones",items:[{xtype:"comp_grid",itemId:"grdPPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"ubigeo_code",text:"Ubigeo",width:95},{dataIndex:"persdomi_domicilio",text:"Domicilio",width:350}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1122},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPPD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabPPF",hidden:true,title:"Teléfonos",items:[
		{xtype:"comp_grid",itemId:"grdPPF",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.persfono_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"tipfono_nombre",text:"Tipo",flex:1},{dataIndex:"compfono_nombre",text:"Compañía",width:140},{dataIndex:"persfono_nro",text:"Número",width:140}]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1123},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPPF",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLC",hidden:true,title:"Cotizaciones",items:[
		{xtype:"comp_grid",itemId:"grdLC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"coti_documento",text:"Documento",width:75},{dataIndex:"coti_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"FF",width:40},{dataIndex:"ped_documento",text:"Req.",width:80},{dataIndex:"coti_vigencia",text:"V",align:"right",tooltip:"Validez",width:30},{dataIndex:"coti_plazo",text:"PE",align:"right",tooltip:"PlazodeEntrega",width:30},
			{dataIndex:"lugentr_abrev",text:"LE",tooltip:"Lugar de Entrega",width:40},{dataIndex:"tippag_abrev",text:"TP",tooltip:"Tipo de Pago",width:40},{dataIndex:"coti_monto",align:"right",renderer:fext_FN(2),text:"Importe",width:90},{dataIndex:"bp_monto",align:"right",renderer:fext_FN(2),text:"BuenaPro",width:90}
		]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1124},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]},	 
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLC",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"tiporden_code",text:"Proc",tooltip:" Procedencia ",width:40},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"FF",width:40},{dataIndex:"ordenproc_documentos",text:"Referencias",width:80},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},{dataIndex:"orden_monto",align:"right",renderer:fext_FN(2),text:"Importe",width:90},{dataIndex:"orden_percep",align:"right",renderer:fext_FN(2),text:"Percep",width:90}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1125},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]},	 
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB"},{xtype:"compbud_tipgast_code"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLO",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabPPR",hidden:true,title:"Restricciones",items:[
		{xtype:"comp_grid",itemId:"grdPPR",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"tiprestr_nombre",text:"Tipo",width:150},{dataIndex:"persrestr_fechaini",text:"F. Inicial",align:"center",width:80,renderer:fext_FD()},{dataIndex:"persrestr_fechafin",text:"F. Final",align:"center",width:80,renderer:fext_FD()},{dataIndex:"persrestr_montot",text:"Max. Total",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"persrestr_montoa",text:"Max. Anual",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"persrestr_montoi",text:"Max. Doc.",align:"right",renderer:fext_FN(2),width:90}]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1149},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:55},layout:"vbox",items:[{xtype:"comp_dato",name:"pers_ruc",fieldLabel:"Registro"},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Rz. Social"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPPF",disabled:true}
	]}	
]}]
});