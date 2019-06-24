Ext.define('Siace.view.public.Tipos_Documentos_IdentidadBrowse', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tipos_documentos_identidadbrowse',

    requires: [
        'Siace.view.public.Tipos_Documentos_IdentidadGrid'
    ],

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'tipos_documentos_identidadgrid'
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    itemId: 'btn0001',
                    text: ' Nuevo ',
                    iconCls: 'icon_0001'
                },
                {
                    xtype: 'button',
                    itemId: 'btn0002',
                    text: ' Modificar ',
                    iconCls: 'icon_0002'
                },
                {
                    xtype: 'button',
                    itemId: 'btn0007',
                    text: 'Eliminar',
                    iconCls: 'icon_0007'
                }
            ]
        }
    ]
});