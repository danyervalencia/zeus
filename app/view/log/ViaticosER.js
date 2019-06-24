Ext.define("Siace.view.log.ViaticosER",{extend:"Siace.view.WinE",alias:["widget.log_viater"],requires:["Siace.view.comp.rrhh.TrabjS"],width:650,items:[{xtype:"form",bodyPadding:8,border:true,items:[
{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:"100%",items:[{xtype:"comppub_year_code",hidden:true,submitValue:false},{xtype:"hiddenfield",itemId:"viatdet_item",value:1},
	{xtype:"fieldcontainer",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comppub_doc_nombre",store:"array.DocViatAB",disabled:true,labelWidth:65,margin:"0 4 0 0",value:507,width:220},{xtype:"comp_txttop",itemId:"viat_nro",name:"viat_nro",align:"center",disabled:true,width:70},{xtype:"comp_date",itemId:"viat_fecha",name:"viat_fecha",allowBlank:false,disabled:true},{xtype:"displayfield",flex:1}]},
	{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename"},{xtype:"compbud_tarea_codename"},{xtype:"compbud_fftr_codename"},{xtype:"comprrhh_trabjs"}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabCOM",title:"Concepto",bodyPadding:8,layout:"hbox",width:"100%",items:[
		{xtype:"container",layout:"vbox",width:320,items:[{xtype:"comp_cbo",itemId:"orig_prvn",name:"orig_prvn",valueField:"orig_prvn",displayField:"orig_nombre",fieldLabel:"Origen",labelWidth:50,width:"100%"},{xtype:"fieldset",margin:"0 0 0 0",padding:"0 8 0 8",title:"Destino",width:"100%",items:[{xtype:"pub_paisdptoprvndstt",itemId:"cntPdpd"}]}]},{xtype:"displayfield",flex:1},
		{xtype:"container",layout:"vbox",width:260,items:[
			{xtype:"comp_cbo",itemId:"transp_id",name:"transp_id",valueField:"tabgen_id",displayField:"tabgen_nombre",editable:true,fieldLabel:"Transporte",labelWidth:80,width:"100%"},
			{xtype:"comp_cbo",itemId:"motviat_id",name:"motviat_id",valueField:"motviat_id",displayField:"motviat_nombre",editable:true,fieldLabel:"Motivo",labelWidth:80,width:"100%"},
			{xtype:"fieldcontainer",fieldLabel:"Fecha Salida",labelClsExtra:"lbl00001",labelWidth:80,layout:"hbox",width:"100%",items:[{xtype:"comp_datetop",itemId:"viat_fechaini",name:"viat_fechaini",allowBlank:false,endDateField:"viat_fechafin",vtype:"daterange"},{xtype:"comp_time",itemId:"viat_horaini",name:"viat_horaini",allowBlank:false,flex:1,increment:60}]},
			{xtype:"fieldcontainer",fieldLabel:"Fecha Retorno",labelClsExtra:"lbl00001",labelWidth:80,layout:"hbox",width:"100%",items:[{xtype:"comp_datetop",itemId:"viat_fechafin",name:"viat_fechafin",allowBlank:false,startDateField:"viat_fechaini",vtype:"daterange"},{xtype:"comp_time",itemId:"viat_horafin",name:"viat_horafin",allowBlank:false,flex:1,increment:60}]},{xtype:"hiddenfield",itemId:"viat_horas",value:0},
			{xtype:"comp_txt",itemId:"viat_duracion",disabled:true,fieldLabel:"Duración",labelWidth:80,submitValue:false,width:"100%"},
			{xtype:"container",layout:"hbox",width:260,margin:"0 0 0 0",items:[{xtype:"comp_btn",itemId:"btnCalc",height:17,padding:"1 2 0 2",text:"Calcular Importe Máximo de Viático"},{xtype:"displayfield",width:10},{xtype:"displayfield",itemId:"viat_montomax",name:"viat_montomax",fieldCls:"df00104",padding:"-3 0 -8 0",renderer:fext_FN(2),width:100}]}
		]}
	]},
	{xtype:"panel",itemId:"tabDDET",bodyPadding:4,title:"Detalle de Viáticos",width:"100%",items:[
		{xtype:"comp_grid",itemId:"grdLVD",height:140,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:365},
			{dataIndex:"viatdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90},{dataIndex:"viatdet_rendido",text:"Rendición",align:"right",renderer:fext_FN(2),sortable:false,width:90,editor:{xtype:"comp_number",decimalPrecision:2,maxLength:9,maxValue:999999,value:""}},
			{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:95},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",sortable:false,width:350}
		]},
		{xtype:"container",margin:"3 0 0 0",layout:"hbox",width:"100%",items:[{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",padding:"2 6 2 8"},{xtype:"button",itemId:"btnModify",text:"Editar",disabled:true,iconCls:"icon_Modify",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Suprimir",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"viat_monto",name:"viat_monto",disabled:true,fieldLabel:"Importe",labelWidth:50,value:0,width:140},{xtype:"comp_curr",itemId:"viat_rendido",disabled:true,value:0,width:90},{xtype:"displayfield",width:20}]}
	]},
	{xtype:"panel",itemId:"tab03",bodyPadding:8,layout:{type:"vbox"},title:"Complementarios",width:"100%",items:[
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"univeh_key",name:"univeh_key"},{xtype:"hiddenfield",itemId:"VEH_PLACA",name:"VEH_PLACA",submitValue:false},
			{xtype:"comp_txt",itemId:"veh_placa",name:"veh_placa",enableKeyEvents:true,fieldLabel:"Vehículo",labelWidth:65,margin:"0 4 4 0",maxLength:10,submitValue:false,width:150},
			{xtype:"comp_btn_imgsearch",itemId:"btnPVS"},{xtype:"displayfield",itemId:"univeh_detalle",name:"univeh_detalle",fieldCls:"df00101",value:""}
		]},
		{xtype:"comp_txtarea",itemId:"viat_observ",name:"viat_observ",fieldLabel:"Referencia",labelWidth:65,height:126,width:"100%"}
	]}
]}]}],
__compRTS:null,setCompRTS:function(poC){this.__compRTS=poC;},getCompRTS:function(){return this.__compRTS;},__compPBSS:null,setCompPBSS:function(poC){this.__compPBSS=poC;},getCompPBSS:function(){return this.__compPBSS;},__f:false,setF:function(poF){this.__f=poF;},getF:function(){return this.__f;},__c:false,setC:function(poC){this.__c=poC;},getC:function(){return this.__c;},__nuk:"",setNUK:function(poNUK){this.__nuk=poNUK;},getNUK:function(){return this.__nuk;}
});