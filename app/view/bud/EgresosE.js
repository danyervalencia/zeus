Ext.define("Siace.view.bud.EgresosE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_egree",requires:["Siace.view.comp.pub.PersS","Siace.view.comp.pub.IndivS"],width:700,items:[{xtype:"form",bodyPadding:8,border:true,items:[
{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:"100%",items:[{xtype:"comppub_year_code",hidden:true,submitValue:false},{xtype:"hiddenfield",itemId:"egretareafte_item",value:0},
	{xtype:"fieldcontainer",labelClsExtra:"lbl00001",fieldLabel:"Documento",layout:"hbox",width:"100%",items:[
		{xtype:"comppub_doc_nombre",store:"array.DocEgre",disabled:true,labelWidth:65,margin:"0 4 0 0",value:202,hidden:true,width:210},{xtype:"comp_txttop",itemId:"egre_nro",align:"center",disabled:true,width:60},{xtype:"comp_date",itemId:"egre_fecha",name:"egre_fecha",allowBlank:false},
		{xtype:"displayfield",flex:1},{xtype:"comp_cbo",itemId:"tipegre_id",name:"tipegre_id",valueField:"tabgen_id",displayField:"tabgen_nombre",labelWidth:35,fieldLabel:"Tipo",margin:"0 4 0 0",width:190},{xtype:"comp_cbotop",itemId:"tabley_year",name:"tabley_year",store:"array.YearsDAB",valueField:"year_id",displayField:"year_nro",disabled:true,fieldLabel:"",listConfig:{cls:"item00001",minWidth:60},value:0,width:60},{xtype:"comppub_doc_abrevab",itemId:"tabley_doc",name:"tabley_doc",store:"array.DocOrdenAB",disabled:true,fieldLabel:""},{xtype:"comp_txt",itemId:"tabley_nro",name:"tabley_nro",disabled:true,width:60}
	]},
	{xtype:"compbud_secfunc_codename"},{xtype:"compbud_tarea_codename"},{xtype:"compbud_fuefin_codename",disabled:true},{xtype:"comppub_area_nombre",itemId:"area_keyx"},
	{xtype:"container",layout:{type:"hbox"},items:[{xtype:"comp_cbo",itemId:"tipdocident_id",name:"tipdocident_id",store:"array.TipDocIdentVenta",valueField:"tipdocident_id",displayField:"tipdocident_abrev",fieldLabel:"Asignado a",labelWidth:65,listConfig:{cls:"item00001",minWidth:55},margin:"0 4 5 0",width:125},{xtype:"comppub_perss"},{xtype:"comppub_indivs"}]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabBETF",bodyPadding:4,title:"Detalle Presupuestal",items:[
		{xtype:"comp_grid",itemId:"grdBETF",height:236,columns:[{xtype:"rownumberer",width:30},
			{dataIndex:"area_abrev",text:"U.O.",sortable:false,width:60},{dataIndex:"tarea_codigo",text:"Tarea",sortable:false,width:70},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:85},{dataIndex:"espedet_nombre",text:"Descripción",sortable:false,width:305},
			{dataIndex:"egretareafte_monto",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:2,maxLength:12,maxValue:999999999,value:""}}
		]},
		{xtype:"container",layout:"hbox",width:"100%",items:[
			{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
				{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5", padding: "2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Suprimir",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
				{xtype:"comp_curr",itemId:"egre_monto",disabled:true,fieldLabel:"Importe",labelWidth:55,value:0,width:151},{xtype:"displayfield",width:19}
			]}
		]}
	]},
	{xtype:"panel",itemId:"tab03",bodyPadding:8,layout:{type:"vbox"},title:"Complementarios",width:"100%",items:[{xtype:"comp_txtarea",itemId:"egre_observ",name:"egre_observ",fieldLabel:"Referencia",labelWidth:65,height:97,width:"100%"}]}
]}]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;},
__compBTFS:null,setCompBTFS:function(poComp){this.__compBTFS=poComp;},getCompBTFS:function(){return this.__compBTFS;},
__f:true,setF:function(pcF){this.__f=pcF;},getF:function(){return this.__f;},
__fFF:true,setFFF:function(poF){this.__fFF=poF;},getFFF:function(){return this.__fFF;},
__nuk:"NoT",setNUK:function(poNUK){this.__nuk=poNUK;},getNUK:function(){return this.__nuk;}
});