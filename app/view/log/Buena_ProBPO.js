Ext.define("Siace.view.log.Buena_ProBPO",{extend:"Siace.view.PanB",alias:"widget.log_bpbpo",items:[
{xtype:"panb1",title:"Módulo Buena Pro ==> Ordenes",width:"59%",items:[
	{xtype:"comp_grid",itemId:"grdLBP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.certif_nro*1<=0?"mx-letra-verde":"mx-letra-negro";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Requer.",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"area_abrev",text:"U.O.",tooltip:"Unidad Orgánica",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},
		{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"bp_monto",text:"BP Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"certif_nro",text:"Certificado",align:"right",width:70},{dataIndex:"orden_documento",text:"Orden",width:80},
		{dataIndex:"bp_documento",text:"BP Nro",width:60},{dataIndex:"bp_fecha",text:"BP Fecha",align:"center",renderer:fext_FD(),width:80}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"complog_tipped_abrev"},{xtype:"comp_nrotop",itemId:"ped_nro",enableKeyEvents:true},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},
		{xtype:"comp_cbotop",itemId:"type_query",valueField:"typque_id",displayField:"typque_nombre",fieldLabel:"&nbsp;Estado",tpl:"<tpl for='.'><div class='x-boundlist-item'>{typque_nombre}&nbsp;</div></tpl>",width:90},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Proveedor",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",enableKeyEvents:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search"},{xtype:"displayfield",itemId:"pers_nombre",hidden:true,fieldCls:"df00101"}]}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnModify"},{xtype:"comp_btn",itemId:"btnCC",disabled:true,icon:"resources/icons/btnComplementary.png",text:"C. Comparativo"},{xtype:"comp_btn",itemId:"btnBPDel",disabled:true,icon:"resources/icons/btnReject.png",text:" BuenaPro"},
		{xtype:"comp_btn",itemId:"btnCertif",disabled:true,icon:"resources/icons/siaf.png",text:"Certificado"},{xtype:"comp_btn",itemId:"btnGO",disabled:true,icon:"resources/icons/generate.png",text:"Generar Orden"},{xtype:"comp_btnPrinter",itemId:"btnOrden",disabled:true,text:"Orden"}
	]},{xtype:"comp_pag",itemId:"pagLBP"}
]},

{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Requerimiento",items:[{xtype:"comp_grid",itemId:"grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"peddet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"peddet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:90}]}],
	 dockedItems:[{xtype:"comppub_menu",value:5142},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",itemId:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnAttach",disabled:true,iconCls:"icon_Attach",text:"Adjuntos"},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLC",hidden:true,title:"Cotización",items:[
		{xtype:"comp_grid",itemId:"grdLCD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"cotidet_marca",text:"Marca",width:100},{dataIndex:"cotidet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"cotidet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"cotidet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5143},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
	 		{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"coti_documento",fieldLabel:"Cotizac.",labelWidth:65,width:160},{xtype:"comp_datofecha",itemId:"coti_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",itemId:"coti_monto",fieldLabel:"Importe",labelWidth:45}]},
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLCD",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLM",hidden:true,title:"Ampliación",items:[
		{xtype:"comp_grid",itemId:"grdLMD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"modifdet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:85},{dataIndex:"modifdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"modifdet_preunip",text:"P.U. Req.",align:"right",renderer:fext_FN(4),width:85},{dataIndex:"modifdet_pretotp",text:"Importe Req.",align:"right",renderer:fext_FN(2),width:90},]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5144},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",itemId:"modif_documento",fieldLabel:"Ampliac.",labelWidth:65,width:160},{xtype:"comp_datomonto",itemId:"modif_monto",fieldLabel:"Importe",labelWidth:45}]},
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLMD",disabled:true}
	]}
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});