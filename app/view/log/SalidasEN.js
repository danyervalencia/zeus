Ext.define("Siace.view.log.SalidasEN",{extend:"Siace.view.WindowEdit",alias:"widget.log_salen",requires:["Siace.view.comp.rrhh.TrabjS","Siace.view.comp.pub.PersS","Siace.view.comp.pub.IndivS"],width:930,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"panel",border:false,layout:{type:"hbox"},width:"100%",items:[{xtype:"hiddenfield",itemId:"saldet_item",value:0},
	{xtype:"tabpanel",activeTab:0,plain:true,width:600,items:[
		{xtype:"panel",itemId:"tab1",title:"Interno",height:103,defaults:{labelWidth:65,width:585},margin:"6",width:"100%",items:[	
			{xtype:"comppub_year_code",hidden:true,name:"year_id"},{xtype:"hiddenfield",itemId:"tipsal_id",name:"tipsal_id",value:5062},
			{xtype:"comppub_area_nombre",name:"area_key"},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",name:"tarea_key",disabled:true},{xtype:"comprrhh_trabjs"}
		]},
		{xtype:"panel",itemId:"tab2",title:"Externo",height:103,defaults:{labelWidth:65},margin:"6",width:"100%",items:[
			{xtype:"comp_cbo",itemId:"destsal_id",valueField:"destsal_id",displayField:"destsal_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{destsal_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Destino",width:585},
			{xtype:"comppub_perss"},{xtype:"comppub_indivs"}
		]}
	]},{xtype:"displayfield",flex:1},
	{xtype:"container",layout:{type:"vbox"},width:240,items:[
		{xtype:"fieldset",defaults:{labelWidth:70},layout:{type:"vbox"},padding:"2 8 4 8",title:" Datos de Salida ",width:"100%",items:[
			{xtype:"fieldcontainer",fieldLabel:"Nro PECOSA",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"sal_serie",name:"ing_serie",align:"center",disabled:true,maxLength:4,vtype:"onlyNumeric",width:55},{xtype:"comp_txt",itemId:"sal_nro",name:"sal_nro",align:"center",disabled:true,flex:1,maxLength:6,vtype:"onlyNumeric"}]},
			{xtype:"comp_date",itemId:"sal_fecha",name:"sal_fecha",allowBlank:false,disabled:true,fieldLabel:"Fecha",endDateField:"sal_fechasal",vtype:"daterange",width:170},{xtype:"comp_date",itemId:"sal_fechasal",name:"sal_fechasal",disabled:true,fieldLabel:"Fecha Salida",startDateField:"sal_fecha",vtype:"daterange",width:170},{xtype:"comp_cbo",itemId:"alma_key",valueField:"alma_key",displayField:"alma_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{alma_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Almacén",width:"100%"}
		]}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabD",title:"Detalle de Salida",height:250,items:[{xtype:"comp_grid",itemId:"grdLSD",height:250,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:403},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:50},{dataIndex:"cantid",text:"Cantid",align:"right",renderer:fext_FN(3),sortable:false,width:85,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,submit:false,value:""}},{dataIndex:"preuni",text:"Precio Unitario",align:"right",renderer:fext_FN(6),sortable:false,width:115},{dataIndex:"pretot",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"subta_codigo",text:"Cuenta",width:95},{dataIndex:"documento",text:"NEA",width:80},{dataIndex:"_item",text:"Item",align:"right",width:35},{dataIndex:"fuefin_code",text:"Rb",width:35},{dataIndex:"proy_code",text:"Proyecto",width:70},{dataIndex:"secfunc_code",text:"Sec.Func.",width:75},{dataIndex:"referencia",text:"Referencia",width:100}]}]},
	{xtype:"panel",itemId:"tabC",title:"Complementarios",bodyPadding:8,height:250,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"sal_observ",name:"sal_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"sal_monto",name:"sal_monto",disabled:true,fieldLabel:"Importe",labelWidth:65,margin:"0 19 0 0",value:0,width:160}]}
]}
]}],
__compRTS:null,setCompRTS:function(poC){this.__compRTS=poC;},getCompRTS:function(){return this.__compRTS;},
__compLSD:null,setCompLSD:function(poC){this.__compLSD=poC;},getCompLSD:function(){return this.__compLSD;}
});