Ext.define("Siace.controller.log.PlanillasE",{extend:"Ext.app.Controller",views:["log.PlanillasE"],
init:function(application){this.control({
"log_plane":{beforeshow:this.lpe_BS},"log_plane #btnSave":{click:this.lpe_btnSav},"log_plane #btnUndo":{click:this.lpe_btn},"log_plane #btnCertif":{click:this.lpe_btn},"log_plane #btnExit":{click:this.lpe_btn},
"log_plane #btnPPS":{click:this.lpe_btn},"log_plane #btnAdd":{click:this.lpe_btn},"log_plane #btnSuppress":{click:this.lpe_btn},
"log_plane #grdLPP":{selectionchange:this.lpe_grdLPPSelChg},
});},
lpe_BS:function(comp,opt){var _TE=comp.getTE();if(!fjsIn_array(comp.getMI(),[5184])){return false;}
	fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fuefin_id"),TR:"FF",type:"fuefin",nuk:"NoT"});
	fext_CC("log.PlanE"+_TE).lpe(comp);
},
lpe_btn:function(btn,e,o){fext_CC("log.PlanEB").lpe(btn);},
lpe_btnSav:function(btn,e,o){fext_CC("log.PlanES").lpe(btn);},
lpe_grdLPPSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}}},
});