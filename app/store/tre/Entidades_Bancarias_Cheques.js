Ext.define('Siace.store.treasury.Entidades_Bancarias_Cheques', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Entidad_Bancaria_Cheque',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Entidad_Bancaria_Cheque',
	storeId: 'treasury_entidades_bancarias_cheques',
	proxy: {
		type: 'general',
		url: 'php/treasury_entidades_bancarias_cheques_json_records.php'
	}
});