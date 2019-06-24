Ext.define('Siace.controller.operations.Industrias_Coeficientes', {
	extend: 'Ext.app.Controller',
	stores: [
		'operations.Coeficientes',
	],
	views: [
		 'operations.Industrias_CoeficientesAdd',
	],
    refs: [
        { ref: 'pbss_Bienes_ServsSearch', selector: 'public_bienes_servssearch' },            
    ],

	init: function(application) {
		this.control({
			'operations_industrias_coeficientesadd': { beforeshow: this.oica_BeforeShow, },
			'operations_industrias_coeficientesadd #btnAccept': { click: this.oica_btnAcceptClick, },
			'operations_industrias_coeficientesadd #btnCancel': { click: this.oica_btnCancelClick, },
            'operations_industrias_coeficientesadd #btnBs_search': { click: this.oica_btnBs_searchClick, },
			'operations_industrias_coeficientesadd #coef_id': { change: this.oica_coef_idChange, },
            'operations_industrias_coeficientesadd #bs_codigo': {
                blur: this.oica_bs_codigoBlur,
                focus: this.oica_bs_codigoFocus,
                keypress: this.oica_bs_codigoKeypress,
            },
		});
	},


	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	oica_BeforeShow: function(component, options) {
		var _cboCoef_id = component.down('#coef_id');
		_cboCoef_id.bindStore(Ext.create('Siace.store.operations.Coeficientes'));
		_cboCoef_id.getStore().load({ params: { xxType_record: 'combo' }, });
	},

	oica_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		if ( _win.down('#coef_id').getValue()*1 == 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe seleccionar el coeficiente', function() { _win.down('#coef_id').focus(); }); return false ; }
		if ( _win.down('#induscoef_cantid').getValue() == '' || _win.down('#induscoef_cantid').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la cantidad del coeficiente', function() { _win.down('#induscoef_cantid').focus(); }); return false ; }
		if ( _win.down('#coef_id').getValue() == '33' && _win.down('#bs_key').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe seleccionar el codigo del subproducto', function() { _win.down('#btnBs_search').focus(); }); return false ; }

		var _store = _win.getCallWindow().down('#grdOperations_industrias_coeficientes').getStore();
		var _found = false;
		_store.each(function(record) {
			if ( record.get('bs_key') == _win.getCallKey() ) {
				if ( record.get('coef_id') == _win.down('#coef_id').getValue() ) { _found = true;  return false; }
			} 
		});

		if ( !_found ) {
   			_store.add({
				bs_key: _win.getCallKey(),
 				coef_id: _win.down('#coef_id').getValue(),
 				coef_nombre: _win.down('#coef_id').getRawValue() + ( _win.down('#bs_key').getValue() == '' ? '' : '  ['+_win.down('#bs_codigo').getValue()+'] '+ _win.down('#bs_nombre').getValue() ),
 				induscoef_cantid: _win.down('#induscoef_cantid').getValue(),
 				return_bs_key: _win.down('#bs_key').getValue(),
			});
			_win.close();
		} else {
			Ext.Msg.alert(translations.mensaje, 'Coeficiente seleccionado ya se encuentra registrado para el insumo maestro');
		}
	},

	oica_btnCancelClick: function(button, e, options) {
		button.up('window').close();
	},

	oica_btnBs_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPbss_Bienes_ServsSearch(), button.up('window'), 'Siace.view.public.Bienes_ServsSearch', translations.operations_industriasedit_title_buscar_producto, button.up('window').down('#bs_key').getValue(), '', '', true);
	},

	oica_bs_codigoBlur: function(textfield, The, options) {
		this.oica_bs_codigoSearch('0', textfield.up('form'));
	},

	oica_bs_codigoFocus: function(textfield, The, options) {
		this.oica_bs_codigoSearch('1', textfield.up('form'));
	},

	oica_bs_codigoKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oica_bs_codigoSearch('13', textfield.up('form')); }
	},

	oica_bs_codigoSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['bs_key', 'BS_CODIGO', 'bs_codigo', 'bs_nombre'], 
			             ['php/public_bienes_servs_json_records.php', 'xxBs_codigo', 'textfield_search', ''], '', '');
	},

	oica_coef_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '33' ) {
			_win.down('#bs_codigo').enable(); _win.down('#btnBs_search').enable();
		} else {
			_win.down('#bs_codigo').disable(); _win.down('#btnBs_search').disable();
			_win.down('#bs_key').setValue(''); _win.down('#bs_codigo').setValue(''); _win.down('#bs_nombre').setValue('');
		}
	},
});