Ext.define('Siace.model.access.Root', { extend: 'Ext.data.Model', uses: ['Siace.model.access.Item'], idProperty: 'menu_id',
    fields: [{ name: 'menu_id', type: 'int' }, { name: 'menu_parent', type: 'int' }, { name: 'menu_par', type: 'int' }, { name: 'menu_key' }, { name: 'menu_nombre', type: 'string' }, { name: 'menu_name', type: 'string' }, { name: 'menu_controller', type: 'string' }],
    hasMany: { model: 'Siace.model.access.Item', foreignKey: 'menu_parent', name: 'items' }
});