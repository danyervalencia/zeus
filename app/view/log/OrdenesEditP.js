Ext.define("Siace.view.log.OrdenesEditP",{extend:"Siace.view.WindowEdit",alias:"widget.log_ordeneditp",width:930,items:[{xtype:"form",bodyPadding:6,border:true,layout:{type:"vbox"},items:[
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",defaults:{labelWidth:65},layout:"vbox",width:580,items:[
		{xtype:"fieldcontainer",fieldLabel:"Documento",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[
		{xtype:"comppub_year_code",name:"year_id",store:"array.YearsD",fieldLabel:""},{xtype:"comppub_doc_nombre",store:"array.DocOrden",disabled:true,fieldLabel:"",margin:"0 4 0 0",value:516,width:160},
		{xtype:"comp_txttop",itemId:"orden_nro",name:"orden_nro",align:"center",width:60},{xtype:"comp_date",itemId:"orden_fecha",name:"orden_fecha",allowBlank:false}]},
		{xtype:"comppub_area_nombre",itemId:"areakey",name:"area_key",editable:true},{xtype:"compbud_secfunc_codename"},{xtype:"compbud_tarea_codename",name:"tarea_key",disabled:true},{xtype:"compbud_fuefin_codename",name:"fuefin_id",editable:true},{xtype:"compbud_tiprecur_codename",name:"tiprecur_id"},
		{xtype:"fieldcontainer",fieldLabel:"Proveedor",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"pers_key",name:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",name:"pers_ruc",enableKeyEvents:true,maxLength:11,submitValue:false},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search"},{xtype:"displayfield",itemId:"pers_nombre",name:"pers_nombre",fieldCls:"df00101"}]},
	]},{xtype:"displayfield",width:25},
	{xtype:"container",layout:"vbox",flex:1,items:[]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"panLOD",title:"Detalle de Orden",height:200,items:[
		{xtype:"comp_grid",itemId:"grdLOD",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:412},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:45},
			{dataIndex:"ordendet_cantid",text:"Cantid",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),sortable:false,width:90,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"ordendet_preuni",text:"P.Unitario",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00000000"),sortable:false,width:110,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:6,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"ordendet_pretot",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:90},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:85}
		]}
	]},
	{xtype:"panel",itemId:"panC",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"orden_observ",name:"orden_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"orden_monto",disabled:true,fieldLabel:"Importe",labelWidth:55,margin:"0 19 0 0",value:0,width:151}]}
]}]}],
__compPBSS:null,setCompPBSS:function(poComp){this.__compPBSS=poComp;},getCompPBSS:function(){return this.__compPBSS;},
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
});