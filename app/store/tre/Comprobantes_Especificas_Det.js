Ext.define('Siace.store.treasury.Comprobantes_Especificas_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Comprobante_Especifica_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Comprobante_Especifica_Det',
	storeId: 'treasury_comprobantes_especificas_det',
	proxy: {
		type: 'general',
		url: 'php/treasury_comprobantes_especificas_det_json_records.php'
	}
});