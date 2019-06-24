Ext.define('Siace.store.treasury.Cuentas_Bancarias_Movimientos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Cuenta_Bancaria_Movimiento',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Cuenta_Bancaria_Movimiento',
	storeId: 'treasury_cuentas_bancarias_movimientos',
	proxy: {
		type: 'general',
		url: 'php/treasury_cuentas_bancarias_movimientos_json_records.php'
	}
});