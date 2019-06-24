Ext.define('Siace.store.dataGeneral.Public_Aduanas', {
	extend: 'Siace.store.dataGeneral.Abstract', // #1
    // necesitamos requires en memoria primero, para poder usar model y proxy
	requires: [
		'Siace.model.dataGeneral.Public_Aduanas', // #2
		'Siace.proxy.DataGeneral' // #3
	],

	model: 'Siace.model.dataGeneral.Public_Aduanas', // #4

	proxy: {
		type: 'datageneralproxy', // #5
		extraParams: {
			entity: 'public.aduanas' // #6 nombre de la tabla en el servidor
		}
	}
});