Ext.define("Siace.controller.log.OrdenesEB",{extend:"Ext.app.Controller",stores:["array.DocOrden"],views:["log.OrdenesEB"],
init:function(application){this.control({
"log_ordeneb":{beforeshow:this.loeb_BeforeShow},"log_ordeneb #btnSave":{click:this.loeb_btnSaveClick},"log_ordeneb #btnUndo":{click:this.loeb_btnUndoClick},"log_ordeneb #btnExit":{click:this.loeb_btnExitClick},"log_ordeneb #btnPers_search":{click:this.loeb_btnPers_searchClick},
"log_ordeneb #area_key":{change:this.loeb_area_keyChange},"log_ordeneb #meta_id":{change:this.loeb_meta_idChange},"log_ordeneb #pers_ruc":{blur:this.loeb_pers_rucBlur,focus:this.loeb_pers_rucFocus,keypress:this.loeb_pers_rucKeypress}
});},
loeb_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _vs=fextpub_sessVar();fext_SV(comp,"orden_fecha",fjsDateCurrent(""));
	fextpub_areasFilt({obj:comp.down("#area_key"),ak:"",TR:"cbo",nuk:"NoT"});fextbud_metasParam({pan:comp,TR:"cboCN",AB:"NO"});fextbud_tareasParam({pan:comp,TR:"cboCN",OB:"tarea_codename",AB:"NO"});
	comp.setIconCls("icon_Documents_90");comp.setTitle("Aregar Orden en Blanco ::.");
},
loeb_Show:function(comp,opt){},
loeb_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save, function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_save_blank.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_TE,xxMenu_id:_w.getMI(),xxOrden_fecha:_w.down("#orden_fecha").getSubmitValue(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("log.OrdenesOK");var _wF=fext_CW("log.OrdenesOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else{if(_w.getCS()!==null){_w.getCS().load();}_w.close();}}else{fext_MsgE(_res.msg); }},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
loeb_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
loeb_btnExitClick:function(btn,e,opt){btn.up("window").close();},
loeb_btnPers_searchClick:function(btn,e,opt){var _w=btn.up("window");fext_CC("pub.PersonasS");_w.setCompPPS(fext_compSearch({cc:_w,os:_w.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_w,"pers_key"),TQ:"ONLY_WITH_RUC"}));},
loeb_area_keyChange:function(cbo,newVal,oldVal,opt){fextbud_metasLoad({pan:cbo.up("window")});},
loeb_meta_idChange:function(cbo,newVal,oldVal,opt){fextbud_tareasLoad({pan:cbo.up("window")});},
loeb_pers_rucBlur:function(txtf,The,opt){this.loeb_pers_rucSearch(txtf.up("window"),0);},
loeb_pers_rucFocus:function(txtf,The,opt){this.loeb_pers_rucSearch(txtf.up("window"),1);},
loeb_pers_rucKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.loeb_pers_rucSearch(txtf.up("window"),13);}},
loeb_pers_rucSearch:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"1",["Siace.view.pub.PersonasE","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasE",poCC.getMI()],"");}
});