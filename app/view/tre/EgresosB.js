Ext.define("Siace.view.tre.EgresosB",{extend:"Siace.view.PanB",alias:["widget.tre_egreb"],items:[
{xtype:"panb1",title:"Módulo Comprobantes de Pago ::.",width:"62%",items:[
	{xtype:"comp_grid",itemId:"grdTE",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.egre_flga==98?"mx-letra-rojo":"mx-letra-negro"; }},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"egre_documento",text:"Documento",width:85},{dataIndex:"egre_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),width:80},{dataIndex:"secfunc_code",text:"S.F.",align:"center",width:45},{dataIndex:"fuefin_code",text:"Rubro",width:40},{dataIndex:"tablex_documento",text:"Referencia",width:80},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:65},{dataIndex:"egre_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90},{dataIndex:"razsocial",text:"Razón Social",width:300},{dataIndex:"cuebanc_nro",text:"Cta.Cte.",width:110},{dataIndex:"cheq_nro",text:"Nro. Cheque",width:80}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"egre_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},
		{xtype:"container",layout:{type:"hbox"},items:[{xtype:"comp_cbotop",itemId:"tipdocident_id",name:"tipdocident_id",store:"array.TipDocIdentVentaAB",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipdocident_abrev}&nbsp;</div></tpl>",valueField:"tipdocident_id",displayField:"tipdocident_abrev",fieldLabel:"&nbsp;T.D.I.",listConfig:{cls:"item00001",minWidth:55},value:0,width:55},
			{xtype:"fieldcontainer",itemId:"cntPers",fieldLabel:"&nbsp;",labelAlign:"top",labelSeparator:"",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"pers_key"},{xtype:"hiddenfield",itemId:"PERS_RUC"},{xtype:"comp_txttop",itemId:"pers_ruc",disabled:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPPS",disabled:true},{xtype:"displayfield",itemId:"pers_nombre",hidden:true,fieldCls:"df00101"}]},
			{xtype:"fieldcontainer",itemId:"cntIndiv",fieldLabel:"&nbsp;",hidden:true,labelAlign:"top",labelSeparator:"",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"indiv_key"},{xtype:"hiddenfield",itemId:"INDIV_DNI"},{xtype:"comp_txttop",itemId:"indiv_dni",disabled:true,maxLength:11,width:90},{xtype:"comp_btn_imgsearch",itemId:"btnPIS",disabled:true},{xtype:"displayfield",itemId:"indiv_apenom",hidden:true,fieldCls:"df00101"}]}
		]}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"},{xtype:"comp_btn",itemId:"btnCheque",disabled:true,icon:"resources/icons/btnPrinter.png",text:"Cheque"},{xtype:"comp_btn",itemId:"btnHide",hidden:true},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagTE"}
 ]
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabTETF",title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdTETF",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",text:"Tarea",sortable:false,width:70},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:85},{dataIndex:"egretareafte_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90},{dataIndex:"espedet_nombre",text:"Descripción",sortable:false,width:300}]}],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"egre_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"egre_fecha",fieldLabel:"Fecha",labelWidth:50}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
		]}]},{xtype:"comp_pag",itemId:"pagTETF",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabTEP",hidden:true,title:"Procedencia",items:[{xtype:"comp_grid",itemId:"grdTEP",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tablex_documento",text:"Documento",width:85},{dataIndex:"tablex_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),width:85},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tablex_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90}]},],
	 dockedItems:[{xtype:"comppub_menu",value:4120},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"egre_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"egre_fecha",fieldLabel:"Fecha",labelWidth:50}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
		]}]},{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagTEP",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Requerimientos",items:[
		{xtype:"comp_grid",itemId:"grdLP",columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Registro",sortable:true,width:70},{dataIndex:"ped_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),sortable:true,width:80},{dataIndex:"categ_abrev",text:"Categ",lockable:false,width:50},{dataIndex:"pedweb_fechafin",text:"Vig. Web",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),sortable:true,width:80},
			{dataIndex:"area_abrev",text:"U.O.",lockable:false,sortable:true,width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",lockable:false,sortable:true,width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",lockable:false,sortable:true,width:45},
			{dataIndex:"fase_nombre",text:"Fase",lockable:false,sortable:true,width: 120},{dataIndex:"fase_datetime",text:"Recibido",width:90,renderer:function(val,metaD,rec,rowI,colI,str,view){return rec.data.fase_feho;}},{dataIndex:"usur_login",text:"Cotizador",width:100},{dataIndex:"cantid_doc511",text:"#Cot",align:"right",tooltip:"Número de Cotizaciones",width:45},
			{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),lockable:false,sortable:true,width:90},{dataIndex:"pedtareafte_ajuste",text:"Ampl/Rebaj.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),lockable:false,sortable:true,width:90},{dataIndex:"pedtareafte_ejecutado",text:"Ejecutado",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90},{dataIndex:"pedtareafte_mtemp",text:"Buena Pro",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:4121},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"egre_documento",fieldLabel:"Documento",labelWidth:65,width:180},{xtype:"comp_datofecha",name:"egre_fecha",fieldLabel:"Fecha",labelWidth:50}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
		]}]},		
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnAttach",text:"Adjuntos"},{xtype:"comp_btnFases"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLP",disabled:true}
	]}
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;},
});