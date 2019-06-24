Ext.define("Siace.view.pub.MarcasB",{extend:"Siace.view.PanelBrowse",alias:"widget.pub_marcb",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panM",layout:{type:"fit"},height:"100%",width:"45%",items:[
	{xtype:"comp_grid",itemId:"grdM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.marc_estado==1?"mx-letra-negro":"mx-letra-rojo";}},
	 columns:[{dataIndex:"marc_nombre",text:"Descripción",flex:1},{dataIndex:"marc_abrev",text:"Abrev",width:60},{xtype:"actioncolumn",itemId:"acPM",id:"acPM",align:"center",sorter:false,width:30,items:[]}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comp_txttop",itemId:"marc_nombre",fieldCls:"txt00001",fieldLabel:"&nbsp;Descripción",enableKeyEvents:true,maxLength:100,width:250}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagM"}
]},
{xtype:"panel",border:false,height:"100%",width:"2%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"53%",items:[
	{xtype:"panel",itemId:"tabC",height:"100%",layout:{type:"fit"},title:"Clases",items:[{xtype:"comp_grid",itemId:"grdC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.bscmarc_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"bsc_codigo",text:"Código",width:60},{dataIndex:"bsc_nombre",text:"Descripción",flex:1}]}],
	 dockedItems:[{xtype:"comppub_menu",value:5163},{xtype:"comp_cboopc"},{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagC",disabled:true}
	]},
	{xtype:"panel",itemId:"tabMO",height:"100%",hidden:true,layout:{type:"fit"},title:"Marcas",items:[
		{xtype:"comp_grid",itemId:"grdMO",columns:[{xtype:"rownumberer",width:30},{dataIndex:"marc_nombre",text:"Descripción",width:250},{dataIndex:"marc_abrev",text:"Abrev",width:60},]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1147},{xtype:"comp_cboopc"},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagMO",disabled:true}
	]},
]}]
});