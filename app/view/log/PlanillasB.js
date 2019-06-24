Ext.define("Siace.view.log.PlanillasB",{extend:"Siace.view.PanB",alias:"widget.log_planb",requires:["Siace.view.comp.log.Tiporden_abrev"],items:[
{xtype:"panb1",title:"Módulo de Planillas Logísticas ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdLP",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rowcol;}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"plan_documento",text:"Número",width:80},{dataIndex:"plan_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"tiporden_abrev",text:"Tipo",width:60},
		{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fuefin_code",text:"Rb",width:45},{dataIndex:"pers_nombre",text:"Proveedor",width:300},{dataIndex:"certif_nro",text:"Certif",align:"right",width:70},{dataIndex:"orden",text:"Orden",width:80},{dataIndex:"plan_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"complog_tiporden_abrev"},{xtype:"comp_nrotop",itemId:"plan_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp;Proveedor",labelAlign:"top",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",enableKeyEvents:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPPS"},{xtype:"displayfield",itemId:"pers_nombre",hidden:true}]}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnGlosa",disabled:true,iconCls:"icon_Modify",text:"Glosa"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnCertif",disabled:true,icon:"resources/icons/siaf.png",text:"Certificado"},{xtype:"comp_btn",itemId:"btnGO",disabled:true,icon:"resources/icons/generate.png",text:"Generar Orden"}]},{xtype:"comp_pag",itemId:"pagLP"}
 ]
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLPP",title:"Documentos",items:[{xtype:"comp_grid",itemId:"grdLPP",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tablex_documento",text:"Documento",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},{dataIndex:"ordendet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:90},{dataIndex:"ordendet_preuni",text:"P.U.",align:"right",renderer:fext_FN(6),width:90},{dataIndex:"ordendet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"may_code",text:"Cuenta",width:50},{dataIndex:"subcta_code",text:"Sub Cuenta",width:80}]}],
	 dockedItems:[{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"plan_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"plan_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"plan_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"tiporden_nombre",fieldLabel:"Tipo Serv."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"pers_codename",fieldLabel:"Proveedor"},{xtype:"comp_dato",name:"plan_certif",fieldLabel:"Certificado"}
		]}]},{xtype:"comp_pag",itemId:"pagLPP",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLTF",hidden:true,title:"Procedencia",items:[
		{xtype:"comp_grid",itemId:"grdLOP",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tablex_documento",text:"Documento",width:85},{dataIndex:"tablex_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:85},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tablex_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5118},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"orden_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"orden_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"orden_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"},{xtype:"comp_dato",name:"orden_siaf",fieldLabel:"S.I.A.F."}
		]}]},{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLOP",disabled:true}
	]},
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});