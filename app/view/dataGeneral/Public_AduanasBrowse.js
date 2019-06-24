Ext.define('Siace.view.dataGeneral.Public_AduanasBrowse', {
	extend: 'Siace.view.dataGeneral.AbstractGrid',
	alias: 'widget.public_aduanasbrowse',

	store: 'dataGeneral.Public_Aduanas', // #1

	columns: [
		{
			text: 'Id',
			width: 100,
			dataIndex: 'adua_id',
			filter: {
				type: 'numeric' // #2
			}
		},

		{
			text: 'Nombre',
			flex: 1,
			dataIndex: 'adua_nombre',

			editor: {
				allowBlank: false, // #3
				maxLength: 40 // #4
			},

			filter: {
				type: 'string' // #5
			}
		},

		{
			text: 'Abrev.',
			width: 200,
			dataIndex: 'adua_abrev',
			editor: {
				allowBlank: false, // #6
				maxLength: 10 // #7
			},
			filter: {
				type: 'string' // #8	
			}
		},

		{
			text: 'Codigo',
			width: 200,
			dataIndex: 'adua_code',
			editor: {
				allowBlank: false, // #6
				maxLength: 3 // #7
			},
			filter: {
				type: 'string' // #8	
			}
		}

	]
});
