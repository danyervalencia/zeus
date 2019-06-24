Ext.define('Siace.view.log.Cuadro_Necesidades_DetEdit',{extend:'Siace.view.WindowEdit',alias:'widget.log_cuanecdetedit',width:650,items:[
{xtype:'form',items:[
{xtype:'tabpanel',itemId:'tabSearch',height:'100%',plain:true,items:[
	{xtype:'panel',itemId:'tab01',height:'100%',layout:{type:'fit'},title:'Catálogo',items:[{xtype:'comp_grid',itemId:'grdPBS',height:320,columns:[{dataIndex:'bs_codigo',text:'Código',width:110},{dataIndex:'bs_nombre',text:'Descripción',flex:1},{dataIndex:'unimed_nombre',text:'U.M.',tooltip:' Unidad de Medida ',width:100}]}],
	 dockedItems:[{xtype:'comp_tooltop',items:[{xtype:'hiddenfield',itemId:'activtarea_key'},{xtype:'comppub_bst_code'},{xtype:'comppub_bsg_codeab'},{xtype:'comppub_bsc_codeab'},{xtype:'comppub_bsf_codeab'},{xtype:'comp_txttop',itemId:'bs_nombre',enableKeyEvents:true,fieldLabel:'&nbsp;Descripción',maxLength:15,width:250}]},{xtype:'comp_pag',itemId:'pagPBS'}]
	},
	{xtype:'panel',itemId:'tabLO',height:'100%',disabled:true,layout:{type:'fit'},title:'Ordenes',items:[
		{xtype:'comp_grid',itemId:'grdLOD',height:320,columns:[{xtype:'rownumberer',width:30},
			{dataIndex:'orden_documento',text:'Documento',width:85},{dataIndex:'orden_fecha',text:'Fecha',align:'center',renderer:Ext.util.Format.dateRenderer('d/m/Y'),width:80},
			{dataIndex:'area_abrev',text:'U.O.',tooltip:'Unidad Orgánica',width:60},{dataIndex:'tarea_codigo',text:'Tarea',width:70},{dataIndex:'fftr_codigo',text:'FF',width:45},
			{dataIndex:'ordendet_cantid',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.000'),text:'Cantidad',width:85},
			{dataIndex:'ordendet_preuni',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.000000'),text:'P.Unitario',width:90},
			{dataIndex:'ordendet_pretot',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),text:'Importe',width:90},			
			{dataIndex:'expe_nro',text:'SIAF',width:70},{dataIndex:'pers_nombre',text:'Proveedor',width:300},{dataIndex:'',text:'Req.',align:'right',width:80},{dataIndex:'ordendet_item',text:'Item',align:'right',width:40},
			{dataIndex:'espedet_codigo',text:'Clasificador',width:95},{dataIndex:'espedet_nombre',text:'Descripción Clasificador',width:250}
		]}
	 ],
	 dockedItems:[
	 	{xtype:'comp_tooltop',items:[{xtype:'comppub_year_codeab'},{xtype:'comppub_area_abrev'},{xtype:'compbud_secfunc_code'}]},
		{xtype:'comp_pag',itemId:'pagLOD'},
	]},	
	{xtype:'panel',itemId:'tab02',bodyPadding:8,defaults:{labelWidth:70},height:'100%',layout:'vbox',title:'Detalle',items:[{xtype:'hiddenfield',itemId:'bs_key',name:'bs_key'},
		{xtype:'comp_tooltop',defaults:{labelWidth:70},layout:'vbox',items:[{xtype:'comp_dato',itemId:'bs_codigo',name:'bs_codigo',fieldLabel:'Código',submitValue:false},{xtype:'comp_dato',itemId:'bs_nombre',name:'bs_nombre',fieldLabel:'Descripción',submitValue:false},{xtype:'comp_dato',itemId:'unimed_nombre',name:'unimed_nombre',fieldLabel:'U. Medida',submitValue:false}]},
		{xtype:'compbud_fuefin_codename',name:"fuefin_id",editable:true},{xtype:'compbud_espedet_codename',itemId:'espedet_id',name:'espedet_id',anchor:'100%',editable:true},
		{xtype:'container',layout:{type:'hbox'},items:[
			{xtype:'container',defaults:{labelWidth:70,width:180},layout:{type:'vbox'},width:260,items:[
				{xtype:'comp_cbo',itemId:'objcontr_id',name:'objcontr_id',valueField:'tabgen_id',displayField:'tabgen_nombre',tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>',fieldLabel:'Objeto'},
				{xtype:'comp_curr',itemId:'cuanecdet_cantid',name:'cuanecdet_cantid',fieldLabel:'Cantidad',maxLength:15,numberDecimal:3}
			]},
			{xtype:'container',defaults:{labelWidth:70,maxLength:15,width:180},layout:{type:'vbox'},items:[
				{xtype:'comp_curr',itemId:'cuanecdet_preuni',name:'cuanecdet_preuni',fieldLabel:'P. Unitario',numberDecimal:4},{xtype:'comp_curr',disabled:true,itemId:'cuanecdet_pretot',name:'cuanecdet_pretot',fieldLabel:'Sub-Total'}
			]}
		]},
		{xtype:'tabpanel',activeTab:0,plain:true,width:'100%',items:[
			{xtype:'panel',itemId:'panDM',title:' Distribución Mensual ',height:230,items:[		
				{xtype:'container',layout:'hbox',margin:'5 0 0 0',width:'100%',items:[
					{xtype:'container',layout:'vbox',margin:'0 0 0 100',width:'40%',items:[
						{xtype:'comp_curr',itemId:'cuanecdet_m01',name:'cuanecdet_m01',fieldLabel:'Enero',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m02',name:'cuanecdet_m02',fieldLabel:'Febrero',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m03',name:'cuanecdet_m03',fieldLabel:'Marzo',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m04',name:'cuanecdet_m04',fieldLabel:'Abril',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m05',name:'cuanecdet_m05',fieldLabel:'Mayo',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m06',name:'cuanecdet_m06',fieldLabel:'Junio',labelWidth:70,value:0.00,width:170}
					]},
					{xtype:'container',layout:'vbox',width:'40%',items:[
						{xtype:'comp_curr',itemId:'cuanecdet_m07',name:'cuanecdet_m07',fieldLabel:'Julio',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m08',name:'cuanecdet_m08',fieldLabel:'Agosto',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m09',name:'cuanecdet_m09',fieldLabel:'Setiembre',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m10',name:'cuanecdet_m10',fieldLabel:'Octubre',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m11',name:'cuanecdet_m11',fieldLabel:'Noviembre',labelWidth:70,value:0.00,width:170},
						{xtype:'comp_curr',itemId:'cuanecdet_m12',name:'cuanecdet_m12',fieldLabel:'Diciembre',labelWidth:70,value:0.00,width:170}
					]}
				]}
			]},
			{xtype:'panel',itemId:'panC',title:'Complementarios',bodyPadding:8,height:230,width:'100%',layout:'vbox',items:[
				{xtype:'comp_txtarea',itemId:'cuanecdet_detalle',name:'cuanecdet_detalle',fieldLabel:'Glosa',labelWidth:65,width:'100%',height:120}
			]}
		]}
	]}
]}]}]
});