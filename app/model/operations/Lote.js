Ext.define('Siace.model.operations.Lote', {
	extend: 'Ext.data.Model',
	idProperty: 'lote_id',

	fields: [
		{ name: 'lote_id', type: 'int' },
		{ name: 'lote_key', type: 'string' },
		{ name: 'lote_flga', type: 'string' },
		{ name: 'lote_nro', type: 'string' },
		{ name: 'lote_mzna', type: 'string' },
		{ name: 'lote_code', type: 'string' },
		{ name: 'tiplote_id', type: 'int' },
		{ name: 'lote_m2', type: 'float' },
		{ name: 'lote_fechaini', type: 'date' },
		{ name: 'lote_fechafin', type: 'date' },
		{ name: 'lote_latitud', type: 'float' },
		{ name: 'lote_longitud', type: 'float' },
		{ name: 'lote_nombre', type: 'string' },
		{ name: 'tiplote_nombre', type: 'string' },
	]
});