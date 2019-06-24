Ext.define("Siace.view.log.IngresosE",{extend:"Siace.view.WindowEdit",alias:"widget.log_inge",width:930,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"panel",border:false,layout:{type:"hbox"},width:"100%",items:[
	{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:600,items:[{xtype:"comppub_year_code",name:"year_id",hidden:true},{xtype:"hiddenfield",itemId:"tablex",name:"tablex"},{xtype:"hiddenfield",itemId:"tablex_key",name:"tablex_key"},
		{xtype:"fieldcontainer",fieldLabel:"Orden Nro.",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"TABLEX_NRO"},
			{xtype:"comp_cbotop",itemId:"tablex_doc",name:"tablex_doc",store:"array.DocOrden",valueField:"doc_id",displayField:"doc_nombre",width:160},{xtype:"comppub_year_code",itemId:"tablex_year",name:"tablex_year",fieldLabel:""},{xtype:"comp_txttop",itemId:"tablex_nro",name:"tablex_nro",align:"center",enableKeyEvents:true,maxLength:6,submitValue:false,vtype:"onlyNumeric",width:70},
			{xtype:"comp_datofecha",itemId:"tablex_fecha",fieldLabel:"",margin:"1 25 0 4",width:100},{xtype:"comp_dato",itemId:"expe_nro",fieldLabel:"SIAF",labelWidth:35,margin:"1 0 0 4"}
		]},
		{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"comp_cbo",disabled:true,fieldLabel:"Componente",width:"100%"},{xtype:"compbud_fftr_codename",disabled:true},
		{xtype:"fieldcontainer",fieldLabel:"Proveedor",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"pers_key",},{xtype:"hiddenfield",itemId:"PERS_RUC"},
			{xtype:"comp_txttop",itemId:"pers_ruc",disabled:true,enableKeyEvents:true,maxLength:11,submitValue:false},
			{xtype:"comp_btn_imgsearch",itemId:"btnPers_search",disabled:true},{xtype:"displayfield",itemId:"pers_nombre",fieldCls:"df00101"}
		]}
	]},{xtype:"displayfield",flex:1},
	{xtype:"container",layout:{type:"vbox"},width:250,items:[
		{xtype:"fieldset",defaults:{labelWidth:65},layout:{type:"vbox"},padding:"2 8 4 8",title:" Recepción ",width:"100%",items:[
			{xtype:"comppub_doc_nombre",width:"100%"},
			{xtype:"fieldcontainer",fieldLabel:"Número",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"ing_serie",name:"ing_serie",align:"center",maxLength:4,vtype:"onlyNumeric",width:60},{xtype:"comp_txt",itemId:"ing_nro",name:"ing_nro",align:"center",flex:1,maxLength:8,vtype:"onlyNumeric"}]},
			{xtype:"comp_date",itemId:"ing_fecha",name:"ing_fecha",allowBlank:false,endDateField:"ing_fecharec",fieldLabel:"Fecha",vtype:"daterange",width:165},
			{xtype:"comp_date",itemId:"ing_fecharec",name:"ing_fecharec",allowBlank:false,fieldLabel:"Recepción",startDateField:"ing_fecha",vtype:"daterange",width:165},
			{xtype:"comp_cbo",itemId:"alma_key",valueField:"alma_key",displayField:"alma_nombre",disabled:true,fieldLabel:"Almacén",width:"100%"}
		]}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabDetalle",title:"Detalle de Ingreso",height:200,items:[
		{xtype:"comp_grid",itemId:"grdLID",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"tarea_codigo",text:"Tarea",sortable:false,width:65},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:380},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:50},
			{dataIndex:"ingdet_cantid",text:"Cantid",align:"right",renderer:fext_FN(3),sortable:false,width:85,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"ingdet_preuni",text:"P.Unitario",align:"right",renderer:fext_FN(8),sortable:false,width:105},{dataIndex:"ingdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:190}
		]}
	]},
	{xtype:"panel",itemId:"tabComplementos",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[
		{xtype:"comp_txtarea",itemId:"ing_observ",name:"ing_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}
	]}
]},
{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"ing_monto",name:"ing_monto",disabled:true,fieldLabel:"Importe",labelWidth:55,margin:"0 19 0 0",value:0,width:160}]}
]}],
__nuk:"",setNUK:function(poNUK){this.__nuk=poNUK;},getNUK:function(){return this.__nuk;},
});