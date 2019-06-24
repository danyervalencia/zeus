Ext.define('Siace.store.operations.Ingresos_Documentos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Ingreso_Documento',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Ingreso_Documento',
	storeId: 'operations_Ingresos_documentos',
	proxy: {
		type: 'general',
		url: 'php/operations_ingresos_json_records_documents.php'
	}
});