Ext.define('Siace.store.treasury.Cuentas_Bancarias_Diferencia', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Cuenta_Bancaria_Diferencia',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Cuenta_Bancaria_Diferencia',
	storeId: 'treasury_cuentas_bancarias_diferencia',
	proxy: {
		type: 'general',
		url: 'php/treasury_cuentas_bancarias_diferencia_json_records.php'
	}
});