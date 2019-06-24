Ext.define('Siace.store.array.DocumentosVentaAB', {
	extend: 'Ext.data.ArrayStore', storeId: 'public_documentosventaab', autoLoad: true,
	fields: [ { name: 'doc_id', type: 'int' }, { name: 'doc_nombre', type: 'string' }, { name: 'doc_abrev', type: 'string' }, ],
	data: [ ['0', '', ''], ['1', 'Factura', 'F'], ['3', 'Boleta de Venta', 'B'], ['7', 'Nota de Crédito', 'NC'], ['8', 'Nota de Débito', 'ND'], ]
});