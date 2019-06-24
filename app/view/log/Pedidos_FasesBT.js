Ext.define("Siace.view.log.Pedidos_FasesBT",{extend:"Siace.view.PanB",alias:["widget.log_pedfasebt"],items:[//layout:{type:"hbox"},
{xtype:"panb1",title:"Módulo Env./Rec. de Requerimientos ::.",width:"60%",items:[
	{xtype:"comp_grid",itemId:"grd",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"tiptram_abrev",text:"Tipo",width:60},{dataIndex:"pedtram_documento",align:"center",text:"Tramite",width:65},{dataIndex:"pedfase_datetime",align:"center",text:"Fecha/Hora",width:95,renderer:function(val,metaD,rec,rowI,colI,str,view){return rec.data.pedfase_feho;}},{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"usur_login",text:"Usuario",width:120},
		{dataIndex:"ped_documento",text:"Registro",width:70},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"fftr_codigo",text:"Rb-TR",width:45},{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),lockable:false,sortable:true,width:90}
	]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[{xtype:"comppub_year_code"},{xtype:"comp_cbotop",itemId:"tiptram_id",valueField:"tabgen_id",displayField:"tabgen_nombre",fieldLabel:"&nbsp;Tipo",listConfig:{cls:"item00001",minWidth:100},tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",width:100},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comppub_area_abrev"},{xtype:"complog_tipped_abrev"},{xtype:"comp_nrotop",itemId:"ped_nro",enableKeyEvents:true},{xtype:"compbud_secfunc_code"}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery",text:""},{xtype:"comp_btn",itemId:"btnDet",disabled:true,icon:"resources/icons/btnEttr.png",text:""},{xtype:"comp_btnAttach",text:""},{xtype:"comp_btn",itemId:"btnRec",disabled:true,icon:"resources/icons/user_rec.png",text:"Recibir"},{xtype:"comp_btn",itemId:"btnSub",disabled:true,icon:"resources/icons/user_go.png",text:"Enviar"}]},{xtype:"comp_pag",itemId:"pag"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabLPT",title:"Trámite",items:[
		{xtype:"comp_grid",itemId:"grdLPT",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol}},
		 columns:[{xtype:"rownumberer",width:30},{dataIndex:"pedtram_documento",text:"Tramite",align:"center",width:65},{dataIndex:"pedtram_datetime",align:"center",text:"Fecha/Hora",width:95,renderer:function(val,metaD,rec,rowI,colI,str,view){return rec.data.pedtram_feho;}},{dataIndex:"tiptram_abrev",text:"Tipo",width:60},
			{dataIndex:"area_abrev",text:"U.O.",width:60},{dataIndex:"usur_login",text:"usuario",width:120}
		]}
	 ],
	 dockedItems:[{xtype:"comppub_menu",value:5183},{xtype:"comp_cboopc"},
	 	{xtype:"comp_tooltop",margin:"0 0 0 -4",items:[{xtype:"comp_nrotop",itemId:"pedtram_nro",enableKeyEvents:true},{xtype:"comp_fechaini"},{xtype:"comp_fechafin"},{xtype:"comp_cbotop",itemId:"tiptram_id",valueField:"tabgen_id",displayField:"tabgen_nombre",fieldLabel:"&nbsp;Tipo",listConfig:{cls:"item00001",minWidth:100},tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",width:100}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnQuery"},{xtype:"comp_btnPdf",disabled:true},{xtype:"comp_btnExcel",disabled:true}]},{xtype:"comp_pag",itemId:"pagLPT"}
	]},
	{xtype:"tabb1",itemId:"tabLPD",title:"Detalle",items:[{xtype:"comp_grid",itemId:"grdLPD",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_abrev",text:"U.M.",width:60},{dataIndex:"peddet_cantid",text:"Cantidad",align:"right",renderer:fext_FN(3),width:85},{dataIndex:"peddet_preuni",text:"P.U.",align:"right",renderer:fext_FN(4),width:90},{dataIndex:"peddet_pretot",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}]}],
	 dockedItems:[
	 	{xtype:"form",border:false,width:"100%",items:[{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[
	 		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",fieldLabel:"Fecha",labelWidth:35,width:140},{xtype:"comp_datomonto",name:"ped_monto",fieldLabel:"Importe",labelWidth:45}]},
			{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}
		]}]},{xtype:"comp_pag",itemId:"pagLPD",disabled:true}
	]},
]}]
});