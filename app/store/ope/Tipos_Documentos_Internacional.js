Ext.define('Siace.store.operations.Tipos_Documentos_Internacional', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Tipo_Documento_Internacional',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Tipo_Documento_Internacional',
	storeId: 'operations_tipos_documentos_internacional',
	proxy: {
		type: 'general',
		url: 'php/operations_tipos_documentos_internacional_json_records.php',
	}
});