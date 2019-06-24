Ext.define("Siace.view.log.OrdenesE",{extend:"Siace.view.WindowEdit",alias:"widget.log_ordene",width:930,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",defaults:{labelWidth:65},layout:"vbox",width:580,items:[{xtype:"comppub_year_code",hidden:true,submitValue:false},{xtype:"hiddenfield",itemId:"tiporden_id",disabled:true},{xtype:"hiddenfield",itemId:"tablex",disabled:true},{xtype:"hiddenfield",itemId:"tablex_key"},{xtype:"hiddenfield",itemId:"tiprecur_idx",name:"tiprecur_idx"},
		{xtype:"fieldcontainer",fieldLabel:"Documento",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comppub_doc_nombre",store:"array.DocOrden",disabled:true,fieldLabel:"",margin:"0 4 0 0",width:160},{xtype:"comp_txttop",itemId:"orden_nro",align:"center",width:60},{xtype:"comp_datetop",itemId:"orden_fecha",name:"orden_fecha",allowBlank:false,fieldLabel:""},{xtype:"comp_btn_imgsearch",itemId:"btnOrden_search"}]},
		{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fuefin_codename",disabled:true},{xtype:"compbud_tiprecur_codename",name:"tiprecur_id",editable:true,fieldLabel:"T. Recurso",width:"100%"},
		{xtype:"fieldcontainer",fieldLabel:"Proveedor",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"pers_key",name:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},
			{xtype:"comp_txttop",itemId:"pers_ruc",name:"pers_ruc",disabled:true,enableKeyEvents:true,maxLength:11,submitValue:false},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search",disabled:true},{xtype:"displayfield",itemId:"pers_nombre",name:"pers_nombre",fieldCls:"df00101"}
		]},
		{xtype:"fieldcontainer",fieldLabel:"TipoPago",labelClsExtra:"lbl00001",layout:"hbox",fieldLabel:"Tipo Pago",width:"100%",items:[{xtype:"comp_cbotop",itemId:"tippag_id",name:"tippag_id",valueField:"tippag_id",displayField:"tippag_nombre",width:125},{xtype:"displayfield",flex:1},{xtype:"comp_date",itemId:"orden_fechaini",name:"orden_fechaini",endDateField:"orden_fechafin",fieldLabel:"Periodo",labelWidth:50,margin:"0 4 0 0",vtype:"daterange",width:145},{xtype:"comp_date",itemId:"orden_fechafin",name:"orden_fechafin",startDateField:"orden_fechaini",vtype:"daterange"}]}
	]},{xtype:"displayfield",width:25},
	{xtype:"container",layout:"vbox",flex:1,items:[
		{xtype:"panel",border:false,padding:"0 0 10 0",width:"100%",items:[
			{xtype:"comp_grid",itemId:"grdLOP",height:100,width:"100%",columns:[{xtype:"rownumberer",width:20},{dataIndex:"tablex_documento",text:"Referencias",width:120},{dataIndex:"tablex_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),width:80},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tablex_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90}]},
		]},
		{xtype:"panel",border:false,padding:"0 0 0 0", width: "100%",items: [
			{xtype:"comp_grid",itemId:"grdLOTF",height:105,columns:[{xtype:"rownumberer",width:20},{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:85},{dataIndex:"ordentareafte_monto",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),text:"Importe",width:80},{dataIndex:"ordentareafte_percep",text:"Percepción",align:"right",renderer:Ext.util.Format.numberRenderer("000,000.00"),sortable:false,width:75,editor:{xtype:"comp_number",decimalPrecision:2,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),text:"Total",width:85},{dataIndex:"espedet_nombre",text:"Descripción",width:300},]}
		]}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabD",title:"Detalle de Orden",height:200,items:[
		{xtype:"comp_grid",itemId:"grdLOD",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:424},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:50},
			{dataIndex:"ordendet_cantid",text:"Cantid",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),sortable:false,width:85,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"ordendet_preuni",text:"P.Unitario",align:"right",renderer:Ext.util.Format.numberRenderer("0,000,000.000000"),sortable:false,width:95,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:6,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"ordendet_pretot",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:90},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:85}
		]}
	]},
	{xtype:"panel",itemId:"tabC",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"orden_observ",name:"orden_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"orden_monto",disabled:true,fieldLabel:"Importe",labelWidth:65,margin:"0 19 0 0",value:0,width:160}]}
]}]}]});