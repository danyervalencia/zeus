Ext.define("Siace.view.bud.NotasB",{extend:"Siace.view.PanB",alias:"widget.bud_notab",items:[
{xtype:"panb1",title:"Módulo de Notas Presupuestales ::.",width:"60%",items:[
	{xtype:"comp_grid",itemId:"grdBN",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.nota_flga==98?"mx-letra-rojo":"mx-letra-negro";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"nota_documento",text:"Documento",width:75},{dataIndex:"nota_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"tipnota_abrev",text:"Tipo",width:45},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"secfunc_code",text:"S.F.",align:"center",width:50},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb",width:45},{dataIndex:"siaf_nro",align:"right",text:"SIAF",width:60},{dataIndex:"fase_nombre",text:"Fase",width:110},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,r,rowI,colI,str,view){return r.data.fase_feho;}},{dataIndex:"nota_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:100}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"nota_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comp_cbotop",itemId:"tipnota_id",valueField:"tabgen_id",displayField:"tabgen_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_abrev}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Tipo",listConfig:{cls:"item00001",minWidth:55},width:55},
		{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},{xtype:"compbud_fuefin_code"},{xtype:"comp_cbotop",itemId:"filter",valueField:"filt",displayField:"code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{code}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Filtro",listConfig:{cls:"item00001",minWidth:50},width:50},
		{xtype:"comp_cbotop",itemId:"fase_id",valueField:"fase_id",displayField:"fase_abrev",fieldLabel:"&nbsp;Fase",tpl:"<tpl for='.'><div class='x-boundlist-item'>{fase_abrev}&nbsp;</div></tpl>",width:90},
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnSolicita",disabled:true,hidden:true,iconCls:"icon_Vobo_90",text:"Solicita"},{xtype:"comp_btn",itemId:"btnPresup",disabled:true,hidden:true,iconCls:"icon_Vobo_90",text:"Presupuesto"},{xtype:"comp_btn",itemId:"btnReject",disabled:true,hidden:true,icon:"resources/icons/btnCancel.png",text:"Rechazar"},{xtype:"comp_btn",itemId:"btnSiaf",disabled:true,icon:"resources/icons/siaf.png",text:"SIAF"},,{xtype:"comp_btnFases"}]},{xtype:"comp_pag",itemId:"pagBN"}
]},

{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBNTF",title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdBNTF",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",sortable:false,width:70},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"notatareafte_egreso",text:"Anulación",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"notatareafte_ingreso",text:"Crédito",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_nombre",text:"Descripción",width:300}]}],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"nota_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"nota_fecha",fieldLabel:"Fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
		]}]},{xtype:"comp_pag",itemId:"pagBNTF",disabled:true}
	]}
]}]
});