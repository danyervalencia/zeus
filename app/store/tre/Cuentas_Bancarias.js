Ext.define('Siace.store.treasury.Cuentas_Bancarias', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Cuenta_Bancaria',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Cuenta_Bancaria',
	storeId: 'treasury_cuentas_bancarias',
	proxy: {
		type: 'general',
		url: 'php/treasury_cuentas_bancarias_json_records.php'
	}
});