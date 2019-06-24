Ext.define("Siace.controller.log.ComprasE14",{extend:"Ext.app.Controller",stores:["array.DocCompr14"],views:["log.ComprasE14"],	
init:function(application){this.control({
"log_compre14":{beforeshow:this.lce_BS},"log_compre14 #btnSave":{click:this.lce_btnSav},"log_compre14 #btnUndo":{click:this.lce_btnExt},"log_compre14 #btnExit":{click:this.lce_btnExt},
"log_compre14 #btnAdd":{click:this.lce_btnAdd},"log_compre14 #btnSuppress":{click:this.lce_btnSuppressClick},"log_compre14 #btnPPS":{click:this.lce_btnPPS},
"log_compre14 #fuefin_id":{change:this.bce_ffiChg},
"log_compre14 #grdLVD":{selectionchange:this.lce_grdLVDSelectionChange},
"log_compre14 #pers_ruc":{blur:this.lce_prBlur,focus:this.lce_prFocus,keypress:this.lce_prKP}
});},
lce_BS:function(comp,opt){var _TE=comp.getTE();fext_BS(comp,"tiporden_id","log.Tipos_OrdenesLCE14");
	fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fuefin_id"),TR:"FF",type:"fuefin",nuk:"NoT"});fextbud_tareas_fftredLoad({pan:comp,obj:comp.down("#fuefin_id"),type:"fuefin",fftr_all:1});
	fext_CC("log.CompE14"+fjsLpad(_TE,2,"0")).lce(comp);
},
lce_btnSav:function(btn,e,opt){fext_CC("log.CompE14S").lce(btn);},
lce_btnExt:function(btn,e,o){btn.up("window").close();},
lce_btnPPS:function(btn,e,o){fext_CC("log.CompE14").lce_pps(btn);},
	
lce_btnAdd:function(btn,e,o){fext_CC("log.CompE14BA").lce(btn);},
bce_ffiChg:function(cbo,newV,oldV,o){cbo.up("window").setF(true);},

lce_prBlur:function(txtf,The,o){this.lce_prS(txtf.up("window"),0);},
lce_prFocus:function(txtf,The,o){this.lce_prS(txtf.up("window"),1);},
lce_prKP:function(txtf,e,o){if(e.getCharCode()==13){this.lce_prS(txtf.up("window"),13);}},
lce_prS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],1,["Siace.view.pub.PersonasE","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasE",poCC.getMI()],"");}

//lce_btnSuppressClick:function(btn,e,opt){var _win=btn.up("window");var _rec=fext_grdSR(_win.down("#grdLVD"));if(_rec){btn.disable();_win.down("#grdLVD").getStore().remove(_rec);this.lce_viat_montoUpdate(_win,_rec.data.viatdet_pretot*(-1));}},
//lce_grdLVDSelectionChange:function(mod,rec,opt){if(rec.length!=1){return false;}var _win=mod.view.panel.up("window");if(fjsIn_array(_win.getTypeEdit(),[1,2])&&rec[0].data.viatdet_item!=1){_win.down("#btnSuppress").enable();}},
});