Ext.define("Siace.view.pub.LocalesB",{extend:"Siace.view.PanelBrowse",alias:"widget.pub_locb",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panPL",layout:{type:"fit"},height:"100%",width:"52%",items:[{xtype:"comp_grid",itemId:"grdPL",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.loc_estado==0?"mx-letra-rojo":"mx-letra-negro";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"loc_nombre",text:"Nombre",width:250},{dataIndex:"loc_abrev",text:"Abrev",width:70},{dataIndex:"loc_code",text:"Código",width:50},{dataIndex:"loc_ubigeo",text:"Ubigeo",width:100},{dataIndex:"loc_domicilio",text:"Dirección",width:300}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comp_txttop",itemId:"loc_nombre",fieldLabel:"&nbsp;Nombre",enableKeyEvents:true,maxLength:40,width:250},{xtype:"comppub_loc_codename",name:"loc_key",editable:true,fieldLabel:"&nbsp;Local",labelAlign:"top",width:200}]},
	{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPL"}
]},
{xtype:"panel",border:false,height:"100%",width:"1%"},
{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,width:"47%",items:[
	{xtype:"panel",itemId:"tabPLA",height:"100%",layout:{type:"fit"},title:"Unidades Orgánicas",items:[
		{xtype:"comp_grid",itemId:"grdPLA",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.locarea_estado==0?"mx-letra-rojo":"mx-letra-negro";}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"area_nombre",text:"Descripción",width:350},{dataIndex:"area_abrev",text:"Abrev.",width:70},{dataIndex:"parent_nombre",text:"Dependencia",width:350}]},
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1128},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:75},layout:"vbox",items:[{xtype:"comp_dato",name:"loc_nombre",fieldLabel:"Local"},{xtype:"comp_dato",name:"dpto_codename",fieldLabel:"Departamento"},{xtype:"comp_dato",name:"prvn_codename",fieldLabel:"Provincia"},{xtype:"comp_dato",name:"dstt_codename",fieldLabel:"Distrito"},{xtype:"comp_dato",name:"loc_domicilio",fieldLabel:"Dirección"}]}]},
	 	{xtype:"comp_pag",itemId:"pagPLA",disabled:true}
	]},
]}]
});