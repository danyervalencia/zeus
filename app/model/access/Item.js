Ext.define('Siace.model.access.Item', { extend: 'Ext.data.Model', uses: ['Siace.model.access.Root'], idProperty: 'menu_id',
    fields: [
        { name: 'menu_id', type: 'int' }, { name: 'menu_type', type: 'int' }, { name: 'menu_leaf', type: 'int' }, { name: 'menu_parent', type: 'int' },
        { name: 'menu_par', type: 'int' }, { name: 'menu_nombre', type: 'string' }, { name: 'submenu_nombre', type: 'string' }, { name: 'menu_name', type: 'string' }, { name: 'submenu_name', type: 'string' }, { name: 'menu_xtype', type: 'string' },  { name: 'menu_controller', type: 'string' }, { name: 'menu_css', type: 'string' }, { name: 'menu_url', type: 'string' }
    ],
    belongsTo: { model: 'Siace.model.access.Root', foreignKey: 'menu_parent' }
});