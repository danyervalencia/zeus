Ext.define('Siace.view.rrhh.PlanillasEdit',{extend:'Siace.view.WindowEdit',alias:'widget.rrhh_planillassedit',width:930,items:[
{xtype:'form',bodyPadding:8,border:true,layout:{type:'vbox'},items:[
	{xtype:'container',layout:'hbox',width:'100%',items:[
		{xtype:'container',defaults:{labelWidth:65},layout:'vbox',width:580,items:[
			{xtype:'fieldcontainer',fieldLabel:'Planilla',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',items:[
				{xtype:'component_combo',itemId:'year_id',store:'array.Years',valueField:'year_id',hidden:true,displayField:'year_code',submitValue:false},
				{xtype:'component_combotop',itemId:'tipplan_id',valueField:'tabgen_id',displayField:'tabgen_code',listConfig:{cls:'item00001',minWidth:40},tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_code}&nbsp;</div></tpl>',width:40},
				{xtype:'component_combotop',itemId:'mes_id',store:'array.Meses',valueField:'mes_id',displayField:'mes_nombre',disabled:true,width:90},
				{xtype:'component_textfieldtop',itemId:'plan_nro',align:'center',disabled:true,width:60},
				{xtype:'component_datefield',itemId:'plan_fecha',allowBlank:false,disabled:true},
			]}
		]}
	]},
	{xtype:'tabpanel',activeTab:0,plain:true,width:'100%',items:[
		{xtype:'panel',itemId:'tabRPTF',title:'Detalle Presupuestal',height:200,items:[
			{xtype:'component_grid',itemId:'grdRrhh_ordenes_det',height:200,columns:[
				{xtype:'rownumberer',width:30},
				{dataIndex:'tarea_codigo',text:'Código',sortable:false,width:105},
				{dataIndex:'espedet_codigo',text:'Clasificador',sortable:false,width:85},
				{dataIndex:'plantareafte_monto',text:'Bruto',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),sortable:false,width:85,
					editor:{xtype:'component_numberfield',allowBlank:false,decimalPrecision:2,maxLength:15,maxValue:999999999,value:''}
				},
				{dataIndex:'plantareafte_dscto',text:'Descuento',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),sortable:false,width:85,
					editor:{xtype:'component_numberfield',allowBlank:false,decimalPrecision:2,maxLength:15,maxValue:999999999,value:''}
				},
				{dataIndex:'plantareafte_aportacion',text:'Apotación',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),sortable:false,width:85,
					editor:{xtype:'component_numberfield',allowBlank:false,decimalPrecision:2,maxLength:15,maxValue:999999999,value:''}
				},
				{dataIndex:'plantareafte_total',text:'SubTotal',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),sortable:false,width:85}
			]}
		]},
		{xtype:'panel',itemId:'tabRO',title:'Complementarios',bodyPadding:8,height:200,width:'100%',layout:'vbox',items:[
			{xtype:'component_textarea',itemId:'plan_observ',name:'plan_observ',fieldLabel:'Glosa',labelWidth:65,width:'100%',height:120}
		]}
	]},
		{
			xtype : 'container', layout: 'hbox', width: '100%',
			items : [
				{
					xtype : 'container', layout: 'hbox', width: '100%', margin: '3 0 0 0',
					items: [
				   		{	xtype: 'button', itemId: 'btnAdd', text: 'Agregar', disabled: true, iconCls: 'icon_Add', margin: '0 5', padding: '2 6 2 8' },
			     		{   xtype: 'button', itemId: 'btnSuppress', text: 'Eliminar', disabled: true, iconCls: 'icon_Suppress', padding: '2 6 2 8', },
						{   xtype: 'displayfield', flex: 1, },
						{ 	xtype: 'component_currencyfield', itemId: 'orden_monto', disabled: true, fieldLabel: 'Importe', labelWidth: 65, value: '0', width: 160, },
					]
				}
			]
		},
	]
}]
});