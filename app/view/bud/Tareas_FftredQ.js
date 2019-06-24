Ext.define("Siace.view.bud.Tareas_FftredQ",{extend:"Siace.view.PanelBrowse",alias:"widget.bud_tareafteq",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panBTF",layout:{type:"fit"},height:"100%",width:"58%",items:[
	{xtype:"comp_grid",itemId:"grdBTF",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.tareafte_saldo*1>=0?"mx-letra-negro":"mx-letra-rojo";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",align:"center",text:"Tarea",width:70},{dataIndex:"fftr_code",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"tareafte_pia",text:"P.I.A.",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_ingreso_modif",text:"N.P.Ingreso",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_egreso_modif",text:"N.P.Egreso",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_pim",text:"P.I.M.",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_ajuste",text:"Ajuste",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_egreso",text:"Egreso",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"tareafte_saldo",text:"Saldo",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_nombre",text:"Descripción Clasificador",width:300}]}
 ],_f:true,setF:function(poF){this._f=poF;},getF:function(){return this._f;},
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comppub_year_code"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tipgast_code"},{xtype:"compbud_tarea_codigo"},{xtype:"compbud_fuefin_code"},{xtype:"compbud_tiprecur_code"},
		{xtype:"comp_cbotop",itemId:"gene_id",valueField:"gene_id",displayField:"gene_codigo",tpl:"<tpl for='.''><div class='x-boundlist-item'>{gene_codigo}&nbsp;&nbsp;{gene_nombre}</div></tpl>",fieldLabel:"&nbsp;Gen",listConfig:{cls:"item00001",minWidth:500},width:45},
		{xtype:"comp_cbotop",itemId:"espedet_id",valueField:"espedet_id",displayField:"espedet_codigo",tpl:"<tplfor='.''><div class='x-boundlist-item'>{espedet_codigo}&nbsp;&nbsp;{espedet_nombre}</div></tpl>",editable:true,fieldLabel:"&nbsp;Clasificador",listConfig:{cls:"item00001",minWidth:500},width:100}
	]},
	{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnPrinter",itemId:"btnPCP",text:"Consolidado"},{xtype:"comp_btnPrinter",itemId:"btnPDP",text:"Detallado"}]},{xtype:"comp_pag",itemId:"pagBTF"}
]},
{xtype:"panel",border:false,height:"100%",width:"1%"},
{xtype:"tabpanel",itemId:"tab01",activeTab:0,height:"100%",plain:true,width:"41%",items:[
	{xtype:"panel",itemId:"tabM",height:"100%",layout:{type:"fit"},title:"Movimientos",items:[
		{xtype:"comp_grid",itemId:"grdM",columns:[{xtype:"rownumberer",width:30},
			{dataIndex:"fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},{dataIndex:"documento",text:"Documento",width:100},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},{dataIndex:"referencia",text:"Referencia",width:100},
			{dataIndex:"ingreso",align:"right",text:"Ingresos",width:100,renderer:function(val,metaD,rec){return rec.data.ingreso*1==0?"":Ext.util.Format.number(rec.data.ingreso,"000,000,000.00");}},
			{dataIndex:"egreso",align:"right",renderer:fext_FN(2),text:"Egresos",width:100,renderer:function(val,metaD,rec){return rec.data.egreso*1==0?"":Ext.util.Format.number(rec.data.egreso,"000,000,000.00");}},{dataIndex:"saldo",align:"right",renderer:fext_FN(2),text:"Saldo",width:100},{dataIndex:"detalle",text:"Descripción",width:350}
		]},
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T.Recurso"},{xtype:"comp_dato",name:"espedet_codename",fieldLabel:"Clasificador"}]}]},
		{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnPdf",itemId:"btnPMP",disabled:true},{xtype:"comp_btnExcel",itemId:"btnPME",disabled:true}]},{xtype:"comp_pag",itemId:"pagM",disabled:true}
	]}
]}]});