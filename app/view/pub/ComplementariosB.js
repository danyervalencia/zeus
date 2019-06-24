Ext.define("Siace.view.pub.ComplementariosB",{extend:"Siace.view.PanelBrowse",alias:"widget.pub_complb",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panPC",layout:{type:"fit"},height:"100%",width:"45%",items:[
	{xtype:"comp_grid",itemId:"grdPC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.compl_estado==1?"mx-letra-negro":"mx-letra-rojo";}},
	 columns:[{dataIndex:"compl_nombre",text:"Descripción",flex:1},{dataIndex:"compl_abrev",text:"Abrev",width:60},{xtype:"actioncolumn",itemId:"acPC",id:"acPC",align:"center",sorter:false,width:30,items:[]}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comp_txttop",itemId:"compl_nombre",fieldCls:"txt00001",fieldLabel:"&nbsp;Descripción",enableKeyEvents:true,maxLength:100,width:250}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagPC"}
]},
{xtype:"panel",border:false,height:"100%",width:"2%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"53%",items:[
	{xtype:"panel",itemId:"tabC",height:"100%",layout:{type:"fit"},title:"Clases",items:[{xtype:"comp_grid",itemId:"grdC",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.bsccompl_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"bsc_codigo",text:"Código",width:60},{dataIndex:"bsc_nombre",text:"Descripción",flex:1}]}],
	 dockedItems:[{xtype:"comppub_menu",value:5163},{xtype:"comp_cboopc"},{xtype:"comp_toolbtn",items:[{xtype:"comp_btnAdd"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"}]},{xtype:"comp_pag",itemId:"pagC",disabled:true}]}
]}]
});