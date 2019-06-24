Ext.define("Siace.view.bud.NotasE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_notae",width:830,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",defaults:{labelWidth:65},layout:"vbox",width:580,items:[{xtype:"comppub_year_code",hidden:true},{xtype:"hiddenfield",itemId:"notatareafte_item",value:0,vtype:"onlyNumeric"},{xtype:"hiddenfield",itemId:"tablex",disabled:true},{xtype:"hiddenfield",itemId:"tablex_key",disabled:true},
		{xtype:"fieldcontainer",fieldLabel:"Documento",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[
			{xtype:"comp_txttop",itemId:"nota_nro",align:"center",disabled:true,width:60},{xtype:"comp_date",itemId:"nota_fecha",name:"nota_fecha",allowBlank:false,disabled:true},{xtype:"displayfield",flex:1},
			{xtype:"comp_cbo",itemId:"tipnota_id",name:"tipnota_id",valueField:"tabgen_id",displayField:"tabgen_nombre",fieldLabel:"Tipo",labelWidth:35,width:220},
		]},
		{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fftr_codename",disabled:true}
	]},{xtype:"displayfield",width:25},
	{xtype:"container",layout:"vbox",flex:1,items:[
		{xtype:"panel",border:false,padding:"0 0 10 0",width:"100%",items:[{xtype:"comp_grid",itemId:"grdBNP",height:100,width:"100%",columns:[{xtype:"rownumberer",width:20},{dataIndex:"tablex_documento",text:"Referencias",width:120},{dataIndex:"tablex_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),width:80},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tablex_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90}]}]}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"panDET",title:"Detalle de Nota Presupuestal",height:200,items:[
		{xtype:"comp_grid",itemId:"grdBNTF",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",text:"Tarea",sortable:false,width:70,},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:90},{dataIndex:"espedet_nombre",text:"Descripción",sortable:false,width:398},{dataIndex:"notatareafte_egreso",text:"Anulación",align:"right",renderer:fext_FN(0),sortable:false,width:95,editor:{xtype:"comp_number",decimalPrecision:0,maxLength:12,maxValue:999999999,value:""}},{dataIndex:"notatareafte_ingreso",text:"Crédito",align:"right",renderer:fext_FN(0),sortable:false,width:95,editor:{xtype:"comp_number",decimalPrecision:0,maxLength:12,maxValue:999999999,value:""}}]}
	]},
	{xtype:"panel",itemId:"panCOM",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"nota_observ",name:"nota_observ",fieldLabel:"Glosa",height:120,labelWidth:65,width:"100%"}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
		{xtype:"button",itemId:"btnEgr",text:"Anulación",disabled:true,iconCls:"icon_Add",padding:"2 6 2 8"},{xtype:"button",itemId:"btnIng",text:"Crédito",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Suprimir",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
		{xtype:"comp_curr",itemId:"nota_egreso",disabled:true,value:0,numberDecimal:0,width:95},{xtype:"comp_curr",itemId:"nota_ingreso",disabled:true,numberDecimal:0,value:0,width:95},{xtype:"displayfield",width:20}
	]}
]}]}],
__fE:true,setFE:function(poFE){this.__fE=poFE;},getFE:function(){return this.__fE;},
__fI:true,setFI:function(poFI){this.__fI=poFI;},getFI:function(){return this.__fI;},
__fFFTR:true,setFFFTR:function(poF){this.__fFFTR=poF;},getFFFTR:function(){return this.__fFFTR;},
__nuk:"",setNUK:function(poNUK){this.__nuk=poNUK;},getNUK:function(){return this.__nuk;},
__wAE:null,setWAE:function(poWAE){this.__wAE=poWAE;},getWAE:function(){return this.__wAE;},
__wAI:null,setWAI:function(poWAI){this.__wAI=poWAI;},getWAI:function(){return this.__wAI;}
});