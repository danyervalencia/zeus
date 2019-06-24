Ext.define("Siace.controller.pub.PersonasE",{extend:"Ext.app.Controller",views:["pub.PersonasE"],
init:function(application){this.control({
"pub_perse":{beforeshow:this.ppe_BS},"pub_perse #btnSave":{click:this.ppe_btnSav},"pub_perse #btnUndo":{click:this.ppe_btnExt},"pub_perse #btnExit":{click:this.ppe_btnExt},
"pub_perse #btnIndiv_search":{click:this.ppe_btnIS},"pub_perse #tipdocident_id":{change:this.ppe_tdiiChg},
"pub_perse #indiv_dni":{blur:this.ppe_idBlur,focus:this.ppe_idFocus,keypress:this.ppe_idKP}
});},
ppe_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");comp.down("#cntPdpd").setStores(true);fext_CC("pub.PaisDptoPrvnDstt");
	fextpub_tipdocidentFilt({obj:comp.down("#tipdocident_id"),tdiep:1,TR:"cboAP",AB:"NO",dsb:(_TE==3?true:false)});
	if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Proveedor / Cliente ::.";fext_SV(comp,"tipdocident_id",3);}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_personas_json_records.php",waitMsg:"Loading...",params:{xxPers_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("pub.PersonaE");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);fext_SV(comp,"INDIV_DNI",_dat.indiv_dni);comp.down("#cntPdpd").fireEvent("loaddata",comp.down("#cntPdpd"),(_TE==2?false:true),_dat.pais_id,_dat.dpto_id,_dat.prvn_id,_dat.dstt_id);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar datos de Proveedor / Cliente ::.";fext_SD(comp,"pers_ruc",fext_GV(comp,"tipdocident_id")==99?true:false);}
		else{var _ico="icon_Query_90";var _tit="Consulta datos de Proveedor / Cliente ::.";
			fext_Dsb(comp,"",["tipdocident_id","pers_ruc","pers_nombre","pers_nombre02","indiv_dni","btnIndiv_search","grupempr_id","pais_id","dpto_id","prvn_id","pers_domicilio","pers_mail","pers_web","pers_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();
		}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
ppe_btnSav:function(btn,e,opt){fext_CC("pub.PersES").ppe(btn);},
ppe_btnExt:function(btn,e,opt){btn.up("window").close();},
ppe_btnIS:function(btn,e,opt){fext_CC("pub.IndividuosS");var _w=btn.up("window");_w.setCompPIS(fext_compSearch({cc:_w,os:_w.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Persona ::.",ck:fext_GV(_w,"indiv_key")}));},
ppe_idBlur:function(txtf,The,opt){this.ppe_idSearch(txtf.up("window"),0);},
ppe_idFocus:function(txtf,The,opt){this.ppe_idSearch(txtf.up("window"),1);},
ppe_idKP:function(txtf,e,opt){if(e.getCharCode()==13){this.ppe_idSearch(txtf.up("window"),13);}},
ppe_idSearch:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],1,["Siace.view.pub.IndividuosE","Nuevo Registro de Identidad ::.",["indiv_dni"],"","pub.IndividuosE",poCC.getMI()]);},
ppe_tdiiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#pers_ruc").setDisabled(cbo.getValue()==99?true:false);
	var _pi=cbo.getStore().findRecord("tipdocident_id",cbo.getValue()).data["pais_id"];var _cboPI=_w.down("#pais_id");if(_pi*1>0){_cboPI.disable();_cboPI.setValue(_pi);}else{_cboPI.enable();}
}}
});