Ext.define("Siace.view.log.NeasB",{extend:"Siace.view.PanB",alias:["widget.log_neab"],items:[
{xtype:"panb1",title:"Módulo Notas Entrada Almacén ::.",width:"58%",items:[{xtype:"comp_grid",itemId:"grdLN",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"nea_documento",text:"Documento",width:100},{dataIndex:"nea_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},{dataIndex:"tipnea_abrev",text:"Tipo",width:45},{dataIndex:"alma_abrev",text:"Alma",width:45},{dataIndex:"fuefin_code",text:"Rb",width:45},{dataIndex:"proy_code",text:"SNIP",width:70},{dataIndex:"secfunc_code",text:"Sec.Func.",width:60},{dataIndex:"nea_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90}]}],
 dockedItems:[{xtype:"comp_cboopc"},
	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_nrotop",itemId:"nea_nro"},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comp_cbotop",itemId:"tipnea_id",valueField:"tabgen_id",displayField:"tabgen_nombre",fieldLabel:"&nbsp;Tipo de ingreso",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",editable:true,width:150}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnAnnular"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagLN"}
 ],
},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLND",title:"Detalle",items:[
		{xtype:"comp_grid",itemId:"grdLND",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},{dataIndex:"neadet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"neadet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"neadet_pretot",text:"Importe",align:"right",render:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"debe_codigo",text:"Debe",width:90},{dataIndex:"tablex_documento",text:"Documento",sortable:false,width:100},{dataIndex:"secfunc_code",text:"Sec.Func.",align:"center",width:60},{dataIndex:"fuefin_code",text:"Rb",width:35}]}
	 ],
	 dockedItems:[
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"nea_documento",fieldLabel:"Documento",labelWidth:65,width:165},{xtype:"comp_datofecha",name:"nea_fecha",fieldLabel:"Fecha",labelWidth:35,width:135},{xtype:"comp_datomonto",name:"nea_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"tipnea_nombre",fieldLabel:"Tipo"},{xtype:"comp_dato",name:"alma_nombre",fieldLabel:"Almacén"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"proy_codename",fieldLabel:"SNIP"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec.Func."}
		]}]},{xtype:"comp_pag",itemId:"pagLND",disabled:true}
	]},
	{xtype:"tabb1",itemId:"tabLP",hidden:true,title:"Orden",items:[	
		{xtype:"comp_grid",itemId:"grdLPD",
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},
			{dataIndex:"ordendet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:90},{dataIndex:"ordendet_preuni",text:"P.U.",align:"right",renderer:fext_FN(6),width:90},{dataIndex:"ordendet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5122},{xtype:"comp_cboopc"},
		{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"nea_documento",fieldLabel:"N.E.A.",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea"},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPrinter"},{xtype:"comp_btnFases",text:"Fases SIAF"}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]}
]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;}
});