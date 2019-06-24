Ext.define('Siace.view.public.IndividuosGrid', { extend: 'Ext.grid.Panel', alias: 'widget.public_individuosgrid', columnLines: true,





	
	columns: [
		{ 	xtype: 'rownumberer', width: 30, },
		{	dataIndex: 'tipdocident_abrev', text: 'D.I.', width: 50, tooltip: 'Documento de Identidad' },
		{	dataIndex: 'indiv_dni', text: 'N° D.I.', width: 100, tooltip: 'Número Documento de Identidad' },
		{	dataIndex: 'indiv_apenom', text: 'Apellidos y Nombres', flex: 1 },
		{	dataIndex: 'tipsex_abrev', text: 'Sex', width: 30 },
		{	dataIndex: 'indiv_fechanac', text: 'Fecha Nac.', align: 'center', width: 85, renderer: Ext.util.Format.dateRenderer('d/m/Y'), },
		{	dataIndex: 'indiv_ubigeo', text: 'Ubigeo', width: 90, },
		{
			xtype: 'actioncolumn', itemId: 'acPublic_individuos', id: 'acPublic_individuos', align: 'center', sorter: false, width: 30,
			items: [
				{
      				icon: 'resources/icons/user_photo.png',
   					getClass: function(value, metadata, record, rowIndex, colIndex, store) {
						if ( record.get('indiv_foto') == '' ) { return 'x-hide-display'; }
						else { return 'x-grid-center-icon'; }
        			},
					handler: function(grid, rowIndex, colIndex, item, e, record, row) {
			        	this.fireEvent('itemclick', grid, record, item, row, rowIndex, colIndex, e, 'tooltip');
			    	}
    			},
    		]
		}
	]
});