Ext.define("Siace.view.log.OrdenesPrev",{extend:"Siace.view.PanelBrowse",alias:"widget.log_ordenprev",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panLO",layout:{type:"fit"},height:"100%",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLO",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.orden_flga==98?"mx-letra-rojo":"mx-letra-negro";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"orden_documento",text:"Número",width:80},{dataIndex:"orden_fecha",text:"Fecha",align:"center",width:80,renderer:Ext.util.Format.dateRenderer("d/m/Y")},{dataIndex:"tiporden_code",text:"Proc",tooltip:" Procedencia ",width:40},
		{dataIndex:"area_abrev",text:"U.O.",tooltip:" Unidad Orgánica ",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},{dataIndex:"orden_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code",store:"array.YearsDAB"},{xtype:"comppub_doc_abrevab",store:"array.DocOrdenAB",value:516,hidden:true},{xtype:"comp_nrotop",itemId:"orden_nro",enableKeyEvents:true},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code",disabled:true},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Proveedor",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",enableKeyEvents:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPers_search"},{xtype:"displayfield",itemId:"pers_nombre",hidden:true,fieldCls:"df00101"}]}
	]},
	{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLO"}
 ]
},
{xtype:"panel",border:false,height:"100%",width:"1%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"37%",items:[
	{xtype:"panel",itemId:"tabLOD",height:"100%",layout:{type:"fit"},title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdLOD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},{dataIndex:"ordendet_cantid",text:"Cantidad",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),width:90},{dataIndex:"ordendet_preuni",text:"P.U.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000000"),width:90},{dataIndex:"ordendet_pretot",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}]}],
	 dockedItems:[{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"orden_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"orden_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"orden_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"},{xtype:"comp_dato",name:"orden_siaf",fieldLabel:"S.I.A.F."}
		]}]},{xtype:"comp_pag",itemId:"pagLOD",disabled:true}
	]},
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});