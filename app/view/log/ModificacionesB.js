Ext.define("Siace.view.log.ModificacionesB",{extend:"Siace.view.PanelBrowse",alias:["widget.log_modifb"],layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panLM",layout:{type:"fit"},height:"100%",width:"60%",items:[
	{xtype:"comp_grid",itemId:"grdLM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.modif_flga==98?"mx-letra-rojo-bold":(r.data.fase_id*1>201?"mx-letra-negro":(r.data.modif_flga==90?"mx-letra-rojo":"mx-letra-naranja"));}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"modif_documento",text:"Documento",width:80},{dataIndex:"modif_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"tipmodif_abrev",text:"Tipo",width:50},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},
		{dataIndex:"tablex_documento",text:"Requer.",width:70},{dataIndex:"tablex_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"modif_monto",text:"Ampl/Rebj",align:"right",renderer:fext_FN(2),width:80}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_cbotop",itemId:"tipmodif_id",valueField:"tabgen_id",displayField:"tabgen_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_abrev}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Tipo",listConfig:{cls:"item00001",minWidth:55},width:55},{xtype:"comp_nrotop",itemId:"modif_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},{xtype:"comp_nrotop",itemId:"tablex_nro",fieldLabel:"&nbsp;Requer."},]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnVobo",hidden:true},{xtype:"comp_btn",itemId:"btnReject",disabled:true,hidden:true,icon:"resources/icons/btnCancel.png",text:"Rechazar"},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLM"}
 ],
},
{xtype:"panel",border:false,height:"100%",width: "1%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"39%",items:[
	{xtype:"panel",itemId:"tabLMD",height:"100%",layout:{type:"fit"},title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdLMD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tablex_item",text:"Item",align:"right",width:40},{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"modifdet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:85},{dataIndex:"modifdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"modifdet_preunip",text:"P.U. Req.",align:"right",renderer:fext_FN(4),width:85},{dataIndex:"modifdet_pretotp",text:"Importe Req.",align:"right",renderer:fext_FN(2),width:90},]}],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"modif_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"modif_fecha",fieldLabel:"Fecha",labelWidth:35}]},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}]}]},
		{xtype:"comp_pag",itemId:"pagLMD",disabled:true}
	]},
	{xtype:"panel",itemId:"tabLMTF",height:"100%",layout:{type:"fit"},title:"Presupuesto",items:[{xtype:"comp_grid",itemId:"grdLMTF",columns:[{xtype:"rownumberer",width:30},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"espedet_nombre",text:"Descripción",width:270},{dataIndex:"modiftareafte_monto",text:"Importe",align:"right",renderer:fext_FN(3),width:85}]}],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"modif_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"modif_fecha",fieldLabel:"Fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},{xtype:"comp_pag",itemId:"pagLMTF",disabled:true}
	]}
]}]
});