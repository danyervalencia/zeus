Ext.define("Siace.view.log.PedidosBVB",{extend:"Siace.view.PanB",alias:"widget.log_pedbvb",requires:["Siace.view.PanB1","Siace.view.TpnB1","Siace.view.TabB1"],items:[
{xtype:"panb1",title:"Módulo VoBo de Requerimientos ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.ped_flga==90?"mx-red":"mx-black";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Número",width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",width:80,renderer:Ext.util.Format.dateRenderer("d/m/Y")},{dataIndex:"tipped_abrev",text:"Tipo",width:40},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},
		{dataIndex:"fase_nombre",text:"Fase",width:120},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,rec,rowI,colI,str,view){return rec.data.fase_feho;}},{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"",text:"Ampl/Rebaj.",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comp_cbo",itemId:"faseextr_key",valueField:"faseextr_key",disabled:true,hidden:true},{xtype:"comppub_year_code"},
		{xtype:"comp_cbotop",itemId:"faseacce_key",valueField:"faseacce_key",displayField:"fase_nombre03",fieldLabel:"&nbsp;Fase",width:140},{xtype:"complog_tipped_abrev"},{xtype:"comp_nrotop",itemId:"ped_nro",enableKeyEvents:true},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btnFases",},{xtype:"comp_btnVobo",disabled:true,},{xtype:"comp_btn",itemId:"btnReject",disabled:true,icon:"resources/icons/btnCancel.png",text:"Rechazar"}]},{xtype:"comp_pag",itemId:"pagLP"}
]},

{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLPD",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},{dataIndex:"peddet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"peddet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]}
]}]
});