Ext.define("Siace.controller.log.SalidasE",{extend:"Ext.app.Controller",stores:["array.DocProcPecAB","array.Years"],views:["log.SalidasE"],
init:function(application){this.control({
"log_sale":{beforeshow:this.lse_BS},"log_sale #btnSave":{click:this.lse_btnSav},"log_sale #btnUndo":{click:this.lse_btnExt},"log_sale #btnExit":{click:this.lse_btnExt},"log_sale #btnSuppress":{click:this.lse_btn},"log_sale #btnRTS":{click:this.lse_btn},
"log_sale #area_key":{change:this.lse_akChg},"log_sale #meta_id":{change:this.lse_meiChg},"log_sale #tablex_doc":{change:this.lse_txdChg},"log_sale #tablex_nro":{blur:this.lse_txnBlur,focus:this.lse_txnFocus,keypress:this.lse_txnKP},"log_sale #tablex_year":{change:this.lse_txyChg},"log_sale #tabDetalle #grdLSD":{selectionchange:this.lse_td_grdSelChg}
});},
lse_BS:function(comp,opt){var _mi=comp.getMI();var _vs=fextpub_sessVar();
	fextpub_yearsValue(comp.down("#tablex_year"),fextpub_sessVar().y);
	if(_mi==5132){fextbud_metasParam({pan:comp,TR:"cboCN"});fextbud_tareasParam({pan:comp,TR:"cboCN"});}
	else if(_mi==5135){fextbud_tareasAMParam({pan:comp,TR:"cboCN",di:531,dt:"U1",de:1});fextbud_tareasATParam({pan:comp,TR:"cboCN",di:531,dt:"U1",de:1});}else{return false;}
	fext_CC("log.SalE0"+comp.getTE()).lse(comp);
},
lse_btn:function(btn,e,o){fext_CC("log.SalEB").lse(btn);},
lse_btnSav:function(btn,e,opt){fext_CC("log.SalES").lse(btn);},
lse_btnExt:function(btn,e,opt){btn.up("window").close();},

lse_akChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(oldV==undefined||_w.getMI()==5135||!_w.getFiltAMT()){return false;}fextbud_metasLoad({pan:_w});},
lse_meiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(oldV==undefined||!_w.getFiltAMT()){return false;}fextbud_tareasLoad({pan:_w});},

lse_txS:function(po){fext_CC("log.SalETXS").lse(po);},
lse_txdChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==1){
	if(newV==516){_w.setFiltAMT(false);_w.down("#tablex_nro").enable();fext_Dsb(_w,"",["area_key","meta_id","tarea_key"]);}else{_w.setFiltAMT(true);fext_Dsb(_w,"tablex_nro");fext_SD(_w,"area_key",_w.getMI()==5132?false:true);fext_SD(_w,"",false,["meta_id","tarea_key"]);fext_SV(_w,"tablex_nro","");}
	if(oldV!==undefined&&newV==516){fext_CC("log.SalETXC").lse(_w);}
}},

lse_txnBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}if(txtf.getValue()*1!=txtf.up("window").down("#TABLEX_NRO").getValue()*1){this.lse_txS(txtf);}},
lse_txnFocus:function(txtf,The,opt){fext_SV(txtf.up("window"),"TABLEX_NRO",txtf.getValue());},
lse_txnKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lse_txS(txtf);}},
lse_txyChg:function(cbo,newV,oldV,opt){if(oldV!==undefined){this.lse_txS(cbo);}},
lse_td_grdSelChg:function(mod,rec,opt){var _w=mod.view.panel.up("window");if(rec.length==1&&_w.getTE()==1){_w.down("#btnSuppress").enable();}},
});