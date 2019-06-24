Ext.define('Siace.controller.tre.EgresosEditG',{extend:'Ext.app.Controller',stores:['array.DocPago','array.DocPagoProc','array.TipDocIdentVenta'],views:['tre.EgresosEditG'],
init:function(application){this.control({
'tre_egreeditg':{beforeshow:this.teeg_BeforeShow},
'tre_egreeditg #btnSave':{click:this.teeg_btnSaveClick},'tre_egreeditg #btnUndo':{click:this.teeg_btnUndoClick},'tre_egreeditg #btnExit':{click:this.teeg_btnExitClick},
'tre_egreeditg #btnIndiv_search':{click:this.teeg_btnIndiv_searchClick},'tre_egreeditg #btnPers_search':{click:this.teeg_btnPers_searchClick},'tre_egreeditg #btnAdd':{click:this.teeg_btnAddClick},'tre_egreeditg #btnSuppress':{click:this.teeg_btnSuppressClick},
'tre_egreeditg #grdTETF':{selectionchange:this.teeg_grdTETFSelectionChange},
'tre_egreeditg #indiv_dni':{blur:this.teeg_indiv_dniBlur,focus:this.teeg_indiv_dniFocus,keypress:this.teeg_indiv_dniKeypress},
'tre_egreeditg #pers_ruc':{blur:this.teeg_pers_rucBlur,focus:this.teeg_pers_rucFocus,keypress:this.teeg_pers_rucKeypress},
'tre_egreeditg #tablex_doc':{change:this.teeg_tablex_docChange},'tre_egreeditg #tablex_nro':{blur:this.teeg_tablex_nroBlur,focus:this.teeg_tablex_nroFocus,keypress:this.teeg_tablex_nroKeypress},
'tre_egreeditg #tipdocident_id':{change:this.teeg_tipdocident_idChange}
});},
teeg_BeforeShow:function(comp,options){
	var _menuId=comp.getMenuId(); var _TE=comp.getTypeEdit(); if(!fjsIn_array(_TE,['1','3'])){return false;} var _me=this; var _cboCB=comp.down('#cuebanc_key'); var _grdTETF=comp.down('#grdTETF'); var _txtEM=comp.down('#egre_monto');
	_cboCB.bindStore(Ext.create('Siace.store.tre.Cuentas_BancariasCboComprob'));
	_cboCB.getStore().load({params:{xxType_record:'combo_comprobantes',xxOrder_by:'cuebanc_nrobanco',xxAdd_blank:'YES'},callback:function(records,operations,success){_cboCB.setValue(records[0].data.cuebanc_key);}});
	comp.down("#area_key").bindStore(Ext.create("Siace.store.pub.AreasCbo")); comp.down("#meta_id").bindStore(Ext.create("Siace.store.bud.MetasCbo")); comp.down("#tarea_key").bindStore(Ext.create("Siace.store.bud.TareasCbo")); comp.down("#fuefin_id").bindStore(Ext.create('Siace.store.bud.Fuentes_FinanciamientoCbo'));
	
	if(_TE=='1'){
		var _icon='icon_New_90'; var _title='Nuevo Comprobante de Pago ::.'; comp.down('#egre_fecha').setValue(fjsDateCurrent(''));
		var _strTETF=Ext.create('Siace.store.tre.EgresosSearchTareafteForPago',{ listeners:{ update:function(store,record,operation,options){ var _monto=0; store.each(function(record){ _monto+=record.get('tablextareafte_pago'); }); _txtEM.setValue(_monto); }}});
		var _ce=Ext.create('Ext.grid.plugin.CellEditing',{clicksToEdit:1,listeners:{edit:function(editor,e,options){}}});
		_ce.init(_grdTETF); comp.down("#tipdocident_id").setValue(3);
	}else{ var _icon='icon_Query_90'; var _title='Consulta Comprobante de Pago ::.'; var _strTETF=Ext.create('Siace.store.tre.Egresos_Tareas_FftredEdit'); }
	_grdTETF.bindStore(_strTETF); _grdTETF.getView().refresh(); _strTETF.sort('egretareafte_item','ASC');
	_strTETF.on('beforeload',function(store,operations,eoptions){ comp.down('#btnSuppress').disable();
		//store.getProxy().setExtraParam('xxOrder_by',store.sorters.items[0].property+' '+store.sorters.items[0].direction);
	});
	comp.setIconCls(_icon); if(_title!==''){comp.setTitle(_title);}
},
teeg_btnSaveClick:function(button,e,options){
	var _win=button.up('window'); var _frm=_win.down('form'); var _pers_key=(_win.down('#tipdocident_id').getValue()=='3'?_win.down('#pers_key').getValue():_win.down('#indiv_key').getValue());
	if(_win.down('#egre_fecha').getValue()==''){ Ext.Msg.alert(translations.mensaje,'Error de navegador, no se ha establecido la FECHA',function(){}); return false; }
	if(Ext.isEmpty(_win.down('#tablex_key').getValue())){ Ext.Msg.alert(translations.mensaje,'No se ha indicado el documento al cual se va a realizar el pago',function(){}); return false; }
	if(Ext.isEmpty(_win.down('#expe_nro').getValue())){ Ext.Msg.alert(translations.mensaje,'Documento al cual va realizar el pago no regitra número de SIAF',function(){}); return false; }
	if(Ext.isEmpty(_win.down('#fuefin_id').getValue())){ Ext.Msg.alert(translations.mensaje,'Debe indicar el Rubro de Gasto',function(){ _win.down('#fuefin_id').focus(); }); return false; }
	if(Ext.isEmpty(_pers_key)){ Ext.Msg.alert(translations.mensaje,'Debe indicar la persona a quien se asigna el documento',function(){}); return false; }
	if(Ext.isEmpty(_win.down('#cuebanc_key').getValue())){ Ext.Msg.alert(translations.mensaje,'No se ha indicado la Cuenta Bancaria por la cual se va a realizar pago',function(){}); return false; }
	var _rec=_win.down('#grdTETF').getStore().getRange(); var _det=''; var _egre_monto=0;
	for(var _i=0;_i<_rec.length;_i++){
		if(_rec[_i].get('tablextareafte_pago')*1<=0){ Ext.Msg.alert(translations.mensaje,'Importe de item: '+(_i+1)+', debe ser mayor a 0 (cero)',function(){}); return false; }
		if(_rec[_i].get('tablextareafte_pago')*1>_rec[_i].get('tablextareafte_saldo')*1){ Ext.Msg.alert(translations.mensaje,'Importe de item: '+(_i+1)+': '+fjsFormatNumeric(_rec[_i].get('tablextareafte_pago'),2)+', NO debe ser mayor al saldo del documento: '+fjsFormatNumeric(_rec[_i].get('tablextareafte_saldo'),2),function(){}); return false; }
		_det+=(_i==0?'':',')+'{'+_rec[_i].get('tablextareafte_key')+','+_rec[_i].get('tareafte_key')+','+_rec[_i].get('tarea_key')+','+_rec[_i].get('tablextareafte_pago')+'}';
		_egre_monto = fjsRound(_egre_monto*1 + _rec[_i].get('tablextareafte_pago')*1, 2);
	}
	if(_det==''){ Ext.Msg.alert(translations.mensaje,'Documento no registra detalle',function(){ _win.down('#btnAdd').focus(); }); return false; }
	if(_egre_monto*1!==_win.down('#egre_monto').getValue()*1){ Ext.Msg.alert(translations.mensaje,'Importe en sumatoria de detalle ['+_egre_monto+'], es diferente al importe del documento ['+_win.down('#egre_monto').getValue()+']',function(){}); return false; }
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm('Confirmar', translations.mensaje_pregunta_guardar, function(btn){ if(btn=='yes'){ var _vs=fextpub_sessionVariables();
		_frm.getForm().submit({method:'POST', url: 'php/treasury_egresos_save.php', waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			params:{xx0005:'YES', xxEgre_key:_win.getCallKey(), xxType_edit:_win.getTypeEdit(), xxYear_id:_win.down('#year_id').getValue(), xxDoc_id:_win.down('#doc_id').getValue(), xxEgre_nro:_win.down('#egre_nro').getSubmitValue(), xxEgre_fecha:_win.down('#egre_fecha').getSubmitValue(),
					xxPers_key:_pers_key, xxMeta_id:_win.down('#meta_id').getValue(), xxTarea_key:_win.down('#tarea_key').getValue(), xxFuefin_id:_win.down('#fuefin_id').getValue(), xxArea_key:_win.down('#area_key').getValue(), xxEgre_monto:_win.down('#egre_monto').getValue()*1, xxDet:_det, xxMenu_id:_win.getMenuId(),
					zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
			success:function(form,action){
				var _result=Siace.util.Util.decodeJSON(action.response.responseText);
				if(_result.success){
					if(_win.getTypeEdit()=='1'){
						Siace.app.getController('tre.EgresosOK'); var _winF=Ext.create('Siace.view.tre.EgresosOK'); _winF.setCallKey(_result.key); _winF.setCallStore(_win.getCallStore());
						_winF.down('#btnAccept').setVisible(false); _winF.down('#btnCancel').setVisible(false); _winF.down('#btnPrinter').setVisible(true); _winF.down('#btnExit').setVisible(true); _win.close(); _winF.show();
					} else { if(_win.getCallStore()!==null){ _win.getCallStore().load(); }  _win.close(); }
				} else { Siace.util.Util.showErrorMsg(_result.msg); }
			},
			failure:function(form,action){Siace.util.Util.showErrorMsg(action.response.responseText); }
		});
	}});
},
teeg_btnUndoClick:function(button,e,options){ button.up('window').close(); },
teeg_btnExitClick:function(button,e,options){ button.up('window').close(); },
teeg_btnIndiv_searchClick:function(button,e,options){
	var _win=button.up('window'); Siace.app.getController('pub.IndividuosSearch');
	_win.setCompPIS(fext_componentSearch({'componentCall':_win.down('#cntIndiv'),'componentSearch':_win.getCompPIS(),'view':'Siace.view.pub.IndividuosSearch','title':'Búsqueda de Persona ::.','keyCall':_win.down('#indiv_key').getValue()}));
},
teeg_btnPers_searchClick:function(button,e,options){
	var _win=button.up('window'); Siace.app.getController('pub.PersonasSearch');  
	_win.setCompPPS(fext_componentSearch({'componentCall':_win.down('#cntPers'),'componentSearch':_win.getCompPPS(),'view':'Siace.view.pub.PersonasSearch','title':'Búsqueda de Proveedor','keyCall':_win.down('#pers_key').getValue(),'typeQuery':'ONLY_WITH_RUC'}));
},
teeg_btnAddClick:function(button,e,options){
	var _win=button.up('window'); var _meta_id=(Ext.isEmpty(_win.down('#meta_id').getValue())||_win.down('#meta_id').getValue()*1<=0?0:_win.down('#meta_id').getValue()); var _tarea_key=(Ext.isEmpty(_win.down('#tarea_key').getValue())?'':_win.down('#tarea_key').getValue()); var _fuefin_id=(Ext.isEmpty(_win.down('#fuefin_id').getValue())||_win.down('#fuefin_id').getValue()*1<=0?0:_win.down('#fuefin_id').getValue()); var _area_key=(Ext.isEmpty(_win.down('#area_keyx').getValue())?'':_win.down('#area_keyx').getValue());
	if(_fuefin_id<=0){ Ext.Msg.alert(translations.mensaje,'Debe indicar el Rubro Presupuestal',function(){ _win.down('#fuefin_id').focus(); }); return false; }
	Siace.app.getController('bud.Tareas_FftredSearchAdd');
	if(Ext.isEmpty(_win.getCompBTFS())){ var _winS=Ext.create('Siace.view.bud.Tareas_FftredSearchAdd'); _winS.setCallWindow(_win); _winS.setTypeReturn('ADD_EGRESOS'); _win.setCompBTFS(_winS); }
	else{ var _winS=_win.getCompBTFS(); }
	_winS.setFilt(_win.getFilt());
	_winS.setYear_id(_win.down('#year_id').getValue()); _winS.setMeta_id(_win.down('#meta_id').getValue()); _winS.setTarea_key(_win.down('#tarea_key').getValue()); _winS.setFuefin_id(_win.down('#fuefin_id').getValue());
	_winS.show();
},
teeg_btnSuppressClick:function(button,e,options){
	var _win=button.up('window'); var _rec=_win.down('#grdTETF').getSelectionModel().getSelection()[0];
	if(_rec){ button.disable(); _win.down('#grdTETF').getStore().remove(_rec); this.teeg_egretareafte_montoUpdate(_win,_rec.data.tablextareafte_pago*(-1)); }
},
teeg_egretareafte_montoUpdate:function(poComp,pnMonto){poComp.down('#egre_monto').setValue(poComp.down('#egre_monto').getValue()*1 + pnMonto*1);},
teeg_grdTETFSelectionChange:function(model,record,options){		
	if(record.length==1){
		var _win=model.view.panel.up('window');
		if(fjsIn_array(_win.getTypeEdit(),['1','2'])&&record[0].data.viatdet_item!='1'){ _win.down('#btnSuppress').enable(); }
	}
},
teeg_grdTETFAdd:function(poComp,poRec,poParam){
	var _strTETF=poComp.down('#grdTETF').getStore(); var _model=_strTETF.findRecord('tareafte_key', poRec.data.tareafte_key); var _close=false;
	if(_model==null){
		poComp.down('#egretareafte_item').setValue(poComp.down('#egretareafte_item').getValue()*1 + 1);
		_strTETF.add({egretareafte_item:poComp.down('#egretareafte_item').getValue(), tareafte_key:poRec.data.tareafte_key, tarea_key:poRec.data.tarea_key, tarea_codigo:poRec.data.tarea_codigo, fftr_code:poRec.data.fftr_code, espedet_codigo:poRec.data.espedet_codigo, espedet_nombre:poRec.data.espedet_nombre, area_key:poParam['area_key'],area_abrev:poParam['area_abrev']});
		_close=true; poComp.down("#meta_id").disable(); poComp.down("#tarea_key").disable(); poComp.down("#fuefin_id").disable(); poComp.down("#area_keyx").disable(); poComp.setFilt(false);
	}else{ Ext.Msg.alert(translations.mensaje, 'Item seleccionado ya se encuentra establecido en el documento'); }
	return _close;
},
teeg_indiv_dniBlur:function(textfield,The,options){ this.teeg_indiv_dniSearch(textfield.up('window'),'0'); },
teeg_indiv_dniFocus:function(textfield,The,options){ this.teeg_indiv_dniSearch(textfield.up('window'),'1'); },
teeg_indiv_dniKeypress:function(textfield,e,options){ if(e.getCharCode()==13){ this.teeg_indiv_dniSearch(textfield.up('window'),'13'); } },
teeg_indiv_dniSearch:function(poCallWindow,pcType){
	fext_fieldSearch(pcType,poCallWindow,['indiv_key','INDIV_DNI','indiv_dni','indiv_apenom'],['php/public_individuos_json_records.php','xxIndiv_dni','textfield_search',''],'1',
		['Siace.view.pub.IndividuosEdit','Nuevo Registro de Identidad ::.',['indiv_dni'],'','pub.IndividuosEdit',poCallWindow.getMenuId()]);
},
teeg_pers_rucBlur:function(textfield,The,options){ this.teeg_pers_rucSearch(textfield.up('window'),'0'); },
teeg_pers_rucFocus:function(textfield,The,options){ this.teeg_pers_rucSearch(textfield.up('window'),'1'); },
teeg_pers_rucKeypress:function(textfield,e,options){ if(e.getCharCode()==13){ this.teeg_pers_rucSearch(textfield.up('window'),'13'); }},
teeg_pers_rucSearch:function(poCallWindow,pcType){
	fext_fieldSearch(pcType,poCallWindow,['pers_key','PERS_RUC','pers_ruc','pers_nombre'],['php/public_personas_json_records.php','xxPers_ruc','textfield_search',''],'1',
		['Siace.view.pub.PersonasEdit','Nuevo Proveedor ::.',['pers_ruc'],'','pub.PersonasEdit',poCallWindow.getMenuId()],'');
},
teeg_tablexClean: function(poCom) {
	poCom.down("#tablex_fecha").setValue(''); poCom.down("#expe_nro").setValue(''); poCom.down("#area_key").getStore().removeAll(); poCom.down("#area_key").setValue(""); poCom.down("#meta_id").getStore().removeAll(); poCom.down("#meta_id").setValue(""); poCom.down("#tarea_key").getStore().removeAll(); poCom.down("#tarea_key").setValue(""); poCom.down("#fuefin_id").getStore().removeAll(); poCom.down("#fuefin_id").setValue("");
	poCom.down("#pers_key").setValue(""); poCom.down("#pers_ruc").setValue(""); poCom.down("#pers_nombre").setValue(""); poCom.down("#indiv_key").setValue(""); poCom.down("#indiv_dni").setValue(""); poCom.down("#indiv_apenom").setValue(""); 
	poCom.down("#grdTETF").getStore().removeAll(); poCom.down("#egre_monto").setValue(""); 
},
teeg_tablexSearch:function(poCom){
	if(!fjsIn_array(poCom.getTypeEdit(),['1','2'])){return false;} var _doc=poCom.down("#tablex_doc").getValue();
	if(Ext.isEmpty(_doc)||_doc*1<=0){ this.teeg_tablexClean(poCom); return false; }
	if(Ext.isEmpty(poCom.down("#tablex_nro").getValue())||poCom.down("#tablex_nro").getValue()*1<=0) { this.teeg_tablexClean(poCom); return false; }
	Ext.get(poCom.getEl()).mask('Validando información... por favor espere un momento...','loading'); var _me=this; var _vs=fextpub_sessionVariables();
	Ext.Ajax.request({method:'POST', url:"php/treasury_egresos_search_tablex_for_pago.php",
		params:{xxDoc_id: poCom.down("#tablex_doc").getValue(), xxTablex_nro:poCom.down("#tablex_nro").getValue(),
				xxMenu_id:poCom.getMenuId(), ssNO_USK:(poCom.getMenuId()=="4119"?"NoT":""),
				zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
		success:function(response){
			var _result=Siace.util.Util.decodeJSON(response.responseText);
			if(_result.success){
				if(_result.subtotal==1){ var _data=_result.data[0];
					poCom.down("#tablex_fecha").setValue(fjsDateDDMMAAAA(_data.tablex_fecha)); poCom.down("#expe_nro").setValue(_data.expe_nro*1>0?_data.expe_nro:''); poCom.down("#tablex_key").setValue(_data.tablex_key); 
					poCom.down("#area_key").getStore().add({area_key:_data.area_key, area_nombre:_data.area_nombre}); poCom.down("#area_key").setValue(_data.area_key);
					poCom.down("#meta_id").getStore().add({meta_id:_data.meta_id, secfunc_codename:_data.secfunc_codename}); poCom.down("#meta_id").setValue(_data.meta_id*1);
					poCom.down("#tarea_key").getStore().add({tarea_key:_data.tarea_key, tarea_codename:_data.tarea_codename}); poCom.down("#tarea_key").setValue(_data.tarea_key);
					poCom.down("#fuefin_id").getStore().add({fuefin_id:_data.fuefin_id, fuefin_codename:_data.fuefin_codename}); poCom.down("#fuefin_id").setValue(_data.fuefin_id*1);
					poCom.down("#tipdocident_id").setValue(_data.tipdocident_id*1); poCom.down("#egre_observ").setValue(_data.tablex_observ);
					if(_data.tipdocident_id=='1'){poCom.down("#indiv_key").setValue(_data.pers_key); poCom.down("#indiv_dni").setValue(_data.pers_ruc); poCom.down("#indiv_apenom").setValue(_data.pers_nombre);}
					else{poCom.down("#pers_key").setValue(_data.pers_key); poCom.down("#pers_ruc").setValue(_data.pers_ruc); poCom.down("#pers_nombre").setValue(_data.pers_nombre);}
					poCom.down("#grdTETF") .getStore().load({params:{xxTablex_doc:_doc, xxTablex_key:_data.tablex_key},
						callback:function(records,operations,success){ _pago=0; for(var _i=0; _i<=records.length-1; _i++){_pago=(_pago)*1+(records[_i].data.tablextareafte_pago*1);} poCom.down("#egre_monto").setValue(_pago*1); }
					});
				}else{ _me.teeg_tablexClean(poCom); }
			}else{ _me.teeg_tablexClean(poCom); Siace.util.Util.showErrorMsg(_result.msg); }
			Ext.get(poCom.getEl()).unmask();
		},failure:function(response){ _me.teeg_tablexClean(poCom); Ext.get(poCom.getEl()).unmask(); Siace.util.Util.showErrorMsg(response.responseText); }
	});
},
teeg_tablex_docChange:function(combo,newValue,oldValue,options){ var _win=combo.up("window"); if(oldValue!==undefined){this.teeg_tablexSearch(_win);} },
teeg_tablex_nroBlur:function(textfield,The,options){
	if(textfield.getValue()*1>0){textfield.setValue(fjsLpad(textfield.getValue(),6,'0'));}
	if(textfield.getValue()*1!=textfield.up("window").down("#TABLEX_NRO").getValue()*1){ this.teeg_tablexSearch(textfield.up("window")); }
},
teeg_tablex_nroFocus:function(textfield,The,options){ textfield.up("window").down("#TABLEX_NRO").setValue(textfield.getValue()); },
teeg_tablex_nroKeypress:function(textfield,e,options){ if(e.getCharCode()==13){ this.teeg_tablexSearch(textfield.up("window")); } },
teeg_tipdocident_idChange:function(combo,newValue,oldValue,options){
	var _win=combo.up('window'); var _TE=_win.getTypeEdit();
	if(newValue=='1'){
		_win.down('#cntPers').setVisible(false); _win.down('#cntIndiv').setVisible(true); _win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable();
		if(fjsIn_array(_TE,['1','2'])){ _win.down('#indiv_dni').enable(); _win.down('#btnIndiv_search').enable(); }
		_win.down('#pers_key').setValue(''); _win.down('#PERS_RUC').setValue(''); _win.down('#pers_ruc').setValue(''); _win.down('#pers_nombre').setValue('');
	}else if(newValue=='3'){
		_win.down('#cntPers').setVisible(true); _win.down('#cntIndiv').setVisible(false);
		if ( fjsIn_array(_TE,['1','2'])){ _win.down('#pers_ruc').enable(); _win.down('#btnPers_search').enable(); }
		_win.down('#indiv_key').setValue(''); _win.down('#INDIV_DNI').setValue(''); _win.down('#indiv_dni').setValue(''); _win.down('#indiv_apenom').setValue('');
	}else{
		_win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable(); _win.down('#indiv_dni').disable(); _win.down('#btnIndiv_search').disable();
		if(fjsIn_array(_TE,['1','2'])){
			_win.down('#pers_key').setValue(''); _win.down('#PERS_RUC').setValue(''); _win.down('#pers_ruc').setValue(''); _win.down('#pers_nombre').setValue('');
			_win.down('#indiv_key').setValue(''); _win.down('#INDIV_DNI').setValue(''); _win.down('#indiv_dni').setValue(''); _win.down('#indiv_apenom').setValue('');
		}
	}
},
});