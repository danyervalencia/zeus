Ext.define("Siace.view.log.Fichas_RegistrosE",{extend:"Siace.view.WindowEdit",alias:"widget.log_fichrege",layout:{type:"vbox"},width:600,items:[
{xtype:"panel",itemId:"panLFD",width:"100%",items:[{xtype:"form",bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"hiddenfield",itemId:"bsf_id",name:"bsf_id",submitValue:false},
		{xtype:"comp_dato",name:"bs_nombre",fieldLabel:"Descripción",submitValue:false},{xtype:"comp_dato",name:"bsg_codename",fieldLabel:"Grupo",submitValue:false},{xtype:"comp_dato",name:"bsc_codename",fieldLabel:"Clase",submitValue:false},
		{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func.",submitValue:false},{xtype:"comp_dato",name:"espedet_codename",fieldLabel:"Clasificador",submitValue:false},{xtype:"comp_dato",name:"subcta_codename",fieldLabel:"Cta. Ctble.",submitValue:false},
		{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Proveedor",submitValue:false}
	]},
]}]},
{xtype:"panel",itemId:"panLFR",margin:"3 0 0 0",width:"100%",items:[{xtype:"form",bodyPadding:8,layout:{type:"vbox"},width:"100%",items:[
	{xtype:"container",layout:{type:"hbox"},width:"100%",items:[{xtype:"hiddenfield",itemId:"fichdet_key",name:"fichdet_key"},
		{xtype:"container",defaults:{labelWidth:60,width:"100%"},layout:{type:"vbox"},width:250,items:[
			{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",itemId:"bsf_codigo",disabled:true,fieldCls:"txt00005",fieldLabel:"Patrimonio",labelWidth:60,margin:"0 4 4 0",width:150},{xtype:"comp_txt",itemId:"fichreg_patri",name:"fichreg_patri",fieldCls:"txt00005",width:50}]},
			{xtype:"comp_cbo",itemId:"marc_key",name:"marc_key",valueField:"marc_key",displayField:"marc_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{marc_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Marca"},
			{xtype:"comp_cbo",itemId:"mod_key",name:"mod_key",valueField:"mod_key",displayField:"mod_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{mod_nombre}&nbsp;</div></tpl>",fieldLabel:"Modelo"},
			{xtype:"comp_txt",itemId:"fichreg_serie",name:"fichreg_serie",fieldLabel:"Nro. Serie"}
		]},{xtype:"container",flex:1},
		{xtype:"container",defaults:{labelWidth:90,width:"100%"},layout:{type:"vbox"},width:255,items:[
			{xtype:"comp_txt",itemId:"fichreg_nro",name:"fichreg_nro",disabled:true,fieldCls:"txt00005",fieldLabel:"Código Interno",width:"100%"},
			{xtype:"comp_cbo",itemId:"year_id",name:"year_id",valueField:"year_id",displayField:"year_code",tpl:"<tpl for='.'><div class='x-boundlist-item'>{year_code}&nbsp;</div></tpl>",editable:true,fieldLabel:"Año Fabricación",width:180},
			{xtype:"comp_cbo",itemId:"colr_id",name:"colr_id",valueField:"colr_id",displayField:"colr_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{colr_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Color"},
			{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_curr",itemId:"fichreg_largo",name:"fichreg_largo",fieldLabel:"Lar-Anch-Alt (mt)",labelWidth:90,margin:"0 4 4 0",value:"",width:147},{xtype:"comp_curr",itemId:"fichreg_ancho",name:"fichreg_ancho",margin:"0 4 4 0",value:"",width:50},{xtype:"comp_curr",itemId:"fichreg_alto",name:"fichreg_alto",value:"",width:50}]},
		]}
	]},
	{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
		{xtype:"panel",itemId:"tab01",title:"Otras Características",height:150,items:[{xtype:"comp_grid",itemId:"grdLFRC",height:173,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Complementario",sortable:false,width:105},{dataIndex:"peddet_detalle",text:"Dato",flex:1,sortable:false,editor:{xtype:"comp_txt",value:""}}]}]},
		{xtype:"panel",itemId:"tab02",title:"Cometario",bodyPadding:0,height:150,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"fichreg_observ",name:"fichreg_observ",width:"100%",height:150}]}
	]},
]}]}],
__filtMO:false,setFiltMO:function(poFilt){this.__filtMO=poFilt;},getFiltMO:function(){return this.__filtMO;},
});