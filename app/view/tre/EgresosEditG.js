Ext.define('Siace.view.tre.EgresosEditG',{extend:'Siace.view.WindowEdit',alias:'widget.tre_egreeditg',width:930,items:[
{xtype:'form',bodyPadding:8,border:true,items:[
{xtype:'panel',border:false,layout:{type:'hbox'},width:'100%',items:[
	{xtype:'panel',border:false,defaults:{labelWidth:65},layout:{type:'vbox'},width:600,items:[{xtype:'comppub_year_code',hidden:true,submitValue:false},
		{xtype:'fieldcontainer',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',items:[
			{xtype:'comppub_doc_nombre',store:'array.DocPago',disabled:true,labelWidth:65,margin:'0 4 0 0',value:402,width:230},{xtype:'comp_txttop',itemId:'egre_nro',align:'center',width:60},{xtype:'comp_date',itemId:'egre_fecha',allowBlank:false,disabled:true},
			//{xtype:'displayfield',flex:1},{xtype:'comp_cbo',itemId:'tipegre_id',name:'tipegre_id',valueField:'tabgen_id',labelWidth:35,fieldLabel:'Tipo',displayField:'tabgen_nombre',width:205}
		]},
		{xtype:'fieldcontainer',fieldLabel:'Procedencia',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',items:[{xtype:'hiddenfield',itemId:'tablex_key',name:'tablex_key'},{xtype:'hiddenfield',itemId:'TABLEX_NRO'},
			{xtype:'comp_cbotop',itemId:'tablex_doc',name:'tablex_doc',store:'array.DocPagoProc',valueField:'doc_id',displayField:'doc_nombre',width:160},
			{xtype:'comp_txttop',itemId:'tablex_nro',align:'center',maxLength:6,submitValue:false,vtype:'onlyNumeric',width:60},
			{xtype:'comp_dato',itemId:'tablex_fecha',margin:'1 0 0 4',width:100},{xtype:'comp_dato',itemId:'expe_nro',fieldLabel:'SIAF',labelWidth:35,margin:'1 0 0 4'}
		]},
		{xtype:'compbud_secfunc_codename',disabled:true},{xtype:'compbud_tarea_codename',disabled:true},{xtype:'compbud_fuefin_codename',disabled:true},{xtype:'comppub_area_nombre',disabled:true},
		{xtype:'container',layout:{type:'hbox'},items:[
			{xtype:'comp_cbo',itemId:'tipdocident_id',name:'tipdocident_id',store:'array.TipDocIdentVenta',valueField:'tipdocident_id',displayField:'tipdocident_abrev',fieldLabel:'Asignado a',labelWidth:65,listConfig:{cls:'item00001',minWidth:55,},margin:'0 4 5 0',width:125},
			{xtype:'container',itemId:'cntPers',layout:{type:'hbox'},items:[{xtype:'hiddenfield',itemId:'pers_key',submitValue:false},{xtype:'hiddenfield',itemId:'PERS_RUC',submitValue:false},
				{xtype:'comp_txttop',itemId:'pers_ruc',disabled:true,enableKeyEvents:true,maxLength:11,submitValue:false},
				{xtype:'comp_btn_imgsearch',itemId:'btnPers_search',disabled:true},{xtype:'displayfield',itemId:'pers_nombre',fieldCls:'df00101'}
			]},
			{xtype:'container',itemId:'cntIndiv',hidden:true,layout:{type:'hbox'},items:[{xtype:'hiddenfield',itemId:'indiv_key',submitValue:false},{xtype:'hiddenfield',itemId:'INDIV_DNI',submitValue:false},
				{xtype:'comp_txttop',itemId:'indiv_dni',disabled:true,enableKeyEvents:true,maxLength:12,submitValue:false},
				{xtype:'comp_btn_imgsearch',itemId:'btnIndiv_search',disabled:true},{xtype:'displayfield',itemId:'indiv_apenom',fieldCls:'df00101'}
			]}
		]}
	]},
	{xtype:'displayfield',flex:1},
	{xtype:'container',layout:{type:'vbox'},width:270,items:[
		{xtype:'fieldset',defaults:{labelWidth:65},layout:{type:'vbox'},padding:'2 8 4 8',title:' Forma de Pago ',width:'100%',items:[
			{xtype:'comp_cbo',itemId:'cuebanc_key',name:'cuebanc_key',valueField:'cuebanc_key',displayField:'cuebanc_nrobanco',fieldLabel:'Cta. Cte',width:'100%'},
			{xtype:'comp_txt',itemId:'cheq_nro',name:'cheq_nro',align:'center',fieldLabel:'Nro Cheque',maxLength:8,vtype:'onlyNumeric',width:'100%'}
		]},
		{xtype:'panel',border:false,width:'100%',items:[
			{xtype:'comp_grid',itemId:'grdTEED',height:95,columns:[{xtype:'rownumberer',width:20},
				{dataIndex:'espedet_codigo',text:'Clasificador',width:85},
				{dataIndex:'espedet_monto',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),text:'Importe',width:80},
				{dataIndex:'espedet_nombre',text:'Descripción Clasificador',width:300}
			]}
		]}
	]}
]},
{xtype:'tabpanel',activeTab:0,plain:true,width:'100%',items:[
	{xtype:'panel',itemId:'tabTETF',bodyPadding:4,title:'Detalle Presupuestal',items:[
		{xtype:'comp_grid',itemId:'grdTETF',height:236,columns:[{xtype:'rownumberer',width:30},
			{dataIndex:'tarea_codigo',text:'Tarea',sortable:false,width:70},{dataIndex:'espedet_codigo',text:'Clasificador',sortable:false,width:85},{dataIndex:'espedet_nombre',text:'Descripción',sortable:false,width:410},
			{dataIndex:'tablextareafte_monto',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('00,000,000.00'),sortable:false,width:90},
			{dataIndex:'tablextareafte_saldo',text:'Saldo',align:'right',renderer:Ext.util.Format.numberRenderer('00,000,000.00'),sortable:false,width:90},
			{dataIndex:'tablextareafte_pago',text:'Pago',align:'right',renderer:Ext.util.Format.numberRenderer('00,000,000.00'),sortable:false,width:90,editor:{xtype:'comp_number',allowBlank:false,decimalPrecision:2,maxLength:10,maxValue:999999,value:''}}
		]},
		{xtype:'container',layout:'hbox',width:'100%',items:[
			{xtype:'container',layout:'hbox',width:'100%',margin:'3 0 0 0',items:[
				{xtype:'button',itemId:'btnAdd',text:'Agregar',disabled:true,iconCls:'icon_Add',margin:'0 5', padding: '2 6 2 8'},
				{xtype:'button',itemId:'btnSuppress',text:'Suprimir',disabled:true,iconCls:'icon_Suppress',padding:'2 6 2 8'},{xtype:'displayfield',flex:1},
				{xtype:'comp_curr',itemId:'egre_monto',disabled:true,fieldLabel:'Importe',labelWidth:55,value:0,width:151},{xtype:'displayfield',width:19}
			]}
		]}
	]},
	{xtype:'panel',itemId:'tab03',bodyPadding:'2 6 6 6',height:265,layout:{type:'hbox'},title:'Complementarios',width:'100%',items:[
		{xtype:'comp_txtareatop',itemId:'egre_observ',name:'egre_observ',fieldLabel:'&nbsp;Concepto',labelWidth:65,height:97,flex:1},{xtype:'displayfield',width:5},
		{xtype:'comp_txtareatop',itemId:'egre_otros',name:'egre_otros',fieldLabel:'&nbsp;Retenciones y Deducciones',labelWidth:65,height:97,flex:1}
	]}
]}]
}],
__compPPS:null,__compPIS:null,__compBTFS:null,__filt:true,__filterFF:true,__noUSK:'',
setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;},
setCompBTFS:function(poComp){this.__compBTFS=poComp;},getCompBTFS:function(){return this.__compBTFS;},
setFilt:function(pcFilt){this.__filt=pcFilt;},getFilt:function(){return this.__filt;},
setFilterFF:function(poFilter){this.__filterFF=poFilter;},getFilterFF:function(){return this.__filterFF;},
setNoUsk:function(poNoUSK){this.__noUSK=poNoUSK;},getNoUsk:function(){return this.__noUSK;}
});