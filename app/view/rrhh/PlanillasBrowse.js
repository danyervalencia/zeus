Ext.define('Siace.view.rrhh.PlanillasBrowse',{extend:'Siace.view.PanelBrowse',alias:'widget.rrhh_planillasbrowse',layout:{type:'hbox'},items:[
{xtype:'panel',itemId:'panRP',layout:{type:'fit'},height:'100%',width:'69%',items:[
	{xtype:'component_grid',itemId:'grdRP',
	 viewConfig:{
		getRowClass:function(record,rowIndex,rowParams,store){ return record.get('plan_flga')=='98'?'mx-letra-rojo':'mx-letra-negro'; }
	 },
	 columns:[
		{xtype:'rownumberer',width:30},
		{dataIndex:'plan_documento',text:'Número',width:95},
		{dataIndex:'orden_fecha',text:'Fecha',align:'center',width:85,renderer:Ext.util.Format.dateRenderer('d/m/Y')},
		{dataIndex:'tipplan_code',text:'Proc',tooltip:' Procedencia ',width:40},
		{dataIndex:'plan_monto',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90},
	]}
 ],
 dockedItems:[
	{xtype:'component_comboopc'},
	{xtpe:'toolbar',dock:'top',layout:'hbox',padding:'1 0 3 2',ui:'footer',items:[
		{xtype:'component_combotop',itemId:'year_id',store:'array.Years',valueField:'year_id',displayField:'year_nro',fieldLabel:'&nbsp;Año',listConfig:{cls:'item00001',minWidth:60},tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>',width:60},
		{xtype:'component_combotop',itemId:'tipgast_idx',valueField: 'tabgen_id',displayField:'tabgen_code',fieldLabel:'&nbsp;T.G.',listConfig:{cls:'item00001',minWidth:40},tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_code}&nbsp;</div></tpl>',width:40},
		//{xtype:'component_combotop',itemId:'mes_id',store:'array.MesesAB',valueField:'mes_id',displayField:'mes_code',fieldLabel:'&nbsp;Mes',listConfig:{cls:'item00001',minWidth:45},tpl:'<tpl for="."><div class="x-boundlist-item">{mes_code}&nbsp;</div></tpl>',value:0,width:45},
		{xtype:'component_textfieldtop',itemId:'plan_nro',fieldLabel:'&nbsp;Número',maxLength:5,vtype:'onlyNumeric',width: 60},
		{xtype:'component_datefieldtop',itemId:'fechaini',fieldLabel:'&nbsp;Fecha Inicial',endDateField:'fechafin',vtype:'daterange'},
		{xtype:'component_datefieldtop',itemId:'fechafin',fieldLabel:'&nbsp;Fecha Final',startDateField:'fechaini',vtype:'daterange'},	
	]},
	{xtype:'toolbar',dock:'bottom',ui:'footer',items:[
		{xtype:'component_buttonNew'},
		{xtype:'component_buttonModify'},
		{xtype:'component_buttonQuery'},
		{xtype:'component_buttonAnnular'},
		//{xtype:'component_button',itemId:'btnSiaf',disabled:true,icon:'resources/icons/siaf.png',text:'SIAF'},
		{xtype:'component_buttonPrinter'},
		{xtype:'component_button',itemId:'btnFases',disabled:true,icon:'resources/icons/btnMovements.png',text:'FasesSIAF'},
	]},
	{xtype:'component_pagingtoolbar',itemId:'pagRP'}
 ]
},
{xtype:'panel',border:false,height:'100%',width:'1%'},
{xtype:'tabpanel',itemId:'tab01',height:'100%',plain:true,width:'30%',items:[
	{xtype:'panel',itemId:'tabRPTF',height:'100%',hidden:true,layout:{type:'fit'},title:'Presupuesto',items:[
		{xtype:'component_grid',itemId:'grdRPTF',columns:[
			{xtype:'rownumberer',width:30},
			{dataIndex:'tablex_documento',text:'Documento',width:85},
			{dataIndex:'tablex_fecha',text:'Fecha',align:'center',renderer:Ext.util.Format.dateRenderer('d/m/Y'),width:85},
			{dataIndex:'area_abrev',text:'U.O.',width:60},
			{dataIndex:'tablex_monto',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90},
		]},
	 ],
	 dockedItems:[
		{xtype:'component_comboopc'},
		{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'component_buttonQuery'},{xtype:'component_buttonPrinter'}]},
		{xtype:'component_pagingtoolbar',itemId:'pagRPTF',disabled:true},
	 ]},
]}],
__componentPPS:null,
setComponentPPS:function(poComponent){this.__componentPPS=poComponent;},getComponentPPS:function(){return this.__componentPPS;},
});