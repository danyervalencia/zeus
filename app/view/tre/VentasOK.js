Ext.define('Siace.view.treasury.VentasOK', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.treasury_ventasok',
	layout: { type: 'fit' },
	//modal: false,
	width: 250,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_ventas', 
			border: false, layout: 'vbox',
		    items: [
			    {
			        xtype: 'container', layout: 'vbox',  margin: '15 0 5 0', width: '100%',
			        items: [
			        	{	xtype: 'hiddenfield', itemId: 'vent_key' },
			        	{	xtype: 'hiddenfield', itemId: 'vent_id' },
						{
							xtype: 'label', itemId: 'doc_nombre', width: '100%',
							style: {
							     color: '#990000', fontFamily: 'Arial Narrow', fontSize: '14px', fontWeight : 'bold',  textAlign : 'center'
        					}
						},
						{
							xtype: 'label', text: fjsRepeat('=', 50), width: '100%',
							style: {
							     color: '#990000', fontFamily: 'arial narrow', fontSize: '11px', fontWeight : 'bold',  textAlign : 'center'
        					}
						},
						{
							xtype: 'label', itemId: 'vent_documento', 
							margin: '15 0 20 0', text: '2015 - 180301 - 00023', width: '100%',
							style: {
							    color: '#990000', fontFamily: 'arial narrow', fontSize: '15px', fontWeight : 'bold',  textAlign : 'center'
        					}
						},
			        ]
			    },
			],
		}
	],

	buttons: {
		buttonAlign: 'left', //weight : -1,
		items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonPrinter', disabled: false },
                { xtype: 'component_buttonExit', disabled: false },
        ]
	},
});