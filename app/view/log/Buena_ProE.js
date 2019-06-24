Ext.define("Siace.view.log.Buena_ProE",{extend:"Siace.view.WindowEdit",alias:"widget.log_bpe",width:900,items:[
{xtype:"form",bodyPadding:4,border:false,defaults:{labelWidth:70},layout:{type:"vbox"},items:[
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:600,items:[{xtype:"comppub_year_code",name:"year_id",hidden:true},{xtype:"hiddenfield",itemId:"coti_key",name:"coti_key"},{xtype:"hiddenfield",name:"ped_key"},
		{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fftr_codename",disabled:true,hidden:true},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor",labelWidth:70}
	]},{xtype:"comp_btnModify",disabled:false,height:23,hidden:true,iconCls:"icon_Modify_90",margin:"0 0 0 4",padding:"2 3 0 4"},{xtype:"displayfield",flex:1},
	{xtype:"comp_tooltop",defaults:{labelWidth:60},layout:"vbox",width:150,items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Requer.",fieldCls:"df00404",labelClsExtra:"lbl00401"},{xtype:"comp_datofecha",name:"ped_fecha",fieldCls:"df00406",labelClsExtra:"lbl00401"},{xtype:"comp_datomonto",name:"ped_monto",labelClsExtra:"lbl00401",fieldCls:"df00406"},{xtype:"comp_dato"},{xtype:"comp_dato",name:"coti_documento",fieldLabel:"Cotización",fieldCls:"df00404",labelClsExtra:"lbl00401"},{xtype:"comp_datofecha",name:"coti_fecha",fieldCls:"df00406",labelClsExtra:"lbl00401"}]}
]},
{xtype:"panel",border:false,width:"100%",items:[
	{xtype:"comp_grid",itemId:"grdLCD",height:230,selType:"checkboxmodel",selModel:{mode:"MULTI",injectCheckbox:0},columns:[
		{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:380},{dataIndex:"unimed_nombre",text:"U.M.",sortable:false,width:80},
		{dataIndex:"bpdet_cantid",text:"Cant.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),sortable:false,width:80,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},
		{dataIndex:"cotidet_preuni",text:"Precio Unitario",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00000000"),sortable:false,width:120},{dataIndex:"bpdet_pretot",text:"SubTotal",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:90},
		{dataIndex:"bs_codigo",text:"Código",sortable:false,width:120},{dataIndex:"cotidet_marca",text:"Marca",sortable:false,width:95},{dataIndex:"cotidet_modelo",text:"Modelo",sortable:false,width:95}
	]},
	{xtype:"comp_grid",itemId:"grdLBPD",height:230,hidden:true,columns:[
		{dataIndex:"espedet_codigo",text:"Clasificador",locked:true,sortable:false,width:85},{dataIndex:"bs_nombre",text:"Descripción",locked:true,sortable:false,width:404},{dataIndex:"unimed_nombre",text:"U.M.",sortable:false,width:80},
		{dataIndex:"bpdet_cantid",text:"Cant.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),sortable:false,width:80,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"bpdet_preuni",text:"Precio Unitario",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00000000"),sortable:false,width:120},{dataIndex:"bpdet_pretot",text:"SubTotal",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:90},
		{dataIndex:"bs_codigo",text:"Código",sortable:false,width:120},{dataIndex:"cotidet_marca",text:"Marca",sortable:false,width:95},{dataIndex:"cotidet_modelo",text:"Modelo",sortable:false,width:95},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",sortable:false,width:300}
	]},
]},
{xtype:"container",itemId:"cntLBPTF",hidden:false,layout:{type:"hbox"},padding:"5 0 0 0",width:"100%",items:[
{xtype:"panel",border:false,width:670,items:[
	{xtype:"comp_txtarea",itemId:"bp_observ",name:"bp_observ",rows:5,width:"100%"},
	{xtype:"comp_grid",itemId:"grdLBPTF",height:90,hidden:true,columns:[{xtype:"rownumberer",width:25},
		{dataIndex:"tarea_codigo",text:"Tarea",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:85},{dataIndex:"espedet_nombre",text:"Descripción",flex:1},{dataIndex:"bptareafte_monto",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),text:"Importe",width:90},
		{dataIndex:"bptareafte_percep",text:"Percepción",align:"right",renderer:Ext.util.Format.numberRenderer("000,000.00"),sortable:false,width:70,editor:{xtype:"comp_number",decimalPrecision:2,maxLength:10,maxValue:999999,value:""}}
	]}
]},
{xtype:"displayfield",flex:1},
{xtype:"container",layout:{type:"vbox"},width:173,items:[
	{xtype:"container",layout:{type:"hbox"},margin:"0 25 10 0",items:[
		{xtype:"comp_cbotop",itemId:"mone_id",name:"mone_id",store:"array.Mone",valueField:"mone_id",displayField:"mone_abrev",disabled:true,value:1,width:60},
		{xtype:"comp_curr",itemId:"bp_monto",disabled:true,value:"",width:90}
	]},
	{xtype:"comp_txt",itemId:"certif_nro",fieldLabel:"&nbsp; Certificado",hidden:true,labelWidth:70,margin:"0 0 5 0",maxLength:10,vtype:"onlyNumeric",width:"100%"},
	{xtype:"comp_btn",itemId:"btnCertificado",icon:"resources/icons/siaf.png",hidden:true,text:" Registrar Certificado ",width:"100%"}
]}
]}]}],
__filterFFTR:false,setFilterFFTR:function(poFilter){this.__filterFFTR=poFilter;},getFilterFFTR:function(){return this.__filterFFTR;}
});