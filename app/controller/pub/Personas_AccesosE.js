Ext.define("Siace.controller.pub.Personas_AccesosE",{extend:"Ext.app.Controller",views:["pub.Personas_AccesosE"],
init:function(application){this.control({
"pub_persaccee":{beforeshow:this.ppae_BeforeShow},"pub_persaccee #btnSave":{click:this.ppae_btnSaveClick},"pub_persaccee #btnUndo":{click:this.ppae_btnUndoClick},"pub_persaccee #btnExit":{click:this.ppae_btnExitClick},
"pub_persaccee #btnIndiv_search":{click:this.ppae_btnIndiv_searchClick},"pub_persaccee #indiv_dni":{blur:this.ppae_indiv_dniBlur,focus:this.ppae_indiv_dniFocus,keypress:this.ppae_indiv_dniKeypress},
});},
ppae_BeforeShow:function(comp,opt){var _TE=comp.getTE();
	if(_TE==1){var _ico="icon_User_add_90";var _tit="Registro de Clave a Proveedor ::.";fext_SV(comp,"persacce_fecha",fjsDateCurrent(""));}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
ppae_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(!_w.down("#persacce_fecha").isValid()||fext_IE(_w,"persacce_fecha")){fext_MsgA("No se ha establecido la fecha",_w.down("#persacce_fecha"));return false;}
	if(fext_IE(_w,"clav_id")){fext_MsgA("Debe indicar el CODIGO de acceso",_frm.down("#clav_id"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/public_personas_accesos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPersacce_fecha:_w.down("#persacce_fecha").getSubmitValue(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
ppae_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
ppae_btnExitClick:function(btn,e,opt){btn.up("window").close();},
ppae_btnIndiv_searchClick:function(btn,e,opt){fext_CC("pub.IndividuosS");var _w=btn.up("window");_w.setCompPIS(fext_compSearch({cc:_w,os:_w.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Persona ::.",ck:fext_GV(_w,"indiv_key")}));},
ppae_indiv_dniBlur:function(txtf,The,opt){this.ppae_indiv_dniSearch(0,txtf.up("window"));},
ppae_indiv_dniFocus:function(txtf,The,opt){this.ppae_indiv_dniSearch(1,txtf.up("window"));},
ppae_indiv_dniKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.ppae_indiv_dniSearch(13,txtf.up("window"));}},
ppae_indiv_dniSearch:function(pcType,poCW){fext_fieldSearch(pcType,poCW,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],"1",["Siace.view.pub.IndividuosE","Nueva Persona ::.",["indiv_dni"],"","pub.IndividuosE",poCW.getMI()],"");}
});