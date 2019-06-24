Ext.define("Siace.view.pub.Bienes_Servs_ClasesB",{extend:"Siace.view.PanelBrowse",alias:"widget.pub_bscb",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panC",layout:{type:"fit"},height:"100%",width:"50%",items:[
	{xtype:"comp_grid",itemId:"grdC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.bsc_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{dataIndex:"bsc_codigo",text:"Código",width:60},{dataIndex:"bsc_nombre",text:"Descripción",flex:1},{dataIndex:"bsc_abrev",text:"Abrev",width:60}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_bst_code"},{xtype:"comppub_bsg_codeab"},{xtype:"comp_txttop",itemId:"bsc_nombre",fieldCls:"txt00001",fieldLabel:"&nbsp;Descripción",enableKeyEvents:true,maxLength:50,width:250}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagC"}
]},
{xtype:"panel",border:false,height:"100%",width:"2%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"48%",items:[
	{xtype:"panel",itemId:"tabF",height:"100%",layout:{type:"fit"},title:"Familias",items:[{xtype:"comp_grid",itemId:"grdF",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.tipbsf_id==1057?"mx-letra-azul":"mx-letra-negro";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"bsf_codigo",text:"Código",width:85},{dataIndex:"bsf_nombre",text:"Descripción",width:400},{dataIndex:"tipbsf_abrev",text:"Tipo",width:40},{dataIndex:"",text:"TAF",tooltip:"Tipo Activo Fijo",width:40}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1146},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagF",disabled:true}
	]},
	{xtype:"panel",itemId:"tabM",height:"100%",hidden:true,layout:{type:"fit"},title:"Marcas",items:[
		{xtype:"comp_grid",itemId:"grdM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return (r.data.bscmarc_estado==1?"mx-letra-negro":"mx-letra-rojo");}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"marc_nombre",text:"Descripción",width:250},{dataIndex:"marc_abrev",text:"Abrev",width:60}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1147},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagM",disabled:true}
	]},
	{xtype:"panel",itemId:"tabCO",height:"100%",hidden:true,layout:{type:"fit"},title:"Complementarios",items:[
		{xtype:"comp_grid",itemId:"grdCO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return (r.data.bsccompl_estado==1?"mx-letra-negro":"mx-letra-rojo");}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"compl_nombre",text:"Descripción",width:250},{dataIndex:"compl_abrev",text:"Abrev",width:60},{dataIndex:"bsccompl_oblig",text:"Oblig",align:"center",width:45},{dataIndex:"bsccompl_orden",align:"right",text:"Orden",width:50}]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1148},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:40},layout:"vbox",items:[{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo"},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagCO",disabled:true}
	]}
]}]
});