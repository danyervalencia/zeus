Ext.define("Siace.controller.log.IngresosE",{extend:"Ext.app.Controller",stores:["array.DocOrden","array.Years"],views:["log.IngresosE"],
init:function(application){this.control({
"log_inge":{beforeshow:this.lie_BS},"log_inge #btnSave":{click:this.lie_btnSav},"log_inge #btnUndo":{click:this.lie_btnExt},"log_inge #btnExit":{click:this.lie_btnExt},"log_inge #btnSuppress":{click:this.lie_btnSup},
"log_inge #ing_nro":{blur:this.lie_inBlur},"log_inge #ing_serie":{blur:this.lie_isBlur},"log_inge #tablex_doc":{change:this.lie_txdChg},"log_inge #tablex_nro":{blur:this.lie_txnBlur,focus:this.lie_txnFocus,keypress:this.lie_txnKP},"log_inge #tablex_year":{change:this.lie_txyChg},"log_inge #tabDetalle #grdLID":{selectionchange:this.lie_td_grdSelChg}
});},
lie_BS:function(comp,opt){var _mi=comp.getMI();var _TE=comp.getTE();fextpub_yearsValue(comp.down("#tablex_year"),fextpub_sessVar().y);
	if(_mi==5122){fext_removeAddCls(comp.down("#alma_key"),"myDisabledClass","x-item-disabled");}else if(_mi==5124){fext_Dsb(comp,"tablex_doc");fext_SV(comp,"tablex_doc",517);}else if(_mi==5125){fext_Dsb(comp,"tablex_doc");fext_SV(comp,"tablex_doc",516);}else{return false;}
	fext_BS(comp,"area_key","pub.AreasCbo");fext_BS(comp,"meta_id","bud.MetasCbo");fext_BS(comp,"tarea_key","bud.TareasCbo");fext_BS(comp,"fftr_id","bud.Tareas_FftredCbo");
	fext_CC("log.IngE0"+_TE).lie(comp);
},
lie_btnSav:function(btn,e,opt){fext_CC("log.IngES").lie(btn);},
lie_btnExt:function(btn,e,opt){btn.up("window").close();},
lie_btnSup:function(btn,e,opt){fext_CC("log.IngE").lie_sup(btn);},
lie_inBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}},
lie_isBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),3,0));}},
lie_txSearch:function(poC,pcA){fext_CC("log.IngE").lie_TS(poC,pcA);},
lie_txdChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");fextpub_docFilt({obj:_w.down("#doc_id"),TQ:(newV==516?"RECEPCION_B":"RECEPCION_S"),AB:"NO",dsb:(_w.getTE()==3?true:false)});
	if(newV==516){fext_removeAddCls(_w.down("#alma_key"),"x-item-disabled","myDisabledClass");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#alma_key").enable()}}
	else{fext_removeAddCls(_w.down("#alma_key"),"myDisabledClass","x-item-disabled");_w.down("#alma_key").setValue("");fext_Dsb(_w,"alma_key");}
	if(oldV!=undefined){this.lie_txSearch(_w,"");}
},
lie_txnBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}if(txtf.getValue()*1!=fext_GV(txtf.up("window"),"TABLEX_NRO")*1){this.lie_txSearch(txtf.up("window"),"");}},
lie_txnFocus:function(txtf,The,opt){fext_SV(txtf.up("window"),"TABLEX_NRO",txtf.getValue());},
lie_txnKP:function(txtf,e,opt){if(e.getCharCode()==13){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}fext_SV(txtf.up("window"),"TABLEX_NRO",txtf.getValue());this.lie_txSearch(txtf.up("window"),"");}},
lie_txyChg:function(cbo,newV,oldV,o){if(oldV!=undefined){this.lie_txSearch(cbo.up("window"),"");}},
lie_td_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}}},
});