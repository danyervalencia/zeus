Ext.define("Siace.view.log.DonacionesB",{extend:"Siace.view.PanelBrowse",alias:["widget.log_donab"],layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panLD",layout:{type:"fit"},height:"100%",width:"55%",items:[
	{xtype:"comp_grid",itemId:"grdLD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"dona_documento",text:"Documento",width:110},{dataIndex:"dona_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"pers_nombre",text:"Proveedor",flex:1},{dataIndex:"dona_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},
		{xtype:"actioncolumn",align:"center",width:30,items:[{icon:"resources/icons/btnDownload.png",tooltip:"<b>DESCARGAR </b>, archivo adjunto.",getClass:function(val,metD,r){return r.data.dona_file1==""?"x-hide-display":"x-grid-center-icon";}}]}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_doc_abrevab"},{xtype:"comp_txttop",itemId:"dona_serie",fieldLabel:"&nbsp;Serie",maxLength:4,vtype:"onlyNumeric",width:40},{xtype:"comp_txttop",itemId:"dona_nro",fieldLabel:"&nbsp;Número",maxLength:8,vtype:"onlyNumeric",width:65},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Proveedor",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",enableKeyEvents:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search"},{xtype:"displayfield",itemId:"pers_nombre",hidden:true,fieldCls:"df00101"}]}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLD"}
 ]
},
{xtype:"panel",border:false,height:"100%",width: "1%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"44%",items:[
	{xtype:"panel",itemId:"tabLDD",height:"100%",layout:{type:"fit"},title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLDD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},
			{dataIndex:"donadet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"donadet_preuni",text:"P.U.",align:"right",renderer:fext_FN(8),width:95},{dataIndex:"donadet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
		]}
	 ],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"dona_documento",fieldLabel:"Documento",labelWidth:65,width:230},{xtype:"comp_datofecha",name:"dona_fecha",fieldLabel:"Fecha",labelWidth:40}]},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagLDD",disabled:true}
	]}
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});