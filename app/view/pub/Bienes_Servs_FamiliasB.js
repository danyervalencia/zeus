Ext.define("Siace.view.pub.Bienes_Servs_FamiliasB",{extend:"Siace.view.PanB",alias:"widget.pub_bsfb",items:[
{xtype:"panb1",title:"Módulo de Familias ::.",width:"56%",items:[
	{xtype:"comp_grid",itemId:"grdBSF",columns:[{dataIndex:"bsf_codigo",text:"Código",width:85},{dataIndex:"bsf_nombre",text:"Descripción",flex:1},{dataIndex:"tipbsf_abrev",text:"Tipo",width:40},{dataIndex:"",text:"TAF",tooltip:"Tipo Activo Fijo",width:40}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comppub_bsc_codeab"},{xtype:"comp_txttop",itemId:"bsf_nombre",fieldCls:"txt00001",fieldLabel:"&nbsp;Descripción",maxLength:50,width:250},{xtype:"comp_cbotop",itemId:"tipbsf_id",valueField:"tabgen_id",displayField:"tabgen_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Tipo",width:100}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagBSF"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabBS",title:"Catálogo",items:[{xtype:"comp_grid",itemId:"grdBS",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.bs_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:400},{dataIndex:"unimed_abrev",text:"U.M.",tooltip:"Unidad de Medida",width:50}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1144},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagBS",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLFR",hidden:true,title:"Patrimonio",items:[
		{xtype:"comp_grid",itemId:"grdLFR",columns:[{xtype:"rownumberer",width:30},{dataIndex:"fichreg_codigo",text:"Patrimonio",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:400},{dataIndex:"unimed_abrev",text:"U.M.",width:50},{dataIndex:"marc_nombre",text:"Marca",width:150},{dataIndex:"mod_nombre",text:"Modelo",width:150},{dataIndex:"fichreg_serie",text:"Serie",width:140},{dataIndex:"year_id",text:"Año Fab.",width:60},{dataIndex:"colr_nombre",text:"Color",width:150},{dataIndex:"",text:"Dimensión",width:120},{dataIndex:"",text:"ID",width:60}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1145},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLFR",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabPM",hidden:true,title:"Modelos",items:[
		{xtype:"comp_grid",itemId:"grdPM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.mod_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"marc_nombre",text:"Marca",width:150},{dataIndex:"mod_nombre",text:"Modelo",flex:1}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:9},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"},{xtype:"comp_dato",name:"bsf_codename",fieldLabel:"Familia"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPM",disabled:true}
	]}	
]}]
});