Ext.define("Siace.controller.bud.NotasE",{extend:"Ext.app.Controller",stores:["array.bud.TipNotaDet"],views:["bud.NotasE"],
init:function(application){this.control({
"bud_notae":{beforeshow:this.bne_BS,show:this.bne_S},"bud_notae #btnSave":{click:this.bne_btnSav},"bud_notae #btnUndo":{click:this.bne_btnExt},"bud_notae #btnExit":{click:this.bne_btnExt},
"bud_notae #btnEgr":{click:this.bne_btnEgr},"bud_notae #btnIng":{click:this.bne_btnIng},"bud_notae #btnSuppress":{click:this.bne_btnSup},
"bud_notae #fftr_id":{change:this.bne_ftiChg},"bud_notae #grdBNTF":{selectionchange:this.bne_grdBNTFSelChg},
"bud_notae #meta_id":{change:this.bne_meiChg},"bud_notae #tarea_key":{change:this.bne_tkChg},"bud_notae #tipnota_id":{change:this.bne_tniChg}
});},
bne_BS:function(comp,opt){var _mi=comp.getMI();var _TE=comp.getTE();if(!fjsIn_array(_mi,[2105,5138])){return false;}
	fextpub_tabgenFilt({obj:comp.down("#tipnota_id"),tgp:2010,tge:(_mi==5138?2:""),AB:"NO",val:(_TE==1&&_mi==5138?2013:""),dsb:(_TE==3?true:false)});
	if(_TE==1){fext_CC("bud.NotaE01").bne(comp);}else if(_TE==2){fext_CC("bud.NotaE02").bne(comp);}
},
bne_S:function(comp,opt){comp.getFFFTR(true);},
bne_btnSav:function(btn,e,o){fext_CC("bud.NotaES").bne(btn.up("window"));},
bne_btnExt:function(btn,e,o){btn.up("window").close();},
bne_btnEgr:function(btn,e,o){fext_CC("bud.NotaEE").bne(btn);},
bne_btnIng:function(btn,e,o){fext_CC("bud.NotaEI").bne(btn);},
bne_btnSup:function(btn,e,o){fext_CC("bud.NotaE").bne_supr(btn);},
bne_ftiChg:function(cbo,newV,oldV,o){cbo.up("window").setFE(true);cbo.up("window").setFI(true);},
bne_grdBNTFSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();if(fjsIn_array(fext_GV(_w,"tipnota_id"),[2013,2018])){fext_SD(_w,"btnIng",r[0].data.tipnotadet_id==2041?false:true);_w.setFI(true);}}}},
bne_meiChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");_w.setFE(true);_w.setFI(true);if(fjsIn_array(_w.getTE(),[1,2])&&_w.getFFFTR()){if(_w.getMI()==2105){fextbud_tareasLoad({pan:_w,fftr:"YES",obj:_w.down("#fftr_id"),fftr_all:"YES",type:"fftr"});}else{fextbud_tareasATLoad({pan:_w});}}},
bne_tkChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");_w.setFE(true);_w.setFI(true);if(_w.getFFFTR()){fextbud_tareas_fftredLoad({pan:_w,obj:_w.down("#fftr_id"),type:(_w.getMI()==2105?"fftr":""),fftr_all:(_w.getMI()==2105?"YES":""),setVal:false});}},
bne_tniChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");var _tn=fext_GV(_w,"tipnota_id");if(fjsIn_array(_w.getTE(),[1,2])){if(fjsIn_array(_tn,[2013,2018])){_w.down("#btnEgr").enable();fext_Dsb(_w,"btnIng");}else{fext_Dsb(_w,"",["btnEgr","btnIng"]);}}}
});