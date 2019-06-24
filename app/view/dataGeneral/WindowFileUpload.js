Ext.define('Siace.view.dataGeneral.WindowFileUpload', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowfileupload',
	
	closable: false,
	closeAction: 'hide',
	iconCls: 'icon_Attach_90',
	layout: { type: 'fit' },
	modal: true,
	resizable: false,
	title: translations.adjuntar_archivo,
	width: 400,

	items: [
		{ 
			xtype: 'form', frame: false, bodyPadding: 10,
			defaults: { anchor: '100%', labelWidth: 50 , msgTarget: 'title', },

			items: [
				{
					xtype: 'displayfield', itemId: 'documento', fieldCls: 'df00105', value: '',
				},
			    {
					xtype: 'fieldcontainer',
					fieldLabel: translations.archivo,
					labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'component_filefield', itemId: 'ffiFile', name: 'ffiFile',
							buttonOnly: false, flex: 1
						},
						{
							xtype: 'component_button_imagepdf', itemId: 'btnFileDownload',
							disabled: true, iconCls: 'icon_Download_90', margin: '0 0 0 0',
						}
					]
				},				
			],

			dockedItems: [
				{
					xtype: 'toolbar', dock: 'bottom',
					items: [
						{ xtype: 'tbfill', },					
						{ xtype: 'component_buttonAttach', disabled: true },
						{ xtype: 'component_buttonCancel', }
					]
				}
			]
		}
	],

	__callStore: null,
	__field: '',
	__recordField: '',	
	__recordKey: '',
	__schemaTable: '',
	__sizeMax: 0,
	__sizeMessage: '',
	__table: '',
	__tableField: '',
	__typeFile: '',
	__typeMessage: '',

	//__fileName = '';
	setCallStore: function(pcCallStore) { this.__callStore = pcCallStore; },
	getCallStore: function() { return this.__callStore; },
	setField: function(pcField) { this.__field = pcField; },
	getField: function() { return this.__field; },
	setRecordField: function(pcRecordField) { this.__recordField = pcRecordField; },
	getRecordField: function() { return this.__recordField; },
	setRecordKey: function(pcRecordKey) { this.__recordKey = pcRecordKey; },
	getRecordKey: function() { return this.__recordKey; },
	setSchemaTable: function(pcSchemaTable) { this.__schemaTable = pcSchemaTable; },
	getSchemaTable: function() { return this.__schemaTable; },
	setSizeMax: function(pnSizeMax) { this.__sizeMax = pnSizeMax; },
	getSizeMax: function() { return this.__sizeMax; },
	setSizeMessage: function(pnSizeMessage) { this.__sizeMessage = pnSizeMessage; },
	getSizeMessage: function() { return this.__sizeMessage; },
	setTable: function(pcTable) { this.__table = pcTable; },
	getTable: function() { return this.__table; },
	setTableField: function(pcTableField) { this.__tableField = pcTableField; },
	getTableField: function() { return this.__tableField; },
	setTypeFile: function(pcTypeFile) { this.__typeFile = pcTypeFile; },
	getTypeFile: function() { return this.__typeFile; },
	setTypeMessage: function(pcTypeMessage) { this.__typeMessage = pcTypeMessage; },
	getTypeMessage: function() { return this.__typeMessage; },
});