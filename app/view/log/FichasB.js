Ext.define("Siace.view.log.FichasB",{extend:"Siace.view.PanelBrowse",alias:["widget.log_fichb"],layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panLF",layout:{type:"fit"},height:"100%",width:500,items:[
	{xtype:"comp_grid",itemId:"grdLF",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.ped_flga==98?"mx-letra-rojo-bold":(rec.data.ped_flga==90?"mx-letra-rojo":"mx-letra-negro");}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"fich_documento",text:"Registro",sortable:true,width:75},{dataIndex:"fich_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),sortable:true,width:80},{dataIndex:"tipfich_abrev",text:"Tipo",lockable:false,width:35},{dataIndex:"tablex_documento",text:"Referencia",width:110},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"pers_nombre",text:"Proveedor/Entidad",width:350}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"fich_nro",enableKeyEvents:true},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comp_cbotop",itemId:"tipfich_id",store:"array.log.TipFichLFEAB",valueField:"tipfich_id",displayField:"tipfich_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipfich_nombre}&nbsp;</div></tpl>",fieldLabel:"&nbsp;Tipo",listConfig:{cls:"item00001",minWidth:120},width:140}]},
	{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"}]},
	{xtype:"comp_pag",itemId:"pagLF"}
]},
{xtype:"panel",border:false,flex:1,height:"100%",layout:{type:"vbox"},margin:"0 0 0 10",items:[
	{xtype:"panel",itemId:"panLFD",border:false,height:250,layout:{type:"fit"},width:"100%",items:[
		{xtype:"comp_grid",itemId:"grdLFD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:110},{dataIndex:"bs_nombre",text:"Descripción",width:350},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"fichdet_preuni",text:"P.U.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.0000"),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"subcta_codigo",text:"Contable",width:100},{dataIndex:"sal_documento",text:"Doc. Alta",width:80},{dataIndex:"ing_documento",text:"Ingreso",width:105}]}
	 ],
	 dockedItems:[
	 	{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
		 	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"fich_documento",fieldLabel:"&nbsp;Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"fich_fecha",fieldLabel:"Fecha",labelWidth:35,width:180},{xtype:"comp_dato",name:"tablex_documento",fieldLabel:"&nbsp;Referencia",labelWidth:65,width:160}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"&nbsp;U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"&nbsp;Sec. Func."},{xtype:"comp_dato",name:"pers_nombre",itemId:"pers_nombre",fieldLabel:"&nbsp;Proveedor"}
		]}]},
		{xtype:"toolbar",dock:"right",ui:"footer",items:[{xtype:"comp_btnAdd",text:""},{xtype:"comp_btnQuery",text:""},{xtype:"comp_btnDelete",text:""}]},
		{xtype:"comp_pag",itemId:"pagLFD",disabled:true,margin:"0 32 0 0"}
	]},
	{xtype:"panel",border:false,flex:1,layout:{type:"fit"},margin:"5 0 0 0",width:"100%",items:[
		{xtype:"tabpanel",itemId:"tab01",height:"100%",plain:true,items:[
			{xtype:"panel",itemId:"tabLFR",height:"100%",layout:{type:"fit"},title:"Patrimonio",width:"100%",items:[
				{xtype:"comp_grid",itemId:"grdLFR",height:"100%",columns:[{xtype:"rownumberer",width:30},{dataIndex:"fichreg_codigo",text:"Patrimonio",width:105},{dataIndex:"marc_nombre",text:"Marca",width:150},{dataIndex:"mod_nombre",text:"Modelo",width:150},{dataIndex:"fichreg_serie",text:"Serie",width:140},{dataIndex:"year_id",text:"Año Fab.",width:60},{dataIndex:"colr_nombre",text:"Color",width:150},{dataIndex:"",text:"Dimensión",width:120},{dataIndex:"",text:"ID",width:60}]}
			 ],
			 dockedItems:[
				{xtype:"toolbar",dock:"right",ui:"footer",items:[{xtype:"comp_btnNew",text:""},{xtype:"comp_btnModify",text:""},{xtype:"comp_btnQuery",text:""},{xtype:"comp_btnDelete",text:""}]},
				{xtype:"comp_pag",itemId:"pagLFR",disabled:true,margin:"0 32 0 0"}
			]},
			{xtype:"panel",itemId:"tabLFRTT",height:"100%",layout:{type:"fit"},title:"Ficha Asignaciones",width:"100%",items:[
			]}
		]}
	]}
]}]});