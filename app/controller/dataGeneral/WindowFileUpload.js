Ext.define('Siace.controller.dataGeneral.WindowFileUpload', { extend: 'Ext.app.Controller',
	views: ['dataGeneral.WindowFileUpload'],
	init: function(application) {
		this.control({
			'windowfileupload': { }, //beforerender: this.pub_BeforeRender,
			'windowfileupload #btnAttach': { click: this.wfu_btnAttachClick, },
			'windowfileupload #btnCancel': { click: this.wfu_btnCancelClick, },
            'windowfileupload #btnFileDownload': { click: this.wfu_btnFileDownloadClick, },
            'windowfileupload #ffiFile': { change: this.wfu_ffiFileChange, },
		});
	},
	wfu_btnCancelClick: function(button, e, options) { button.up('window').close();  button.up('window').destroy(); },
	wfu_btnAttachClick: function(button, e, options) {
		_win = button.up('window'); _form = button.up('form');
	    if ( _form.getForm().isValid() ) {
	    	var _store = _win.getCallStore();
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
				if ( btn === 'yes' ) {
			    	var _vs = fextpub_sessionVariables();
			        _form.getForm().submit({
						method: 'POST',  url: 'php/upload_file.php',
						params:{ xx0005: 'OK', 
						         xxSchema_table: _win.getSchemaTable(), xxTable_field: _win.getTableField(), xxRecord_key: _win.getRecordKey(), xxRecord_field: _win.getRecordField(), xxTable: _win.getTable(), xxField: _win.getField(),
								 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		                waitTitle: translations.valida_titulo,
		                waitMsg: translations.valida_mensaje01,
			            success: function(form, action) {
			            	var result = Siace.util.Util.decodeJSON(action.response.responseText);
			                if ( result.success ) { Siace.util.Alert.msg('Success!', 'User saved.'); _store.load();  _win.close(); _win.destroy(); } 
			                else { Siace.util.Util.showErrorMsg(result.msg); }
			            },
			            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			        });
				}
			});
		}
	},
	wfu_btnFileDownloadClick: function(button, e, options) { var _file = button.up('window').down('#ffiFile').fileInputEl.dom.files[0]; fext_FileDownload(_file, undefined); },
	wfu_ffiFileChange: function(filefield, value, options) {
		var _win = filefield.up('window'); var _r = fext_FileReader(filefield, _win.getTypeFile(), _win.getTypeMessage(), _win.getSizeMax(), _win.getSizeMessage(), '', _win.down('#btnFileDownload'));
		filefield.up('window').down('#btnAttach').setDisabled( _r == '' ? true : false );
	},
});