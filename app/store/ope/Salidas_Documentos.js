Ext.define('Siace.store.operations.Salidas_Documentos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Salida_Documento',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Salida_Documento',
	storeId: 'operations_salidas_documentos',
	proxy: {
		type: 'general',
		url: 'php/operations_salidas_json_records_documents.php'
	}
});