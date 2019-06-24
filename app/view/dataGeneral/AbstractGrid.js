Ext.define('Siace.view.dataGeneral.AbstractGrid', {
	extend: 'Ext.ux.LiveSearchGridPanel', // #1
	alias: 'widget.datageneralgrid',

	columnLines: true, // #2

	viewConfig: {
		stripeRows: true // #3
	},

	initComponent: function() {
		var me = this;

		me.selModel = {
			selType: 'cellmodel' // #4
		};

		me.plugins = [
			Ext.create('Ext.grid.plugin.CellEditing', { // #5
				clicksToEdit: 2,
				pluginId: 'cellplugin'
			})
		];

		me.features = [
			Ext.create('Ext.ux.grid.FiltersFeature', { // #6
				local: true
			})
		];


		me.dockedItems = [
            {
               xtype: 'toolbar',
               dock: 'top',
               itemId: 'topToolbar',
               items: [
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: 'Agregar',
                        iconCls: 'icon_add'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        text: 'Guardar Cambios',
                        iconCls: 'icon_save_all'
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: 'Cancelar Cambios',
                        iconCls: 'icon_cancel'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: 'Borrar filtros',
                        iconCls: 'icon_clear_filter'
                    }
               ] 
            }
        ];

        me.columns = Ext.Array.merge(me.columns,
            [
	            /*{
	                xtype    : 'datecolumn',
	                text     : 'Last Update', 
	                width    : 120,  
	                dataIndex: 'last_update',
	                format: 'Y-m-j H:i:s',
	                filter: true
	            },*/
	            {
	                xtype: 'actioncolumn',
	                width: 30,
	                align: 'center',
	                sortable: false,
	                menuDisabled: true,
	                items: [
	                    {
	                        handler: function(view, rowIndex, colIndex, item, e) {
	                            this.fireEvent('itemclick', this, 'delete', view, rowIndex, colIndex, item, e);
	                        },
	                        iconCls: 'icon_delete',
	                        cls: 'icon_delete_12',
	                        tooltip: ' Eliminar Registro '
	                    }
	                ]
	            }
            ]
        );
		me.callParent(arguments);
	}

});
