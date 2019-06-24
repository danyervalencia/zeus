Ext.define("Siace.view.pub.IndividuosB",{extend:"Siace.view.PanB",alias:"widget.pub_indivb",items:[
{xtype:"panb1",title:"Módulo Registros de Identidad ::.",width:"58%",items:[
	{xtype:"comp_grid",itemId:"grdPI",columns:[{xtype:"rownumberer",width:30},{dataIndex:"tipdocident_abrev",text:"D.I.",width:50},{dataIndex:"indiv_dni",text:"N° D.I.",width:100},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",flex:1},{dataIndex:"tipsex_abrev",text:"Sex",width:30},{dataIndex:"indiv_fechanac",text:"Fecha Nac.",align:"center",width:85,renderer:fext_FD()},{dataIndex:"indiv_ubigeo",text:"Ubigeo",width:90},
		{xtype:"actioncolumn",itemId:"acPublic_individuos",id:"acPublic_individuos",align:"center",sorter:false,width:30,items:[{icon:"resources/icons/user_photo.png",getClass:function(val,metad,r,rowI,colI,str){if(r.data.indiv_foto==""){return "x-hide-display"}else{return "x-grid-center-icon"}},handler:function(grid,rowI,colI,item,e,rec,row){this.fireEvent("itemclick",grid,rec,item,row,rowI,colI,e,"tooltip");}}]}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[
		{xtype:"comp_cbotop",itemId:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipdocident_abrev}&nbsp;</div></tpl>",fieldLabel:"&nbsp;D.I.",listConfig:{cls:"item00001",minWidth:50},maxLength:4,minChars:1,width:50},
		{xtype:"comp_txttop",itemId:"indiv_dni",fieldLabel:"&nbsp;N° D.I.",maxLength:15,width:100},{xtype:"comp_txttop",itemId:"indiv_appaterno",fieldLabel:"&nbsp;Apellido Paterno",maxLength:15,width:160},{xtype:"comp_txttop",itemId:"indiv_apmaterno",fieldLabel:"&nbsp;Apellido Materno",maxLength:15,width:160},{xtype:"comp_txttop",itemId:"indiv_nombres",fieldLabel:"&nbsp;Nombre",maxLength:15,width:160}
	]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPI"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabPID",title:"Direcciones",items:[{xtype:"comp_grid",itemId:"grdPID",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.indivdomi_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"ubigeo_code",text:"Ubigeo",width:95},{dataIndex:"indivdomi_domicilio",text:"Domicilio",width:350}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1140},{xtype:"comp_cboopc"},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPID",disabled:true},
	]},
	{xtype:"tabb1",itemId:"tabPIF",title:"Telefono",items:[{xtype:"comp_grid",itemId:"grdPIF",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.indivfono_estado==1?"mx-letra-negro":"mx-letra-rojo";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"tipfono_nombre",text:"Tipo",flex:1},{dataIndex:"compfono_nombre",text:"Compañía",width:140},{dataIndex:"indivfono_nro",text:"Número",width:140}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1141},{xtype:"comp_cboopc"},{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"}]},{xtype:"comp_pag",itemId:"pagPIF",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLV",title:"Viáticos",title:"Viáticos",items:[
		{xtype:"comp_grid",itemId:"grdLV",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.viat_flga==98?"mx-letra-rojo":"mx-letra-negro";}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"viat_documento",text:"Documento",width:80},{dataIndex:"viat_fecha",text:"Fecha",align:"center",width:85,renderer:fext_FD()},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"FF",width:40},{dataIndex:"expe_nro",text:"SIAF",align:"right",width:70},
			{dataIndex:"viat_monto",align:"right",renderer:fext_FN(2),text:"Importe",width:80},{dataIndex:"viat_rendido",text:"Rendido",align:"right",renderer:function(val,metaD,r,rowI,colI,str,view){return (r.data.viat_monto*1==r.data.viat_rendido?"":fjsFormatNumeric(r.data.viat_rendido,2));},width:80},{dataIndex:"ocup_nombre",text:"Cargo",width:150},{dataIndex:"pais_abrev03",text:"País",width:50},{dataIndex:"dpto_abrev",text:"Dpto",width:50},{dataIndex:"motviat_nombre",text:"Motivo",width:120},
			{text:"Fecha Salida",align:"center",width:115,renderer:function(val,metaD,r,rowI,colI,str,view){return Ext.Date.format(r.data.viat_fechaini,"d/m/Y")+" &nbsp;"+r.data.viat_horaini.substr(0,5);}},{text:"Fecha Retorno",align:"center",width:115,renderer:function(val,metaD,r,rowI,colI,str,view){return Ext.Date.format(r.data.viat_fechafin,"d/m/Y")+" &nbsp;"+r.data.viat_horafin.substr(0,5);}}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:1142},{xtype:"comp_cboopc"},
	 	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_codeab"},{xtype:"comppub_area_abrev"},{xtype:"compbud_secfunc_code"},{xtype:"compbud_tarea_codigo"}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"},{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]},{xtype:"comp_pag",itemId:"pagLV",disabled:true}
	]}
]}]
});