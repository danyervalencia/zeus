Ext.define("Siace.controller.log.OrdenesEditP",{extend:"Ext.app.Controller",stores:["array.DocOrden","array.YearsD"],views:["log.OrdenesEditP"],
init:function(application){this.control({
"log_ordeneditp":{beforeshow:this.loep_BeforeShow},"log_ordeneditp #btnSave":{click:this.loep_btnSaveClick},"log_ordeneditp #btnUndo":{click:this.loep_btnUndoClick},"log_ordeneditp #btnExit":{click:this.loep_btnExitClick},"log_ordeneditp #btnPers_search":{click:this.loep_btnPers_searchClick},"log_ordeneditp #btnAdd":{click:this.loep_btnAddClick},"log_ordeneditp #btnSuppress":{click:this.loep_btnSuppressClick},
"log_ordeneditp #grdLOD":{selectionchange:this.loep_grdLODSelectionChange},"log_ordeneditp #meta_id":{change:this.loep_meta_idChange},
"log_ordenedit #pers_ruc":{blur:this.loep_pers_rucBlur,focus:this.loep_pers_rucFocus,keypress:this.loep_pers_rucKeypress},"log_ordeneditp #year_id":{change:this.loep_year_idChange}
});},
loep_BeforeShow:function(comp,opt){var _TE=comp.getTypeEdit(); var _grd=comp.down("#grdLOD"); var _txtOM=comp.down("#orden_monto"); var _me=this; var _vs=fextpub_sessVar();
	if(_TE==1){var _icon="icon_New_90";var _title="Nueva Orden (Histórica) ::.";comp.down("#btnAdd").enable(); this.loep_LD(comp,"");
		var _str=Ext.create("Siace.store.log.Ordenes_DetEdit",{listeners:{update:function(str,rec,oper,opt){var _monto=0; str.each(function(r){_monto+=r.data.ordendet_pretot;}); _txtOM.setValue(_monto);}}});
		var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){console.log(editor);console.log(e);console.log(opt); var _rec=e.record; _rec.set("ordendet_pretot",fjsRound(_rec.data.ordendet_cantid*_rec.data.ordendet_preuni,2));}}}); _ce.init(_grd);
	}else{if(_TE==2){var _icon="icon_Modify_90"; var _title="Modificar Orden (Histórica) ::.";}else if(_TE==3){var _icon="icon_Query_90"; var _title="Consulta de Orden (Histórica) ::.";} var _str=fext_CS("log.Ordenes_DetEdit");}
	_str.pageSize=1000;_grd.bindStore(_str);_grd.getView().refresh();_str.sort("ordendet_item","ASC");
	fextbud_metasParameters({panel:comp,type_record:"combo_codename"});fextbud_tareasParameters({panel:comp,type_record:"combo_codename"});fextbud_fuefinFilt({pan:comp,TR:"combo_codename"});

	_str.on("beforeload",function(str,oper,eopt){comp.down("#btnSuppress").disable();str.getProxy().setExtraParam("xxType_record","frm");});
	if(fjsIn_array(_TE,[2,3])){comp.down("#btnAdd").disable();
		_frm.load({method:"POST",url:"php/logistics_ordenes_json_records.php",waitMsg:"Loading...",params:{xxOrden_key:comp.getCallKey(),ssNO_USK:"NoT",xxType_record:"frm",xxMenu_id:comp.getMenuId(),vs:Ext.JSON.encode(_vs)},
			success:function(frm,act){try{var _mod=fext_CM("log.DonacionEdit");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod); comp.down("#dona_monto").setValue(_dat.dona_monto*1);comp.down("#pers_ruc").setValue(_dat.pers_ruc); comp.down("#pers_nombre").setValue(_dat.pers_nombre); if(_dat.dona_file1!==""){comp.down("#ffiDona_file1").setRawValue(_dat.dona_file1); comp.down("#ffiDona_file1").disable(); if(_TE==2){comp.down("#btnDona_file1Delete").enable();} comp.down("#btnDona_file1Download").enable();} _strLDD.load({params:{xxDona_key:_dat.dona_key},callback:function(rec,oper,succ){comp.down("#donadet_item").setValue(rec[rec.length-1].data.donadet_item);}});}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}});
		if(_TE==3){comp.down("#doc_id").disable();comp.down("#orden_nro").disable(); comp.down("#orden_fecha").disable(); comp.down("#orden_observ").disable(); comp.down("#btnSave").disable(); comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();}
	}

	if(fjsIn_array(_TE,[1,2])){
		if(_TE==1){var _icon="icon_New_90";var _title="Nueva Orden de Compra Histórica";comp.down("#btnAdd").enable();}
		else if(_TE==2){var _icon="icon_Modify_90";var _title="Modificar Orden de Compra Histórica";}		
		//fextpub_areasFilter({"objeto":_tabLP.down("#area_key"),"area_key":Ext.getCmp("ah_txtArea_key").getValue(),"no_usk":"NoT","type_record":"combo","add_blank":"NO","disabled":true});
		//fextbud_tareasAMParameters({"panel":_tabLP,"docu_campo":"tareausuracce_estado501","docu_estado":1,"type_record":"combo_codename","add_blank":"NO"}); 
		
	}else if(_TE==3){var _icon="icon_Query_90"; var _title="Consulta de Requerimiento";}
	if(fjsIn_array(_TE,[2,3])){comp.setFilterFFTR(false); var _form = comp.down("form");  var _vs = fextpub_sessionVariables();
		_form.load({ method: "POST", url: "php/logistics_ordenes_json_records.php", waitMsg: "Loading...",
			params: { xxPed_key: comp.getCallKey(), xxYear_id: _tabLP.down("#year_id").getValue(), xxType_record: "form", xxMenu_id: comp.getMenuId(),
					  zzUsursess_key: _vs["us"], zzUsuracce_key: _vs["ua"], zzYear_id: _vs["y"], zzUsur_key: _vs["u"], zzArea_key: _vs["a"]},
			success: function (form, action) {
				try {
					var _model = Ext.create("Siace.model.logistics.Pedido"); var _res = Ext.decode(action.response.responseText);
					if ( _res.data[0] ) {
						_model.set(_res.data[0]);  _form.loadRecord(_model);  var _data = _res.data[0];
						if ( _TE == "12") { comp.setTitle("Editar " +(_data.tipped_id == "5006" ? "Especificaciones Técnicas" : "Terminos de Referencia")+ " de Requerimiento"); }
						_tabLP.down("#ped_nro").setValue(_data.ped_nro); _tabLP.down("#ped_fecha").setValue(_data.ped_fecha); _tabLP.down("#tipped_id").setValue(parseInt(_data.tipped_id));
						_tabLP.down("#ped_monto").setValue(_data.ped_monto);
						if ( _TE == "3" ) {
							fextpub_areasFilter({"objeto": _tabLP.down("#area_key"), "area_key": _data.area_key, "type_record": "combo", "add_blank": "NO", "disabled": true});
							fextbud_metasParameters({"panel": _tabLP, "meta_id": _data.meta_id, "type_record": "combo_codename", "add_blank": "NO"}); fextbud_metasLoad({"panel": _tabLP, "disabled": true, "meta_id": _data.meta_id});
							fextbud_tareasParameters({"panel": _tabLP, "tarea_key": _data.tarea_key, "type_record": "combo_codename", "order_by": "tarea_codename",  "add_blank": "NO"}); fextbud_tareasLoad({"panel": _tabLP, "disabled": true, "filterForce": true, "tarea_key": _data.tarea_key});
						} else { }
						_tabLP.down("#grdLOD").getStore().load({ params: { xxPed_key: _data.ped_key }, });
						_tabLP.down("#grdLOTF").getStore().load({ params: { xxPed_key: _data.ped_key }, });
					}
				} catch (ex) { Ext.Msg.alert("Status", "Exception: " + ex.Message); }
			},
			failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
		});
		if ( fjsIn_array(_TE, ["3","12"]) ) {
			_form.load({ method: "POST", url: "php/logistics_ordenes_ettr_json_records.php",
				params: { xxPed_key: comp.getCallKey(), xxType_record: "form", waitMsg: "Loading...",
						  zzUsursess_key: _vs["us"], zzUsuracce_key: _vs["ua"], zzYear_id: _vs["y"], zzUsur_key: _vs["u"], zzArea_key: _vs["a"], zzAlma_key: _vs["alma"] },
				success: function (form, action) {
					try {
						var _model = Ext.create("Siace.model.logistics.Pedido_Ettr"); var _res = Ext.decode(action.response.responseText);
						if ( _res.data[0] ) {
							_model.set(_res.data[0]);  _form.loadRecord(_model);  var _data = _res.data[0];
							if ( _data.pedettr_file1 !== "" ) {
								comp.down("#ffiPedettr_file1").setRawValue(_data.pedettr_file1); comp.down("#ffiPedettr_file1").setReadOnly(true); comp.down("#btnPedettr_file1Download").enable();
								if ( _TE == "12" ) { comp.down("#btnPedettr_file1Delete").show(); }
							}
							if ( _data.pedettr_file2 !== "" ) {
								comp.down("#ffiPedettr_file2").setRawValue(_data.pedettr_file2); comp.down("#ffiPedettr_file2").setReadOnly(true); comp.down("#btnPedettr_file2Download").enable();
								if ( _TE == "12" ) { comp.down("#btnPedettr_file2Delete").show(); }
							}
						}
					} catch (ex) { Ext.Msg.alert("Status", "Exception: " + ex.Message); }
				}
			});
		}
		if ( fjsIn_array(_TE, ["3","12"]) ) {_tabLP.down("#btnAdd").disable();
			if ( _TE == "3" ) {
				_tabEttr03.down("#ffiPedettr_file1").disable(); _tabEttr03.down("#ffiPedettr_file2").disable();
				comp.down("#btnSave").disable(); comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();
			}
		}
	}
	comp.setIconCls(_icon);comp.setTitle(_title);
},
loep_LD:function(poComp,pcAK){
	fextpub_areasFilter({"objeto":poComp.down("#areakey"),"type_record":"combo","filter":false,"add_blank":"NO","no_usk":"NoT","setValue":pcAK==""?false:true,value:pcAK});
},
loep_btnSaveClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("form");var _TE=_win.getTypeEdit();
	if(fext_IE(_win.down("#orden_fecha"))){fext_MsgA("Debe indicar la FECHA del documento",_win.down("#orden_fecha"));return false;}
	if(fext_IE(_win.down("#fuefin_id"))){fext_MsgA("Debe indicar el Rubri Presupuestal",_win.down("#fuefin_id"));return false;}
	if(fext_IE(_win.down("#pers_key"))){fext_MsgA("Debe indicar el Proveedor",_win.down("#pers_ruc"));return false;}
	var _det="";var _monto=0; var _rec=_win.down("#grdLOD").getStore().getRange();
	for( var _i=0;_i<_rec.length;_i++){ var _dat=_rec[_i].data;
		if(_dat.ordendet_cantid*1<=0){fext_MsgA("Cantidad en detalle: " +_dat.bs_nombre+ ", no pueder ser cero (0)");return false;}
		if(_dat.ordendet_preuni*1<=0){fext_MsgA("Precio Unitario en detalle: " +_dat.bs_nombre+ ", no pueder ser cero (0)");return false;}
		if(_dat.ordendet_pretot*1<=0){fext_MsgA("Subtotal en detalle: " +_dat.bs_nombre+ ", no pueder ser cero (0)");return false;}
		_det += (_i==0?"":",")+"{"+_i+",*"+_dat.ordendet_key+","+_dat.bs_key+","+"*"+_dat.ordendet_detalle+","+_dat.ordendet_cantid+","+_dat.ordendet_preuni+","+_dat.ordendet_pretot+","+_dat.espedet_id+"}";
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.conf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_save_prev.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_TE,xxDoc_id:_win.down("#doc_id").getValue(),xxOrden_monto:_win.down("#orden_monto").getValue(),xxDet:_det,xxMenu_id:_win.getMenuId(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
loep_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
loep_btnExitClick:function(btn,e,opt){btn.up("window").close();},
loep_btnPers_searchClick:function(btn,e,opt){var _win=btn.up("window"); fext_CC("pub.PersonasSearch"); _win.setCompPPS(fext_componentSearch({"componentCall":_win,"componentSearch":_win.getCompPPS(),"view":"Siace.view.pub.PersonasSearch","title":"Búsqueda de Proveedor","keyCall":_win.down("#pers_key").getValue(),"typeQuery":"ONLY_WITH_RUC"}));},
loep_btnAddClick:function(btn,e,opt){var _win=btn.up("window");fext_CC("pub.Bienes_ServsSA");
	_win.setCompPBSS(fext_componentSearch({"componentCall":_win,"componentSearch":_win.getCompPBSS(),"view":"Siace.view.pub.Bienes_ServsSA","title":"Búsqueda Catálogo de Bienes y Servicios","typeReturn":"ADD_WLOEP"}));
	_win.getCompPBSS().setBst_id(1);_win.getCompPBSS().down("#bst_id").setValue(_win.getCompPBSS().getBst_id()*1);
},
loep_btnSuppressClick:function(btn,e,opt){var _win=btn.up("window"); var _rec=fext_grdSR(_win.down("#grdLOD")); if(!_rec){return false;} btn.disable();
	_win.down("#grdLOD").getStore().remove(_rec); var _recLPTFTE=false;
	_win.down("#grdLOTF").getStore().findBy(function(rec,id){
		if (rec.get("espedet_id")==_rec.data.espedet_id){rec.set("pedtareafte_monto", fjsRound(rec.get("pedtareafte_monto")*1 - _rec.data.peddet_pretot*1, 2)); rec.commit();
			if(rec.get("pedtareafte_monto")*1<=0){_recLPTFTE=rec;} return true;
		}
	});
	if(_recLPTFTE){ _win.down("#grdLOTF").getStore().remove(_recLPTFTE); }
	this.loep_ped_montoUpdate(_win, _rec.data.peddet_pretot*(-1));
},
loep_grdLODAdd:function(poComp,poRec,poP){var _str=poComp.down("#grdLOD").getStore(); var _mod=_str.findRecord("bs_key",poRec.data.bs_key); var _close=true;
	_str.add({bs_key:poRec.data.bs_key,bs_codigo:poRec.data.bs_codigo,bs_nombre:poRec.data.bs_nombre,unimed_abrev:poRec.data.unimed_abrev,espedet_id:poP["espedet_id"],espedet_codigo:poP["espedet_codigo"],ordendet_detalle:poP["detalle"],ordendet_cantid:poP["cantid"],ordendet_preuni:poP["preuni"],ordendet_pretot:poP["pretot"]});
	_close=true; this.loep_orden_montoUpdate(poComp,poP["pretot"]);
	return _close;
},
loep_grdLODSelectionChange:function(mod,rec,opt){if(rec.length==1){var _win=mod.view.panel.up("panel").up("panel").up("window");
	if(fjsIn_array(_win.getTypeEdit(),[1,2])){_win.down("#btnSuppress").enable();}
}},
loep_meta_idChange:function(cbo,newVal,oldVal,opt){if(fjsIn_array(cbo.up("window").getTypeEdit(),[1,2])){fextbud_tareasLoad({"panel":cbo.up("panel")});}},
loep_orden_montoUpdate:function(poComp,pnPretot){var _monto=poComp.down("#orden_monto").getValue();poComp.down("#orden_monto").setValue(poComp.down("#orden_monto").getValue()*1 + pnPretot*1);},
loep_pers_rucBlur:function(txtf,The,opt){this.loep_pers_rucSearch(txtf.up("window"),0);},
loep_pers_rucFocus:function(txtf,The,opt){this.loep_pers_rucSearch(txtf.up("window"),1);},
loep_pers_rucKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.loep_pers_rucSearch(txtf.up("window"),13);}},
loep_pers_rucSearch:function(poCallWin,pcType){fext_fieldSearch(pcType,poCallWin,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],1,["Siace.view.pub.PersonasEdit","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasEdit",poCallWin.getMenuId()],"");},
loep_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!=undefined||cbo.up("window").getTypeEdit()==1){fextbud_metasLoad({"panel":cbo.up("panel")});}},
});