Ext.define("Siace.controller.log.NeasE",{extend:"Ext.app.Controller",stores:["array.Years","array.TipDocIdentNea"],views:["log.NeasE"],
init: function(application) {this.control({
"log_neae":{beforeshow:this.lne_BS},"log_neae #btnSave":{click:this.lne_btnSav},"log_neae #btnUndo":{click:this.lne_btnExt},"log_neae #btnExit":{click:this.lne_btnExt},"log_neae #btnAdd":{click:this.lne_btnAdd},"log_neae #btnSuppress":{click:this.lne_btnSup},
"log_neae #btnBMS":{click:this.lne_btnBMS},"log_neae #btnBPS":{click:this.lne_btnBPS},"log_neae #btnIndiv_search":{click:this.lne_btnIndiv_searchClick},
"log_neae #secfunc_code":{blur:this.lne_sfcBlur,focus:this.lne_sfcFocus,keypress:this.lne_sfcKP},"log_neae #grdLND":{selectionchange:this.lne_grdLNDSelChg},
"log_neae #indiv_dni":{blur:this.lne_idBlur,focus:this.lne_idFocus,keypress:this.lne_idKP},"log_neae #pers_ruc":{blur:this.lne_prBlur,focus:this.lne_prFocus,keypress:this.lne_prKP},"log_neae #proy_code":{blur:this.lne_pcBlur,focus:this.lne_pcFocus,keypress:this.lne_pcKP},
"log_neae #tipdocident_id":{change:this.lne_tipdocident_idChange},"log_neae #tipnea_id":{change:this.lne_tniChg},"log_neae #year_meta":{change:this.lne_ymChg},
});},
lne_BS:function(comp,opt){var _TE=comp.getTE();var _mi=comp.getMI();var _grd=comp.down("#grdLND");var _txtNM=comp.down("#nea_monto");var _frm=comp.down("form");var _vs=fextpub_sessVar();var _me=this;
	fextbud_fuefinFilt({pan:comp,AB:"NoT",val:""});
	if(_TE==1){
		fextlog_almaFilt({obj:comp.down("#alma_key"),TR:"cboP",TQ:"ALMA2_"+fextpub_sessVar().ua,AB:""});fextpub_tabgenFilt({obj:comp.down("#tipnea_id"),tgp:5090,val:comp.getTN(),AB:"NoT",dsb:true});fext_SV(comp,"year_meta",_vs.y*1);
		var _str=Ext.create("Siace.store.log.Neas_DetWLNE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.neadet_pretot;});_txtNM.setValue(_m);}}});
		var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("neadet_pretot",fjsRound(_r.data.neadet_cantid*_r.data.neadet_preuni,2));}}});_ce.init(_grd);
	}

	_grd.bindStore(_str);_grd.getView().refresh();_str.pageSize=1000;_str.sort("neadet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnSuppress");str.getProxy().setExtraParam("xxType_record","logistics.NeasEdit");});

	if(fjsIn_array(_TE,[1,2])){if(_TE==1){var _ico="icon_New_90";var _tit="Nueva Nota Entrada Almacén ::.";fext_SV(comp,"nea_fecha",fjsDateCurrent(""));}else if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Nota Entrada Almacen ::.";}}
	else if(fjsIn_array(_TE,[3])){var _ico="icon_Query_90";var _tit="Consulta Nota Entrada Almacén ::.";
		_frm.load({method:"POST", url:"php/logistics_neas_json_records.php",waitMsg:"Loading...",params:{xxNea_key:comp.getCK(),xxType_record:"frm",xxMenu_id:comp.getMI()},success:function(form,action){}});
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
lne_btnSav:function(btn,e,opt){fext_CC("log.NeaES").lne(btn.up("window"));},
lne_btnExt:function(btn,e,opt){btn.up("window").close();},
lne_btnAdd:function(btn,e,opt){fext_CC("log.NeaE").lne_Add(btn.up("window"));},
lne_btnSup:function(btn,e,opt){var _w=btn.up("window");var _r=fext_grdSR(_w,"grdLND");if(!_r){return false;}btn.disable();fext_GS(_w,"grdLND").remove(_r);this.lne_montoUpdate(_w,_r.data.neadet_pretot*(-1));},
lne_btnBMS:function(btn,e,opt){var _w=btn.up("window");fext_CC("bud.MetasS");_w.setCompBMS(fext_compSearch({cc:_w,os:_w.getCompBMS(),v:"Siace.view.bud.MetasS",tit:"Búsqueda de Secuencias Funcionales ::.",ck:fext_GV(_w,"meta_key"),child:"year",childval:fext_GV(_w,"year_meta")}));},
lne_btnBPS:function(btn,e,opt){var _w=btn.up("window");fext_CC("bud.ProyectosS");_w.setCompBPS(fext_compSearch({cc:_w,os:_w.getCompBPS(),v:"Siace.view.bud.ProyectosS",tit:"Búsqueda de Proyecto",ck:fext_GV(_w,"proy_key")}));},
lne_idBlur:function(txtf,The,opt){this.lne_idS(txtf.up("window"),0);},
lne_idFocus:function(txtf,The,opt){this.lne_idS(txtf.up("window"),1);},
lne_idKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lne_idS(txtf.up("window"),13);}},
lne_idS:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],1,["Siace.view.pub.IndividuosE","Nuevo Registro de Identidad ::.",["indiv_dni"],"","pub.IndividuosE",poCW.getMI()]);},
lne_prBlur:function(txtf,The,opt){this.lne_prS(txtf.up("window"),0);},
lne_prFocus:function(txtf,The,opt){this.lne_prS(txtf.up("window"),1);},
lne_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lne_prS(txtf.up("window"),13);}},
lne_prS:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],1,["Siace.view.pub.PersonasE","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasE",poCW.getMI()],"");},
lne_pcBlur:function(txtf,The,opt){this.lne_pcS(txtf.up("window"),0);},
lne_pcFocus:function(txtf,The,opt){this.lne_pcS(txtf.up("window"),1);},
lne_pcKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lne_pcS(txtf.up("window"),13);}},
lne_pcS:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["proy_key","PROY_CODE","proy_code","proy_nombre"],["php/budget_proyectos_json_records.php","xxProy_code","txt_search",""],"",["","","","","",""]);},
lne_sfcBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}this.lne_sfcS(txtf.up("window"),0);},
lne_sfcFocus:function(txtf,The,opt){this.lne_sfcS(txtf.up("window"),1);},
lne_sfcKP:function(txtf,e,opt){if(e.getCharCode()==13){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}this.lne_sfcS(txtf.up("window"),13);}},
lne_sfcS:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["meta_key","SECFUNC_CODE","secfunc_code","secfunc_nombre"],["php/budget_metas_json_records.php","xxSecfunc_code","txt_search","","xxYear_id:"+poCW.down("#year_meta").getValue()],"",["","","","","",""]);},
lne_tniChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(fjsIn_array(newV,[5091,5092,5093])){fext_SVI(_w,"",true,["cntProy","fcMeta"]);fext_SVI(_w,"cntDona",false);}else if(fjsIn_array(newV,[5094,5095])){fext_SVI(_w,"",false,["cntProy","fcMeta"]);fext_SVI(_w,"cntDona",true);}},
lne_grdLNDSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}}},
lne_grdSA1:function(poC,poD){var _str=fext_GS(poC,"grdLND");var _md=_str.findRecord("tablex_id",poD._id);var _close=false;
	if(_md==null){fext_SV(poC,"neadet_item",fext_GV(poC,"neadet_item")*1 + 1);
		_str.add({neadet_item:fext_GV(poC,"neadet_item"),tablex:poD.tablex,tablex_id:poD._id,neadet_cantid:poD.cantid,neadet_preuni:poD.preuni,neadet_pretot:poD.pretot,tablex_key:poD.key,tablex_documento:poD.documento,secfunc_code:poD.secfunc_code,fuefin_code:poD.fuefin_code,bs_key:poD.bs_key,bs_codigo:poD.bs_codigo,bs_nombre:poD.bs_nombre,unimed_abrev:poD.unimed_abrev,espedet_codigo:poD.espedet_codigo,debe_codigo:poD.debe_codigo});
		_close=true;this.lne_montoUpdate(poC,poD.pretot);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el Nota de Entrada Almacen");}
	return _close;
},
lne_montoUpdate:function(poC,pnP){fext_SV(poC,"nea_monto",fext_GV(poC,"nea_monto")*1 + pnP*1);
	var _dsb=(fext_GS(poC,"grdLND").getCount()*1>0?true:false);fext_SD(poC,"",_dsb,["fuefin_id","proy_code","btnBPS","year_meta","secfunc_code","btnBMS"]);
},
lne_ymChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(oldV!=undefined&&_w.getTE()==1&&fext_GV(_w,"secfunc_code")*1>0){this.lne_sfcS(_w,0);}},
});