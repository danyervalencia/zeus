Ext.define("Siace.view.log.CotizacionesE",{extend:"Siace.view.WindowEdit",alias:"widget.log_cotie",requires:["Siace.view.comp.pub.PersS"],width:900,items:[{xtype:"form",bodyPadding:6,border:false,layout:{type:"vbox"},items:[
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",width:710,items:[{xtype:"hiddenfield",itemId:"ped_key",name:"ped_key"},{xtype:"hiddenfield",itemId:"tipped_id",name:"tipped_id"},{xtype:"hiddenfield",itemId:"bp_key"},
		{xtype:"comp_cbo",itemId:"year_id",store:"array.Years",valueField:"year_id",hidden:true,displayField:"year_code"},
		{xtype:"fieldcontainer",fieldLabel:"Cotización",labelClsExtra:"lbl00001",layout:"hbox",margin:"0 0 2 0",items:[{xtype:"comp_txttop",itemId:"coti_nro",align:"center",disabled:true,fieldCls:"txt00005",submitValue:false,width:70},{xtype:"comp_date",itemId:"coti_fecha",name:"coti_fecha",allowBlank:false}]},
		{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fftr_codename",fieldLabel:"Fue.Financ."}
	]},{xtype:"comp_dato",flex:1},
	{xtype:"comp_tooltop",defaults:{labelWidth:50},layout:"vbox",width:140,items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Requer."},{xtype:"comp_datofecha",name:"ped_fecha"},{xtype:"comp_datomonto",name:"ped_monto"}]}
]},
{xtype:"container",layout:{type:"hbox"},items:[{xtype:"comp_cbo",itemId:"tipdocident_id",name:"tipdocident_id",store:"array.TipDocIdentVenta",valueField:"tipdocident_id",displayField:"tipdocident_abrev",disabled:true,fieldLabel:"Proveedor",labelWidth:70,listConfig:{cls:"item00001",minWidth:55},margin:"0 4 5 0",value:3,width:125},{xtype:"comppub_perss"}]},
{xtype:"panel",border:false,width:"100%",items:[
	{xtype:"comp_grid",itemId:"grdLCD",height:230,viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.bpdet_cantid*1>0?"mx-letra-azul":"mx-letra-negro";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:380},{dataIndex:"cotidet_cantid",text:"Cant.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),sortable:false,width:80},{dataIndex:"unimed_nombre",text:"U.M.",sortable:false,width:80},{dataIndex:"cotidet_preuni",text:"Precio Unitario",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00000000"),sortable:false,width:110,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:8,maxLength:20,maxValue:999999999,submitValue:false}},{dataIndex:"cotidet_pretot",text:"SubTotal",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:95},
		{dataIndex:"cotidet_marca",text:"Marca",sortable:false,width:90,editor:{xtype:"comp_txt",maxLength:40,submitValue:false}},{dataIndex:"cotidet_modelo",text:"Modelo",sortable:false,width:90,editor:{xtype:"comp_txt",maxLength:40,submitValue:false}},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:120},{dataIndex:"espedet_codigo",text:"Clasificador",hidden:true,sortable:false,width:85},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",hidden:true,sortable:false,width:300}
	]}
]},
{xtype:"container",layout:{type:"hbox"},margin:"3 0 4 0",width:"100%",items:[
{xtype:"comp_cbo",itemId:"coti_inc_igv",name:"coti_inc_igv",valueField:"coti_inc_igv",displayField:"mone_abrev",disabled:true,fieldLabel:"&nbsp; Incluye IGV",labelClsExtra:"lbl00101",labelWidth:80,submitValue:false,width:140},{xtype:"displayfield",width:16},{xtype:"comp_curr",itemId:"coti_plazo",name:"coti_plazo",fieldLabel:"&nbsp;Plazo Entrega",labelWidth:95,margin:"0 4",numberDecimal:0,width:155},{xtype:"comp_cbo",itemId:"tipplaz_id",name:"tipplaz_id",store:"array.log.TipPlaz",valueField:"tipplaz_id",displayField:"tipplaz_nombre",disabled:true,width:130},{xtype:"displayfield",flex:1},{xtype:"comp_cbo",itemId:"mone_id",name:"mone_id",store:"array.Mone",valueField:"mone_id",displayField:"mone_abrev",disabled:true,fieldLabel:"Importe",labelWidth:50,margin:"0 3",submitValue:false,value:1,width:100},{xtype:"comp_curr",itemId:"coti_monto",name:"coti_monto",disabled:true,width:96},
]},
{xtype:"container",itemId:"cntObserv",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:{type:"vbox"},width:350,items:[
		{xtype:"container",layout:{type:"hbox"},width:"100%",items:[{xtype:"comp_curr",itemId:"coti_vigencia",name:"coti_vigencia",fieldLabel:"&nbsp; Validez (Dias)",labelWidth:80,numberDecimal:0,width:140},{xtype:"displayfield",width:20},{xtype:"comp_curr",itemId:"coti_garantia",name:"coti_garantia",fieldLabel:"&nbsp;Garantia (Meses)",labelWidth:95,numberDecimal:0,width:155}]},
		{xtype:"comp_cbo",itemId:"lugentr_id",name:"lugentr_id",valueField:"lugentr_id",displayField:"lugentr_nombre",fieldLabel:"&nbsp; Lugar Entrega",labelClsExtra:"lbl00001",labelWidth:80,margin:"5 0 0 0", width: 250 },
		{xtype:"comp_cbo",itemId:"tippag_id",name:"tippag_id",valueField:"tippag_id",displayField:"tippag_nombre",fieldLabel:"&nbsp; Forma Pago",labelClsExtra:"lbl00001",labelWidth:80,margin:"5 0 0 0",width:250}
	]},{xtype:"displayfield",width:40},
	{xtype:"container",layout:{type:"vbox"},flex:1,items:[
		{xtype:"comp_txtarea",itemId:"coti_observ",name:"coti_observ",width:"100%",rows:5},
		{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"hiddenfield",itemId:"coti_file1",name:"coti_file1"},{xtype:"comp_file",itemId:"ffiF1",name:"ffiF1",buttonOnly:false,hideLabel:false,fieldLabel:"&nbsp;Archivo Adjunto",labelWidth:90,flex:1},{xtype:"comp_btn_imgpdf",itemId:"btnF1Del",iconCls:"icon_Delete_90",disabled:true},{xtype:"comp_btn_imgpdf",itemId:"btnF1Dow",disabled:true,margin:"0 0 0 0"}]}
	]}
]}]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});