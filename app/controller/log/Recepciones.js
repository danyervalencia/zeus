Ext.define('Siace.controller.logistics.Recepciones', { extend: 'Ext.app.Controller',
li_Printer: function(poParam) {},
li_View: function(poParam) {
	var _component = poParam['component']; var _grid = (poParam['grid'] == undefined ? 'grdLR' : poParam['grid']);
	var _type_edit = (poParam['type_edit'] == undefined ? '0' : poParam['type_edit']); var _menu_id = (poParam["menu_id"] == undefined ? "0" : poParam["menu_id"]); var _opc_id = (poParam["opc_id"] == undefined ? "" : poParam["opc_id"]);
	var _year_id = (poParam['year_id'] == undefined ? "" : poParam['year_id']); var _title = (poParam["title"] == undefined ? "2" : poParam["title"]);
	var _call_store = (poParam["call_store"] == undefined ? false : poParam["call_store"]); var _no_usk = (poParam['no_usk'] == undefined ? "" : poParam['no_usk']);
	if ( _opc_id != "" ) { if ( fextpub_uamoButtons(_component.down('#opc_id'), _opc_id) ) { return false; } }
	if ( fjsIn_array(_type_edit, ["2","3"]) ) { var _record = _component.down("#"+_grid).getSelectionModel().getSelection()[0]; if ( !_record ) { return false; } }

	Ext.get(_component.getEl()).mask(translations.mensaje_esperar, 'loading');
	Siace.app.getController('logistics.RecepcionesEdit'); var _win = Ext.create('Siace.view.logistics.RecepcionesEdit'); 
	_win.setTypeEdit(_type_edit); _win.setMenuId(_menu_id);
	if ( _year_id != "" ) { _win.down('#year_id').setValue(_year_id); }
	if ( _call_store ) { _win.setCallStore(_component.down('#'+_grid).getStore()); }
	if ( fjsIn_array(_type_edit, ['2','3']) ) { _win.setCallKey(_record.data.recep_key); }
	if ( _no_usk == "NoT" ) { _win.setNoUsk('NoT'); }
	_win.show(); Ext.get(_component.getEl()).unmask();
}
});