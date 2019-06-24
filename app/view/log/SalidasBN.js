Ext.define("Siace.view.log.SalidasBN",{extend:"Siace.view.PanB",alias:["widget.log_salbn"],items:[
{xtype:"panb1",title:"Módulo Salida Bienes - NEAs ::.",width:"60%",items:[
	{xtype:"comp_grid",itemId:"grdLS",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"sal_documento",text:"Documento",width:80},{dataIndex:"sal_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"indiv_apenom",text:"Entregado a",width:250},{dataIndex:"tipprocreg_abrev",text:"Tipo",width:40},{dataIndex:"sal_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_txttop",itemId:"sal_nro",fieldLabel:"&nbsp;Número",maxLength:6,vtype:"onlyNumeric",width:65},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},{xtype:"fieldcontainer",fieldLabel:"&nbsp;Trabajador",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"indiv_key"},{xtype:"hiddenfield",itemId:"INDIV_DNI"},{xtype:"comp_txttop",itemId:"indiv_dni",maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPIS"},{xtype:"displayfield",itemId:"indiv_apenom",hidden:true,fieldCls:"df00101"}]}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLS"}
 ]
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLSD",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLSD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},{dataIndex:"saldet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"saldet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"saldet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"may_code",text:"Cuenta",width:50},{dataIndex:"subcta_code",text:"Sub Cuenta",width:80}]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"sal_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_dato",name:"sal_fechasal",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"sal_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"",fieldLabel:"Entidad"}
		]}]},{xtype:"comp_pag",itemId:"pagLSD",disabled:true}
	]}
]}]
});