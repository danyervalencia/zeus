Ext.define("Siace.view.log.ValesE",{extend:"Siace.view.WinE",alias:"widget.log_vale",requires:["Siace.view.comp.pub.IndivS"],width:930,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"panel",border:false,layout:{type:"hbox"},width:"100%",items:[
	{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:600,items:[{xtype:"comppub_year_code",hidden:true,name:"year_id"},{xtype:"comppub_area_nombre",name:"area_key"},
		{xtype:"fieldcontainer",fieldLabel:"Procedencia",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_cbotop",itemId:"tablex_key",valueField:"tablex_key",displayField:"tablex_documento",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tablex_documento}&nbsp;</div></tpl>",width:160},{xtype:"comp_datofecha",itemId:"tablex_fecha",fieldLabel:"",margin:"1 25 0 4",width:100},{xtype:"comp_dato",itemId:"expe_nro",fieldLabel:"SIAF",labelWidth:35,margin:"1 0 0 4"}]},
		{xtype:"comp_tooltop",defaults:{labelWidth:70},margin:"-4 0 0 -4",layout:"vbox",items:[{xtype:"comp_dato",itemId:"secfunc_codename",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",itemId:"tarea_codename",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",itemId:"pers_codename",name:"pers_codename",fieldLabel:"Proveedor"}]},
		{xtype:"comppub_indivs"},{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"veh_key",name:"veh_key"},{xtype:"hiddenfield",itemId:"VEH_PLACA",name:"VEH_PLACA",submitValue:false},{xtype:"comp_txt",itemId:"veh_placa",name:"veh_placa",enableKeyEvents:true,fieldLabel:"Vehículo",labelWidth:65,margin:"0 4 4 0",maxLength:15,submitValue:false,vtype:"vehiculoPlaca",width:160},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"veh_detalle",name:"veh_detalle",fieldCls:"df00101",value:""}]}
	]},{xtype:"displayfield",flex:1},
	{xtype:"container",layout:{type:"vbox"},width:240,items:[
		{xtype:"fieldset",defaults:{labelWidth:60},layout:{type:"vbox"},padding:"2 8 4 8",title:" Datos del Vale ",width:"100%",items:[
			{xtype:"fieldcontainer",fieldLabel:"Nro Vale",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"sal_serie",name:"ing_serie",align:"center",disabled:true,maxLength:4,vtype:"onlyNumeric",width:55},{xtype:"comp_txt",name:"sal_nro",align:"center",disabled:true,flex:1}]},
			{xtype:"comp_date",itemId:"val_fecha",name:"val_fecha",allowBlank:false,disabled:true,fieldLabel:"Fecha",endDateField:"sal_fechasal",vtype:"daterange",width:170},{xtype:"comp_date",itemId:"sal_fechasal",name:"sal_fechasal",disabled:true,fieldLabel:"Recibido",startDateField:"sal_fecha",vtype:"daterange",width:170},{xtype:"comp_cbo",itemId:"motval_id",name:"motval_id",valueField:"tabgen_id",displayField:"tabgen_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",fieldLabel:"Motivo",width:"100%"}
		]}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabDetalle",title:"Detalle Vale de Combustible",height:200,items:[{xtype:"comp_grid",itemId:"grdLVD",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:403},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:50},{dataIndex:"valdet_cantid",text:"Cantid",align:"right",renderer:fext_FN(3),sortable:false,width:85,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"valdet_preuni",text:"P.Unitario",align:"right",renderer:fext_FN(8),sortable:false,width:115},{dataIndex:"valdet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90}]}]},
	{xtype:"panel",itemId:"tabComplementos",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"val_observ",name:"val_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
		{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
		{xtype:"comp_curr",itemId:"val_monto",disabled:true,fieldLabel:"Importe",labelWidth:65,margin:"0 19 0 0",value:0,width:160}
	]}
]}
]}],
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;},
__filtAMT:false,setFiltAMT:function(poFiltAMT){this.__filtAMT=poFiltAMT;},getFiltAMT:function(){return this.__filtAMT;},
__nuk:"",setNUK:function(poNUK){this.__nuk=poNUK;},getNUK:function(){return this.__nuk;}
});