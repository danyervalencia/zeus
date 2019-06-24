Ext.define("Siace.controller.log.DonacionesE",{extend:"Ext.app.Controller",stores:["array.TipDocAB"],views:["log.DonacionesE"],
init: function(application) {this.control({
"log_donae":{beforeshow:this.lde_BS},"log_donae #btnSave":{click:this.lde_btnSav},"log_donae #btnUndo":{click:this.lde_btnExt},"log_donae #btnExit":{click:this.lde_btnExt},
"log_donae #btnPers_search":{click:this.lde_btnPS},"log_donae #btnAdd":{click:this.lde_btnAdd},"log_donae #btnSuppress":{click:this.lde_btnSup},
"log_donae #ffiDona_file1":{change:this.lde_ffiDfChg},"log_donae #btnDona_file1Delete":{click:this.lde_btnDfDelClk},"log_donae #btnDona_file1Down":{click:this.lde_btnDfDowClk},
"log_donae #dona_nro":{blur:this.lde_dnBlur},"log_donae #dona_serie":{blur:this.lde_dsBlur},
"log_donae #tabDetalle #grdLDD":{selectionchange:this.lde_grdSelChg},
"log_donae #pers_ruc":{blur:this.lde_prBlur,focus:this.lde_prFocus,keypress:this.lde_prKP}
}); },
lde_BS:function(comp,opt){var _TE=comp.getTE();var _grdLDD=comp.down("#grdLDD");var _txtDM=comp.down("#dona_monto");var _frm=comp.down("form");var _vs=fextpub_sessVar();var _me=this;
	fextpub_docFilt({obj:comp.down("#doc_id"),TQ:"DONACION",AB:"No"});
	if(_TE==1){var _ico="icon_New_90"; var _tit="Nueva Donativo ::.";
		var _strLDD=Ext.create("Siace.store.log.Donaciones_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.donadet_pretot;});_txtDM.setValue(_m);}}});
		var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(edit,e,opt){var _r=e.record;_r.set("donadet_pretot",fjsRound(_r.data.donadet_cantid*_r.data.donadet_preuni,2));}}});_ce.init(_grdLDD);
	}else{if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Donativo ::.";}else if(_TE==3){var _ico="icon_Query_90";var _tit="Consulta de Donativo ::.";}var _strLDD=fext_CS("log.Donaciones_DetE");}

	_grdLDD.bindStore(_strLDD);_grdLDD.getView().refresh();_strLDD.sort("donadet_item","ASC");
	_strLDD.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnSuppress");fext_PSEP(str,["xxType_record"],["frm"]);});
	if(fjsIn_array(_TE,[2,3])){fext_Dsb(comp,"btnAdd");
		_frm.load({method:"POST",url:"php/logistics_donaciones_json_records.php",waitMsg:"Loading...",params:{xxDona_key:comp.getCK(),ssNO_USK:comp.getNUK(),xxType_record:"frm",xxMenu_id:comp.getMI(),vs:fext_JE(_vs)},success:function(frm,act){try{var _mod=fext_CM("log.DonacionE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"dona_monto",_d.dona_monto);fext_SV(comp,"pers_ruc",_d.pers_ruc);fext_SV(comp,"pers_nombre",_d.pers_nombre);if(_d.dona_file1!=""){fext_SV(comp,"ffiDona_file1",_d.dona_file1);fext_Dsb(comp,"#ffiDona_file1");if(_TE==2){comp.down("#btnDona_file1Delete").enable();}comp.down("#btnDona_file1Down").enable();}_strLDD.load({params:{xxDona_key:_d.dona_key},callback:function(rec,oper,succ){comp.down("#donadet_item").setValue(rec[rec.length-1].data.donadet_item);}});}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}});
		if(_TE==3){fext_Dsb(comp,"",["doc_id","dona_serie","dona_nro","dona_fecha","dona_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
lde_btnSav:function(btn,e,opt){fext_CC("log.DonaES").lde(btn.up("window"));},
lde_btnExt:function(btn,e,opt){btn.up("window").close();},
lde_btnPS:function(btn,e,opt){var _w=btn.up("window");fext_CC("pub.PersonasS");_w.setCompPPS(fext_compSearch({cc:_w,os:_w.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_w,"pers_key"),TQ:"ONLY_WITH_RUC"}));},
lde_btnAdd:function(btn,e,opt){fext_CC("log.DonaE").lde_add(btn);},
lde_btnSup:function(btn,e,opt){fext_CC("log.DonaE").lde_sup(btn);},
lde_btnDfDelClk:function(btn,e,opt){var _w=btn.up("window");btn.disable();
	_w.down("#ffiDona_file1").reset();fext_SV(_w,"","",["ffiDona_file1","dona_file1"]);_w.down("#ffiDona_file1").setRawValue("");_w.down("#ffiDona_file1").enable();btn.disable();fext_Dsb(_w,"btnDona_file1Down");
},
lde_btnDfDowClk:function(btn,e,opt){var _w=btn.up("window");var _f=_w.down("#ffiDona_file1").fileInputEl.dom.files[0];var _src="php/resources/download_file.php?xxSchema_table=logistics.donaciones&xxTable_field=dona_key&xxRecord_key="+_w.getCallKey()+"&xxTable=logistics_donaciones&xxField=file1&xxRecord_id=dona_id&xxRecord_field=dona_file1";fext_FileDown(_f,_src);},
lde_ffiDfChg:function(file,val,opt){var _w=file.up("window");fext_FileReader(file,/pdf/,"[PDF]",3145728,"3 MB",_w.down("#btnDona_file1Delete"),_w.down("#btnDona_file1Download"),false);},
lde_dmUpdate:function(poC,pnP){fext_SV(poC,"dona_monto",fext_GV(poC,"dona_monto")*1 + pnP*1);},
lde_dnBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}},
lde_dsBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),3,0));}},
lde_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(_w.getTE()==1){_w.down("#btnSuppress").enable();}}},
lde_grdAdd:function(poC,poR,poP){var _str=fext_GS(poC,"grdLDD");fext_SV(poC,"donadet_item",fext_GV(poC,"donadet_item")*1 + 1);
	_str.add({donadet_item:fext_GV(poC,"donadet_item"),bs_key:poR.data.bs_key,bs_codigo:poR.data.bs_codigo,bs_nombre:poR.data.bs_nombre,unimed_abrev:poR.data.unimed_abrev,donadet_detalle:poP["detalle"],donadet_cantid:poP["cantid"],donadet_preuni:poP["preuni"],donadet_pretot:poP["pretot"]});
	this.lde_dmUpdate(poC,poP["pretot"]);return true;
},
lde_prBlur:function(txtf,The,opt){this.lde_prS(txtf.up("window"),0);},
lde_prFocus:function(txtf,The,opt){this.lde_prS(txtf.up("window"),1);},
lde_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lde_prS(txtf.up("window"),13);}},
lde_prS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],1,["Siace.view.pub.PersonasE","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasE",poCC.getMI()],"");}
});