Ext.define("Siace.view.log.SalidasE",{extend:"Siace.view.WindowEdit",alias:"widget.log_sale",requires:["Siace.view.comp.rrhh.TrabjS"],width:930,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"panel",border:false,layout:{type:"hbox"},width:"100%",items:[
	{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:600,items:[{xtype:"comppub_year_code",hidden:true,name:"year_id"},{xtype:"hiddenfield",itemId:"tipsal_id",name:"tipsal_id",value:5061},
		{xtype:"fieldcontainer",fieldLabel:"Procedencia",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"tablex_key",name:"tablex_key"},{xtype:"hiddenfield",itemId:"TABLEX_NRO"},{xtype:"comp_cbotop",itemId:"tablex_doc",name:"tablex_doc",store:"array.DocProcPecAB",valueField:"doc_id",displayField:"doc_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{doc_nombre}&nbsp;</div></tpl>",width:160},{xtype:"comppub_year_code",itemId:"tablex_year",name:"tablex_year",fieldLabel:""},{xtype:"comp_txttop",itemId:"tablex_nro",name:"tablex_nro",align:"center",maxLength:6,submitValue:false,vtype:"onlyNumeric",width:70},{xtype:"comp_datofecha",itemId:"tablex_fecha",name:"tablex_fecha",fieldLabel:"",margin:"1 0 0 4"}]},
		{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename"},{xtype:"compbud_tarea_codename"},{xtype:"comprrhh_trabjs"}
	]},{xtype:"displayfield",flex:1},
	{xtype:"container",layout:{type:"vbox"},width:240,items:[
		{xtype:"fieldset",defaults:{labelWidth:70},layout:{type:"vbox"},padding:"2 8 4 8",title:" Datos de Salida ",width:"100%",items:[
			{xtype:"fieldcontainer",fieldLabel:"Nro PECOSA",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"sal_serie",name:"ing_serie",align:"center",disabled:true,maxLength:4,vtype:"onlyNumeric",width:55},{xtype:"comp_txt",itemId:"sal_nro",name:"sal_nro",align:"center",disabled:true,flex:1,maxLength:6,vtype:"onlyNumeric"}]},
			{xtype:"comp_date",itemId:"sal_fecha",name:"sal_fecha",allowBlank:false,readOnly:true,fieldLabel:"Fecha",endDateField:"sal_fechasal",vtype:"daterange",width:170},{xtype:"comp_date",itemId:"sal_fechasal",name:"sal_fechasal",disabled:true,fieldLabel:"Fecha Salida",startDateField:"sal_fecha",vtype:"daterange",width:170},{xtype:"comp_cbo",itemId:"alma_key",valueField:"alma_key",displayField:"alma_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{alma_nombre}&nbsp;</div></tpl>",fieldLabel:"Almacén",width:"100%"}
		]}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabDetalle",title:"Detalle de Salida",height:200,items:[{xtype:"comp_grid",itemId:"grdLSD",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:403},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:50},{dataIndex:"saldet_cantid",text:"Cantid",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),sortable:false,width:85,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"saldet_preuni",text:"Precio Unitario",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00000000"),sortable:false,width:115},{dataIndex:"saldet_pretot",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:90},{dataIndex:"tablex_documento",text:"Ingreso",sortable:false,width:110},{dataIndex:"saldet_marca",text:"Marca",sortable:false,width:90}]}]},
	{xtype:"panel",itemId:"tabComplementos",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"sal_observ",name:"sal_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"sal_monto",name:"sal_monto",disabled:true,fieldLabel:"Importe",labelWidth:65,margin:"0 19 0 0",value:0,width:160}]}
]}
]}],
__compRTS:null,setCompRTS:function(poComp){this.__compRTS=poComp;},getCompRTS:function(){return this.__compRTS;},
__compWB:null,setCompWB:function(poComp){this.__compWB=poComp;},getCompWB:function(){return this.__compWB;},
__filtAMT:false,setFiltAMT:function(poFiltAMT){this.__filtAMT=poFiltAMT;},getFiltAMT:function(){return this.__filtAMT;},
__nuk:"",setNUK:function(poNUK){this.__nuk=poNUK;},getNUK:function(){return this.__nuk;}
});