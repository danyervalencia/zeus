Ext.define("Siace.controller.log.CotizacionesE",{extend:"Ext.app.Controller",stores:["array.Mone","array.TipDocIdentVenta","array.Years","array.log.TipPlaz"],views:["log.CotizacionesE"],
init:function(application){this.control({
"log_cotie":{beforeshow:this.lce_BS},"log_cotie #btnSave":{click:this.lce_btnSav},"log_cotie #btnUndo":{click:this.lce_btnExt},"log_cotie #btnExit":{click:this.lce_btnExt},"log_cotie #btnPPS":{click:this.lce_btnPPS},
"log_cotie #ffiF1":{change:this.lce_ffiF1Chg},"log_cotie #btnF1Del":{click:this.lce_btnF1Del},"log_cotie #btnF1Dow":{click:this.lce_btnF1Dow},
"log_cotie #pers_ruc":{blur:this.lce_pers_rucBlur,focus:this.lce_pers_rucFocus,keypress:this.lce_pers_rucKeypress}
});},
lce_BS:function(comp,opt){fext_CC("log.CotiE0"+comp.getTE()).lce(comp);},
lce_btnSav:function(btn,e,opt){fext_CC("log.CotiES").lce(btn);},
lce_btnExt:function(btn,e,opt){btn.up("window").close();},
lce_btnPPS:function(btn,e,opt){var _w=btn.up("window");fext_CC("pub.PersonasS");_w.setCompPPS(fext_compSearch({cc:_w.down("#cntPers"),os:_w.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_w,"pers_key"),TQ:"ONLY_WITH_RUC"}));},
lce_ffiF1Chg:function(file,val,opt){var _w=file.up("window");fext_FileReader(file,/pdf/,"[PDF]",10485760,"10 MB",_w.down("#btnF1Del"),_w.down("#btnF1Dow"),false);},
lce_btnF1Del:function(btn,e,opt){var _w=btn.up("window");btn.disable();var _fi=_w.down("#ffiF1");_fi.reset();_fi.setValue("");_fi.setRawValue("");_fi.setReadOnly(false);fext_SV(_w,"coti_file1","");btn.disable();fext_Dsb(_w,"#btnF1Dow");},
lce_btnF1Dow:function(btn,e,opt){var _w=btn.up("window");var _file=_w.down("#ffiF1").fileInputEl.dom.files[0];var _src="php/resources/download_file.php?xxTable=logistics_cotizaciones&xxField=file1&xxFile_name="+_w.getCK()+"_"+fext_GV(_w,"coti_file1");fext_FileDown(_file,_src);},
lce_pers_rucBlur:function(txtf,The,opt){this.lce_pers_rucSearch(txtf.up("window"),0);},
lce_pers_rucFocus:function(txtf,The,opt){this.lce_pers_rucSearch(txtf.up("window"),1);},
lce_pers_rucKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.lce_pers_rucSearch(txtf.up("window"),13);}},
lce_pers_rucSearch:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"1",["Siace.view.pub.PersonasE","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasE",poCC.getMI()],"");}
});