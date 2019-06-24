Ext.define("Siace.view.log.ComprasE14",{extend:"Siace.view.WinE",alias:["widget.log_compre14"],requires:["Siace.view.comp.pub.PersS"],width:600,items:[{xtype:"form",bodyPadding:8,border:true,items:[
{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:"100%",items:[{xtype:"comppub_year_code",hidden:true},{xtype:"hiddenfield",itemId:"item",value:0},
	{xtype:"comp_cbo",itemId:"tiporden_id",name:"tiporden_id",valueField:"tiporden_id",displayField:"tiporden_nombre",fieldLabel:"Servicio",width:"100%"},
	{xtype:"fieldcontainer",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comppub_doc_nombre",store:"array.DocCompr14",editable:true,labelWidth:65,margin:"0 4 0 0",value:14,width:213},{xtype:"comp_txttop",itemId:"comp_serie",name:"comp_serie",maxLength:5,width:60},{xtype:"comp_txttop",itemId:"comp_nro",name:"comp_nro",maxLength:15,width:110},{xtype:"comp_date",itemId:"comp_fecha",name:"comp_fecha",allowBlank:false}]},
	{xtype:"comppub_perss"},{xtype:"compbud_fuefin_codename",editable:true}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tab1",title:"Detalle de Gasto Presupuestal",items:[
		{xtype:"comp_grid",itemId:"grdLCDTF",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",width:230},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:85},
			{dataIndex:"pretot",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:2,maxLength:9,maxValue:99999,value:""}},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",sortable:false,width:350}
		]},
		{xtype:"container",layout:"hbox",width:"100%",items:[
			{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
				{xtype:"button",itemId:"btnAdd",text:"Agregar",iconCls:"icon_Add",margin:"0 5", padding: "2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Suprimir",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
				{xtype:"comp_curr",itemId:"comp_monto",name:"comp_monto",disabled:true,fieldLabel:"Importe",labelWidth:50,value:0,width:140},{xtype:"displayfield",width:20}
			]}
		]}
	]},
	{xtype:"panel",itemId:"tab3",bodyPadding:8,layout:{type:"vbox"},title:"Complementarios",width:"100%",items:[
		{xtype:"comp_txtarea",itemId:"comp_observ",name:"comp_observ",fieldLabel:"Referencia",labelWidth:65,height:97,width:"100%"}
	]}
]}]
}],
__compBTFS:null,setCompBTFS:function(poComp){this.__compBTFS=poComp;},getCompBTFS:function(){return this.__compBTFS;},
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
__f:true,setF:function(pcF){this.__f=pcF;},getF:function(){return this.__f;},
__NUK:"",setNUK:function(poNUK){this.__NUK=poNUK;},getNUK:function(){return this.__NUK;}
});