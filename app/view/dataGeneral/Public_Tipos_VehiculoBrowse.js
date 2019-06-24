Ext.define('Siace.view.dataGeneral.Public_Tipos_VehiculoBrowse', {
	extend: 'Siace.view.dataGeneral.AbstractGrid',
	alias: 'widget.public_tipos_vehiculobrowse',

	store: 'dataGeneral.Public_Tipos_Vehiculo', // #1

	columns: [
		{
			text: 'ID',
			dataIndex: 'tipveh_id',
			flex: 5,
			align: 'right',
			filter: {
				type: 'numeric' // #2
			}
		},
		{
			text: 'Nombre',
			dataIndex: 'tipveh_nombre',
			flex: 25,
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
			dataIndex: 'tipveh_abrev',
			flex: 10,
			editor: {
				//allowBlank: false, // #6
				maxLength: 10 // #7
			},
			filter: {
				type: 'string' // #8	
			}
		},
		{
			text: 'Comentario',
			dataIndex: 'tipveh_observ',
			flex: 45,
			editor: {
				//allowBlank: false, // #6
				maxLength: 200 // #7
			}
		},
		{
			text: 'Fecha Eidción',
			dataIndex: 'tipveh_fechaing',
			flex: 15,
			format: 'Y-m-j H:i:s',
	        filter: true
		}
	]
});
