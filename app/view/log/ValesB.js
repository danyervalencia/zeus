Ext.define("Siace.view.log.ValesB",{extend:"Siace.view.PanB",alias:["widget.log_valb"],items:[
{xtype:"panb1",title:"Módulo Vales de Combustible ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLV",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"val_documento",text:"Documento",width:80},{dataIndex:"val_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"motval_abrev",text:"Motivo",width:50},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tablex_documento",text:"Referencia",width:80},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"indiv_apenom",text:"Operador",width:250},{dataIndex:"veh_placa",text:"Vehículo",width:100},{dataIndex:"val_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"comp_txttop",itemId:"val_nro",enableKeyEvents:true,fieldLabel:"&nbsp;Número",maxLength:6,vtype:"onlyNumeric",width:65},
		{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Trabajador",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"indiv_key"},{xtype:"hiddenfield",itemId:"INDIV_DNI"},{xtype:"comp_txttop",itemId:"indiv_dni",enableKeyEvents:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"indiv_apenom",hidden:true,fieldCls:"df00101"}]}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLV"}
 ]
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLVD",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLVD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},
			{dataIndex:"valdet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"valdet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"valdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[
	 	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew",text:"Registrar"},{xtype:"comp_btnModify"},{xtype:"comp_btnAnnular"}]},
		{xtype:"form",itemId:"frmLVA",dock:"bottom",border:true,bodyPadding:8,defaults:{labelWidth:65},layout:{type:"vbox"},items:[{xtype:"hiddenfield",itemId:"valatend_key",name:"valatend_key"},
			{xtype:"comp_dato",fieldLabel:"",fieldCls:"df00204",value:"REGISTRO DE ATENCION DEL VALE"},
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_date",name:"valatend_fecha",disabled:true,fieldLabel:"Fecha",labelWidth:65,margin:"0 25 5 0",width:170},{xtype:"comp_time",name:"valatend_hora",disabled:true,fieldLabel:"Hora",increment:60,labelWidth:35,width:100}]},
			{xtype:"comp_curr",name:"valatend_odometro",disabled:true,fieldCls:"txt00006",fieldLabel:"Odómetro",maxLength:15,numberDecimal:1,width:170},{xtype:"comp_txtarea",name:"valatend_observ",fieldLabel:"Comentario",readOnly:true,width:250}
		]},		
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"val_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"val_fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"motval_nombre",fieldLabel:"Motivo"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"tablex_documento",fieldLabel:"Referencia",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"tablex_fecha",labelWidth:35}]},
			{xtype:"comp_dato",name:"indiv_dniname",fieldLabel:"Operador"},{xtype:"comp_dato",name:"veh_placa",fieldLabel:"Vehículo"}
		]}]}
	]},
]}]
});