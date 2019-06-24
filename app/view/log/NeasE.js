Ext.define("Siace.view.log.NeasE",{extend:"Siace.view.WindowEdit",alias:"widget.log_neae",requires:["Siace.view.comp.bud.ProyS"],width:900,items:[{xtype:"form",bodyPadding:6,border:true,layout:{type:"vbox"},items:[
{xtype:"panel",border:false,layout:{type:"hbox"},width:"100%",items:[
	{xtype:"panel",border:false,defaults:{labelWidth:55},layout:{type:"vbox"},width:500,items:[{xtype:"comppub_year_code",name:"year_id",hidden:true},{xtype:"hiddenfield",itemId:"neadet_item",value:0},
		{xtype:"fieldcontainer",fieldLabel:"NEA Nro.",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"nea_nro",align:"center",disabled:true,width:60},{xtype:"comp_btn_imgsearch",disabled:true},{xtype:"comp_date",itemId:"nea_fecha",allowBlank:false,disabled:true}]},
		{xtype:"comp_cbo",itemId:"tipnea_id",valueField:"tabgen_id",displayField:"tabgen_nombre",disabled:true,fieldLabel:"Tipo",width:253},{xtype:"comp_cbo",itemId:"alma_key",name:"alma_key",valueField:"alma_key",displayField:"alma_nombre",fieldLabel:"Almacén",width:253},{xtype:"compbud_fuefin_codename",editable:true},
	]},{xtype:"displayfield",width:30},
	{xtype:"fieldset",layout:{type:"hbox"},margin:"-4 0 4 0",padding:"0 2 0 2",title:" Referencias ",flex:1,items:[
		{xtype:"panel",border:false,padding:"0 2 0 2",flex:1,items:[{xtype:"comp_grid",itemId:"grdLNR",height:90,columns:[{xtype:"rownumberer",width:20},
			{dataIndex:"secfunc_code",text:"Documento",align:"center",flex:1},{dataIndex:"doc_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),width:80},
			{xtype:"actioncolumn",align:"center",width:30,items:[{icon:"resources/icons/btnDownload.png",tooltip:"<b>DESCARGAR </b>, archivo adjunto.",getClass:function(val,metd,rec){return rec.data.regadua_pdf==""?"x-hide-display":"x-grid-center-icon";}},{icon:"resources/icons/btnUpload.png",tooltip:"<b>SUBIR </b>, archivo al servidor.",getClass:function(val,metd,rec){return rec.data.regadua_pdf==""?"x-grid-center-icon":"x-hide-display";}}]}
		]}]},
		{xtype:"container",layout:"vbox",width:25,margin:"3 0 0 2",items:[{xtype:"button",itemId:"btnNew",iconCls:"icon_New_90",margin:"0 0 4 0"},{xtype:"button",itemId:"btnModify",iconCls:"icon_Modify_90",margin:"0 0 4 0"},{xtype:"button",itemId:"btnDelete",iconCls:"icon_Delete_90"}]}
	]}
]},
{xtype:"compbud_proys",labelWidth:55},
{xtype:"fieldcontainer",itemId:"fcMeta",fieldLabel:"Sec. Func.",labelClsExtra:"lbl00001",labelWidth:55,layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"meta_key",name:"meta_key"},{xtype:"hiddenfield",itemId:"SECFUNC_CODE"},{xtype:"comppub_year_code",itemId:"year_meta",fieldLabel:""},{xtype:"comp_txttop",itemId:"secfunc_code",enableKeyEvents:true,maxLength:4,submitValue:false,vtype:"onlyNumeric",width:50},{xtype:"comp_btn_imgsearch",itemId:"btnBMS"},{xtype:"displayfield",itemId:"secfunc_nombre",fieldCls:"df00101"}]},
{xtype:"container",itemId:"cntDona",hidden:true,layout:{type:"hbox"},items:[
	{xtype:"comp_cbo",itemId:"tipdocident_id",name:"tipdocident_id",store:"array.TipDocIdentNea",valueField:"tipdocident_id",displayField:"tipdocident_abrev",fieldLabel:"Donante",labelWidth:55,margin:"0 4 5 0",value:3,width:125},
	{xtype:"container",itemId:"cntPers",layout:{type:"hbox"},items:[{xtype:"hiddenfield",itemId:"pers_key",submitValue:false},{xtype:"hiddenfield",itemId:"PERS_RUC",submitValue:false},{xtype:"comp_txttop",itemId:"pers_ruc",enableKeyEvents:true,maxLength:11,submitValue:false},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search"},{xtype:"displayfield",itemId:"pers_nombre",fieldCls:"df00101"}]},
	{xtype:"container",itemId:"cntIndiv",hidden:true,layout:{type:"hbox"},items:[{xtype:"hiddenfield",itemId:"indiv_key",submitValue:false},{xtype:"hiddenfield",itemId:"INDIV_DNI",submitValue:false},{xtype:"comp_txttop",itemId:"indiv_dni",enableKeyEvents:true,maxLength:12,submitValue:false},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"indiv_apenom",fieldCls:"df00101"}]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tabDetalle",title:"Detalle Nota de Entrada",height:200,items:[
		{xtype:"comp_grid",itemId:"grdLND",height:200,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",sortable:false,width:105},{dataIndex:"bs_nombre",text:"Descripción",sortable:false,width:380},{dataIndex:"unimed_abrev",text:"Unidad",sortable:false,width:50},
			{dataIndex:"neadet_cantid",text:"Cantid",align:"right",renderer:fext_FN(3),sortable:false,width:85,editor:{xtype:"comp_number",allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:""}},{dataIndex:"neadet_preuni",text:"P.Unitario",align:"right",renderer:fext_FN(8),sortable:false,width:105},{dataIndex:"neadet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"debe_codigo",text:"Debe",width:90},{dataIndex:"tablex_documento",text:"Documento",sortable:false,width:100},{dataIndex:"secfunc_code",text:"Sec.Func.",align:"center",width:60},{dataIndex:"fuefin_code",text:"Rb",width:35}
		]}
	]},
	{xtype:"panel",itemId:"tabComplementos",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[
		{xtype:"comp_txtarea",itemId:"nea_observ",name:"nea_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}
	]}
]},
{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
	{xtype:"button",itemId:"btnAdd",text:"Agregar",iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
	{xtype:"comp_curr",itemId:"nea_monto",name:"nea_monto",disabled:true,fieldLabel:"Importe",labelWidth:55,margin:"0 19 0 0",value:0,width:160}
]}
]}],
__compBMS:"",setCompBMS:function(poComp){this.__compBMS=poComp;},getCompBMS:function(){return this.__compBMS;},
__compBPS:"",setCompBPS:function(poComp){this.__compBPS=poComp;},getCompBPS:function(){return this.__compBPS;},
__TN:"",setTN:function(pcTN){this.__TN=pcTN;},getTN:function(){return this.__TN;},
__compLNDS:"",setCompLNDS:function(poComp){this.__compLNDS=poComp;},getCompLNDS:function(){return this.__compLNDS;}
});