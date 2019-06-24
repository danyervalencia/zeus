Ext.define("Siace.view.siaf.CertificadoB",{extend:"Siace.view.PanelBrowse",alias:["widget.siaf_certifb"],layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"pan",layout:{type:"fit"},height:"100%",width:"48%",items:[
	{xtype:"comp_grid",itemId:"grd",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.notamodif_flga==98?"mx-letra-rojo-bold":"mx-letra-negro";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"certif_documento",text:"Certificado",align:"center",width:85},{dataIndex:"certif_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"secfunc_code",text:"S.F.",width:50},{dataIndex:"fuefin_code",text:"Rub",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"certifmeta_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:100}]}
 ],_f:true,setF:function(poF){this._f=poF;},getF:function(){return this._f;},
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"certif_nro"},{xtype:"comp_fechaini",disabled:true},{xtype:"comp_fechafin",disabled:true},{xtype:"compbud_secfunc_code"},{xtype:"compbud_fuefin_code"},{xtype:"comp_cbotop",itemId:"espedet_id",valueField:"espedet_id",displayField:"espedet_codigo",tpl:"<tplfor='.''><div class='x-boundlist-item'>{espedet_codigo}&nbsp;&nbsp;{espedet_nombre}</div></tpl>",editable:true,fieldLabel:"&nbsp;Clasificador",listConfig:{cls:"item00001",minWidth:500},width:100}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pag"}
 ],
},
{xtype:"panel",border:false,height:"100%",width:"1%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"51%",items:[
	{xtype:"panel",itemId:"tabSCMC",height:"100%",layout:{type:"fit"},title:"Compromiso",items:[
		{xtype:"comp_grid",itemId:"grdSCMC",columns:[{xtype:"rownumberer",width:30},{dataIndex:"doc_abrev",text:"Documento",width:150},{dataIndex:"doc_num",text:"Número",width:120},{dataIndex:"doc_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"certifmeta_anulacion",text:"Anulado",align:"right",renderer:fext_FN(2),width:100},{dataIndex:"certifmeta_compromiso",text:"Comprometido",align:"right",renderer:fext_FN(2),width:100}
		]}
	 ],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"certif_documento",fieldLabel:"Certificado",labelWidth:65,width:170},{xtype:"comp_datofecha",name:"certif_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"certifmeta_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"espedet_codename",fieldLabel:"Clasificador"}
		]}]},{xtype:"comp_pag",itemId:"pagSCMC",disabled:true}
	]}
]}]});