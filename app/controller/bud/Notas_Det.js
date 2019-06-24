Ext.define('Siace.controller.budget.Modificaciones_Det', {
	extend: 'Ext.app.Controller', views: ['budget.Modificaciones_DetAdd',],

	init: function(application) {
		this.control({
			'budget_modificaciones_detadd': { beforerender: this.bmda_BeforeRender, },
			'budget_modificaciones_detadd #btnAccept': { click: this.bmda_btnAcceptClick, },
			'budget_modificaciones_detadd #btnCancel': { click: this.bmda_btnCancelClick, },
			'budget_modificaciones_detadd #cuebanc_key': { change: this.bmda_cuebanc_keyChange, },
			//'budget_modificaciones_detadd #year_id': { change: this.bmda_year_idChange, },
		});
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	bmda_BeforeRender: function(component, options) {
		var _tipmodif_id = component.down("#tipmodif_id").getValue(); var _value = (_tipmodif_id == '2011' ? '2042' : '');
		fextbud_especificas_detFilter({'panel': component, 'tiptrans_code': "1", "type_query": (_tipmodif_id == '2011' ? "SEARCH_CODIGO_1.9.1.1.1.1" : ""), 'add_blank': 'NO'});
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipmodifdet_id'), 'tabgen_parent': '2040', "add_blank": 'NO', "disabled": (_tipmodif_id == '2011' ? true : false),'value': _value});
	},

	bmda_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window'); var _frm = _win.down('form');
		if ( _win.down('#espedet_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el CLASIFICADOR PRESUPUESTAL', function() { _win.down('#espedet_id').focus(); }); return false ; }
		if ( _win.down('#tipmodifdet_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo', function() { _win.down('#tipmodifdet_id').focus(); }); return false ; }
		if ( _win.down('#modifdet_monto').getValue() == '' || _win.down('#modifdet_monto').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el IMPORTE ', function() { _win.down('#modifdet_monto').focus(); }); return false ; }

		var _egreso = ( _win.down('#tipmodifdet_id').getValue() == "2041" ? _win.down("#modifdet_monto").getValue()*1 : 0 );
		var _ingreso = ( _win.down('#tipmodifdet_id').getValue() == "2042" ? _win.down("#modifdet_monto").getValue()*1 : 0 );
    	_win.getCallWindow().down("#grdBudget_modificaciones_det").getStore().add({"espedet_id": _win.down("#espedet_id").getValue(), "espedet_codigo": _win.down("#espedet_id").getRawValue().substr(0,15),  "espedet_nombre": _win.down("#espedet_id").getRawValue().substr(16), "tipmodifdet_id": _win.down('#tipmodifdet_id').getValue(), "modifdet_egreso": _egreso, "modifdet_ingreso": _ingreso});
    	if ( _egreso*1 > 0 ) { _win.getCallWindow().down("#modif_egreso").setValue(_win.getCallWindow().down("#modif_egreso").getValue()*1 + _egreso); } 
    	else { _win.getCallWindow().down("#modif_ingreso").setValue(_win.getCallWindow().down("#modif_ingreso").getValue()*1 + _ingreso); }
    	_win.getCallWindow().down("#tipmodif_id").disable(); _win.getCallWindow().down("#fuefin_id").disable();
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }    	
	},

	bmda_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},

	bmda_espedetFilter: function(poComponent) {
		poComponent.down('#espedet_id').getStore().removeAll();
		if (poComponent.down('#year_id').getValue()*1 > 0 && poComponent.down('#cuebanc_key').getValue() !== '' ) {
			var _cboEspedet_id = poComponent.down('#espedet_id');
			_cboEspedet_id.getStore().load({
				params: { xxYear_id: poComponent.down('#year_id').getValue(), xxFuefin_id: poComponent.down('#cuebanc_key').getStore().findRecord('cuebanc_key', poComponent.down('#cuebanc_key').getValue()).data.fuefin_id,
				          xxOrder_by: 'espedet_codigo', xxType_record: 'combo_espedet_id', xxAdd_blank: 'YES' },
				callback: function(records, operations, success) { if ( records.length > 0 ) { _cboEspedet_id.setValue(records[0].data.espedet_id); }}
			});
		}
	},

	bmda_cuebanc_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bmda_espedetFilter(combo.up('window')); }
	},

	bmda_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bmda_espedetFilter(combo.up('window')); }
	},
	
});