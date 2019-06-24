Ext.define("Siace.view.bud.TareasB",{extend:"Siace.view.PanB",alias:"widget.bud_tareab",items:[
{xtype:"panb1",title:"Módulo de Tareas Funcionales ::.",width:"49%",items:[
	{xtype:"comp_grid",itemId:"grdBT",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.tarea_estado==1?"mx-black":"mx-red";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",align:"center",text:"Tarea",width:70},{dataIndex:"tipcost_abrev",text:"Costo",width:35},{dataIndex:"tarea_nombre",text:"Descripción",width:330},
		{dataIndex:"tipgast_code",text:"TG",align:"center",width:30},{dataIndex:"tipespedet_code",text:"TC",align:"center",tooltip:"Tipo Clasificador",width:25},{dataIndex:"",align:"right",renderer:fext_FN(2),text:"PIA",width:100},{dataIndex:"",align:"right",renderer:fext_FN(2),text:"PIM",width:100},{dataIndex:"",align:"right",renderer:fext_FN(2),text:"Egreso",width:100},{dataIndex:"",align:"right",renderer:fext_FN(2),text:"Saldo",width:100}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"comp_cbotop",itemId:"tiptarea_id",valueField:"tiptarea_id",displayField:"tiptarea_nombre",editable:true,fieldLabel:"&nbsp;Tipo Tarea",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tiptarea_nombre}&nbsp;</div></tpl>",width:220},{xtype:"comp_txttop",itemId:"tarea_nombre",fieldLabel:"&nbsp;Descripción",maxLength:50,width:180},{xtype:"compbud_tipgast_code"}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagBT"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBTF",title:"Presupuesto",items:[
		{xtype:"comp_grid",itemId:"grdBTF",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"fuefin_code",text:"Rb",width:35},{dataIndex:"tiprecur_code",text:"TR",width:30},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"espedet_nombre",text:"Descripción",width:350},
			{dataIndex:"tareafte_pia",align:"right",renderer:fext_FN(2),text:"PIA",width:100},{dataIndex:"tareafte_pim",align:"right",renderer:fext_FN(2),text:"PIM",width:100},
			{dataIndex:"tareafte_ajuste",align:"right",renderer:fext_FN(2),text:"Ajuste",width:100},{dataIndex:"tareafte_otro",align:"right",renderer:fext_FN(2),text:"Otro Ejercio",width:100},{dataIndex:"tareafte_egreso",align:"right",renderer:fext_FN(2),text:"Egreso",width:100},{dataIndex:"tareafte_saldo",align:"right",renderer:fext_FN(2),text:"Saldo",width:100}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2112},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"year_id",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:65,width:180},{xtype:"comp_dato",name:"tipespedet_nombre",fieldLabel:"Tipo Clasificador",labelWidth:100}]},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
	 	{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"compbud_fuefin_code"},{xtype:"compbud_tiprecur_code",disabled:true}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew",disabled:true},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagBTF",disabled:true},
	]},
	{xtype:"tabb1",itemId:"tabBTA",hidden:true,title:"Unidades Orgánicas",items:[
		{xtype:"comp_grid",itemId:"grdBTA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"area_nombre",text:"Unidad Orgánica",flex:1},{dataIndex:"area_abrev",text:"Abrev",width:70},{dataIndex:"",width:40}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2113},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:65,width:180},{xtype:"comp_dato",name:"tipespedet_nombre",fieldLabel:"Tipo Clasificador",labelWidth:100}]},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd",text:"Agregar U.O."},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagBTA",disabled:true},
	]},
	{xtype:"tabb1",itemId:"tabBTUA",hidden:true,title:"Usuarios",items:[
		{xtype:"comp_grid",itemId:"grdBTUA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color;}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"usuracce_id",text:"Ficha",width:60},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",width:250},{dataIndex:"usur_login",text:"Login",width:100},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"cargusur_nombre",text:"Cargo",width:120},{dataIndex:"tireq_abrev03",text:"Req",width:60},{dataIndex:"",text:"C.Chica",width:50}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2114},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:65,width:180},{xtype:"comp_dato",name:"tipespedet_nombre",fieldLabel:"Tipo Clasificador",labelWidth:100}]},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew",disabled:true},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnMenu",icon:"resources/icons/btnMenu.png",text:"Menú"}]},{xtype:"comp_pag",itemId:"pagBTUA",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Requerimientos",items:[
		{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.ped_flga==98?"mx-red-b":(r.data.ped_flga==90?"mx-red":"mx-black");}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Requer.",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"tipped_abrev",text:"Tipo",width:45},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"fase_nombre",text:"Fase",lockable:false,sortable:true,width:120},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,r,rowI,colI,str,view){return r.data.fase_feho;}},
			{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ajuste",text:"Ampl/Rebaj.",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_ejecutado",text:"Ejecutado",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"pedtareafte_mtemp",text:"Buena Pro",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"",text:"Saldo",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2123},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:65,width:180},{xtype:"comp_dato",name:"tipespedet_nombre",fieldLabel:"Tipo Clasificador",labelWidth:100}]},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"complog_tipped_abrev",disabled:true},{xtype:"comppub_area_abrev"},{xtype:"compbud_tipgast_code"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLP",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLO",hidden:true,title:"Ordenes",items:[
		{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.row_color}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Documento",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"tiporden_code",text:"Proc",tooltip:" Procedencia ",width:40},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"fftr_codigo",text:"FF",width:40},{dataIndex:"ordenproc_documentos",text:"Referencias",width:90},{dataIndex:"pers_nombre",text:"Proveedor",width:250},{dataIndex:"expe_nro",text:"SIAF",width:70},
			{dataIndex:"orden_monto",align:"right",renderer:fext_FN(2),text:"Importe",width:90},{dataIndex:"orden_percep",align:"right",renderer:fext_FN(2),text:"Percep",width:70}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:2124},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"year_id",fieldLabel:"Año Trabajo",labelWidth:65,width:180},{xtype:"comp_dato",name:"tipespedet_nombre",fieldLabel:"Tipo Clasificador",labelWidth:100}]},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"comp_codename",fieldLabel:"Componente"},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"}]}]},
		{xtype:"comp_tooltop",margin:"-6 0 0 -4",items:[{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB"},{xtype:"comppub_area_abrev"},{xtype:"compbud_tipgast_code"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLO",disabled:true}
	]}
]}]
});