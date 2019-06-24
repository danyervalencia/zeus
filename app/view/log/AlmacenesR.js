Ext.define("Siace.view.log.AlmacenesR",{extend:"Siace.view.PanR",alias:"widget.log_almar",requires:["Siace.view.comp.bud.ProyS","Siace.view.comp.pub.PersS"],items:[
{xtype:"panr1",items:[
	{xtype:"comp_cbo",itemId:"rep_id",valueField:"rep_code",displayField:"rep_nombre",fieldLabel:"Reporte",width:"100%",labelWidth:70,margin:"5 0 4 0"},
	{xtype:"comp_fct",fieldLabel:"Periodo",items:[{xtype:"comp_fechaini",fieldLabel:""},{xtype:"comp_fechafin",fieldLabel:""},{xtype:"displayfield",flex:1}]},
	{xtype:"comp_cbo",itemId:"alma_key",valueField:"alma_key",displayField:"alma_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{alma_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Almacén",width:269},
	{xtype:"compbud_proys"},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fuefin_codename"},{xtype:"compbud_espedet_codename"},{xtype:"comppub_perss"},



	{xtype:"fieldcontainer",fieldLabel:"N° Orden",labelClsExtra:"lbl00001",layout:"hbox",margin:"0 0 5 0",items:[{xtype:"hiddenfield",itemId:"orden_key",name:"orden_key"},{xtype:"hiddenfield",itemId:"ORDEN_NRO"},
		{xtype:"comp_txttop",itemId:"orden_nro",name:"orden_nro",enableKeyEvents:true,maxLength:6,submitValue:false,vtype:"onlyNumeric",width:70},{xtype:"comp_btn_imgsearch",itemId:"btnOrden_search"},{xtype:"comp_datofecha",itemId:"orden_fecha",fieldLabel:"",margin:"1 25 0 4",width:100},{xtype:"comp_dato",itemId:"expe_nro",fieldLabel:"SIAF",labelWidth:35,margin:"1 0 0 4"}
	]},

	{xtype:"comp_fct",fieldLabel:"Código Bien",items:[{xtype:"comppub_bst_code",fieldLabel:"",hidden:true},{xtype:"comppub_bsg_codeab",fieldLabel:""},{xtype:"comppub_bsc_codeab",fieldLabel:""},{xtype:"comppub_bsf_codeab",fieldLabel:""},{xtype:"comp_txt",itemId:"bs_code",disabled:true,maxLength:4,vtype:"onlyNumeric",width:50}]}
],__compSPSS:"",setCompSPSS:function(poC){this.__compSPSS=poC;},getCompSPSS:function(){return this.__compSPSS;},__compRTS:null,setCompRTS:function(poComp){this.__compRTS=poComp;},getCompRTS:function(){return this.__compRTS;},
dockedItems:[{xtype:"comp_toolbtn",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]},
{xtype:"tpnr1",items:[]}
]});