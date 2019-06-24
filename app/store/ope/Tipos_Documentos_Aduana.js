Ext.define('Siace.store.operations.Tipos_Documentos_Aduana', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Tipo_Documento_Aduana',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Tipo_Documento_Aduana',
	storeId: 'operations_tipos_documentos_aduana',
	proxy: {
		type: 'general',
		url: 'php/operations_tipos_documentos_aduana_json_records.php',
	}
});