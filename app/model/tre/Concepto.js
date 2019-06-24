Ext.define('Siace.model.treasury.Concepto', {
	extend: 'Ext.data.Model',
	idProperty: 'concp_id',

	fields: [
		{ name: 'concp_id', type: 'int' },
		{ name: 'concp_key', type: 'string' },
		{ name: 'concp_nombre' },
		{ name: 'concp_abrev', type: 'string' },
		{ name: 'concp_code', type: 'string' },
		{ name: 'pctbl_id', type: 'int' },
		{ name: 'espedet_id', type: 'int' },
		{ name: 'fuefin_id', type: 'int' },
		{ name: 'concp_observ', type: 'string' },
		{ name: 'concp_need_identity', type: 'int' },
		{ name: 'concp_need_docs', type: 'int' },
		{ name: 'concp_estado', type: 'string' },
		{ name: 'concp_codigo', type: 'string' },
		{ name: 'concp_codename', type: 'string' },
		{ name: 'pctbl_cuenta', type: 'string' },
		{ name: 'pctbl_nombre', type: 'string' },
		{ name: 'espedet_codigo', type: 'string' },
		{ name: 'espedet_nombre', type: 'string' },
		{ name: 'espedet_codigo', type: 'string' },
		{ name: 'fuefin_code', type: 'string' },
		{ name: 'fuefin_nombre', type: 'string' },
	]
});