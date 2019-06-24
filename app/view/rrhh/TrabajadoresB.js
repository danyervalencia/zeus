Ext.define("Siace.view.rrhh.TrabajadoresB",{extend:"Siace.view.PanB",alias:["widget.rrhh_trabjb"],items:[
{xtype:"panb1",title:"Módulo de Trabajadores ::.",width:"45%",items:[{xtype:"comp_grid",itemId:"grdPI",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tipdocident_abrev",text:"D.I.",width:50},{dataIndex:"indiv_dni",text:"N° D.I.",width:100},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",flex:1},
	{xtype:"actioncolumn",itemId:"acPI",id:"acPI",align:"center",sorter:false,width:30,items:[{icon:"resources/icons/user_photo.png",getClass:function(val,metad,r,rowI,colI,str){if(r.data.indiv_foto==""){return "x-hide-display"}else{return "x-grid-center-icon"}},handler:function(grid,rowI,colI,item,e,rec,row){this.fireEvent("itemclick",grid,rec,item,row,rowI,colI,e,"tooltip");}}]}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comp_cbotop",itemId:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipdocident_abrev}&nbsp;</div></tpl>",fieldLabel:"&nbsp;D.I.",listConfig:{cls:"item00001",minWidth:50},maxLength:4,minChars:1,width:50},
		{xtype:"comp_txttop",itemId:"indiv_dni",enableKeyEvents:true,fieldLabel:"&nbsp;N° D.I.",maxLength:15,width:80},{xtype:"comp_txttop",itemId:"indiv_appaterno",enableKeyEvents:true,fieldLabel:"&nbsp;Apellido Paterno",maxLength:15,width:100},{xtype:"comp_txttop",itemId:"indiv_apmaterno",enableKeyEvents:true,fieldLabel:"&nbsp;Apellido Materno",maxLength:15,width:100},{xtype:"comp_txttop",itemId:"indiv_nombres",enableKeyEvents:true,fieldLabel:"&nbsp;Nombre",maxLength:15,width:100}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagPI"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabRT",title:"Registros Laborales",items:[{xtype:"comp_grid",itemId:"grdRT",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.trabj_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"trabj_code",text:"Código",width:75},{dataIndex:"area_nombre",text:"Unidad Orgánica",width:300},{dataIndex:"carg_nombre",text:"Cargo",width:200},{dataIndex:"trabj_fechaini",text:"Inicio",align:"center",width:85,renderer:fext_FD()},{dataIndex:"trabj_fechafin",text:"Término",align:"center",width:85,renderer:fext_FD()}]}],
	 dockedItems:[
	 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"comp_dato",name:"indiv_dni",fieldLabel:"Nro. D.I."},{xtype:"comp_dato",name:"indiv_apenom",fieldLabel:"Ap. Nombres"}]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagRT",disabled:true}
	]},
]}]
});