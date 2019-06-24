Ext.define("Siace.view.siaf.Nota_ModificatoriaB",{extend:"Siace.view.PanelBrowse",alias:["widget.siaf_notamodifb"],layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panSNM",layout:{type:"fit"},height:"100%",width:"48%",items:[
	{xtype:"comp_grid",itemId:"grdSNM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.notamodif_flga==98?"mx-letra-rojo-bold":"mx-letra-negro";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"notamodif_documento",text:"Documento",width:70},{dataIndex:"mes_code",text:"Mes",width:40},{dataIndex:"notamodif_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"tipnotamodif_codeabrev",text:"Tipo",width:80},{dataIndex:"fuefin_code",text:"Rubro",width:50},{dataIndex:"notamodif_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:110}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"notamodif_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comp_cbotop",itemId:"tipnotamodif_id",valueField:"tabgen_id",displayField:"tabgen_codename",fieldLabel:"&nbsp;Tipo",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_codename}&nbsp;</div></tpl>",width:190}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagSNM"}
 ],
},
{xtype:"panel",border:false,height:"100%",width:"1%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"51%",items:[
	{xtype:"panel",itemId:"tabSNMD",height:"100%",layout:{type:"fit"},title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdSNMD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"fuefin_code",text:"Rubro",width:50},{dataIndex:"tiprecur_code",text:"TR",width:50},{dataIndex:"secfunc_code",text:"S.F.",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",width:90},{dataIndex:"notamodifdet_monto_de",text:"Anulación",align:"right",renderer:fext_FN(2),width:100},{dataIndex:"notamodifdet_monto_a",text:"Crédito",align:"right",renderer:fext_FN(2),width:100}]}],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
			{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"notamodif_documento",fieldLabel:"Documento",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"notamodif_fecha",fieldLabel:"Fecha",labelWidth:35}]},{xtype:"comp_dato",name:"tipnotamodif_codename",fieldLabel:"Tipo"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}
		]}]},{xtype:"comp_pag",itemId:"pagSNMD",disabled:true}
	]}
]}]});