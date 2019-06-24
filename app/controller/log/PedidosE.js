Ext.define("Siace.controller.log.PedidosE",{extend:"Ext.app.Controller",stores:["array.log.TipPlaz"],views:["log.PedidosE"],
init:function(application){this.control({
"log_pede":{beforeshow:this.lpe_BS,show:this.lpe_S},"log_pede #btnSave":{click:this.lpe_btnSav},"log_pede #btnUndo":{click:this.lpe_btnExt},"log_pede #btnExit":{click:this.lpe_btnExt},"log_pede #btnAdd":{click:this.lpe_btnAdd},"log_pede #btnSuppress":{click:this.lpe_btnSup},
"log_pede #tabLP #area_key":{expand:this.lpe_Expand},"log_pede #grdLPD":{selectionchange:this.lpe_grdLPDSelChg},
"log_pede #tabLP #meta_id":{change:this.lpe_meiChg,expand:this.lpe_Expand},"log_pede #tabLP #tarea_key":{change:this.lpe_tkChg,expand:this.lpe_Expand},
"log_pede #btnF1Del":{click:this.lpe_btnF},"log_pede #btnF1Dow":{click:this.lpe_btnF},"log_pede #ffiF1":{change:this.lpe_ffi},
"log_pede #btnF2Del":{click:this.lpe_btnF},"log_pede #btnF2Dow":{click:this.lpe_btnF},"log_pede #ffiF2":{change:this.lpe_ffi}
});},
lpe_BS:function(comp,opt){var _TE=comp.getTE();var _mi=comp.getMI();var _t0=comp.down("#tabLP");
	fextpub_tabgenFilt({obj:_t0.down("#tipped_id"),tgp:5005,tge:1,AB:"NO",dsb:(_TE==1?false:true)});
	fextbud_tareas_fftredParam({pan:_t0,obj:_t0.down("#fftr_id"),nuk:(fjsLpad(_mi,[5102,5137])?"NoT":""),TQ:"FF_TR",OB:"fftr_codename"});
	var _strLPTF=fext_CS("log.Pedidos_Tareas_FftredE");var _grdLPTF=_t0.down("#grdLPTF");_grdLPTF.bindStore(_strLPTF);
	_strLPTF.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxType_record","xxOrder_by"],["frm","pedtareafte_item"]);});
	_TE=(_TE==23?3:_TE);fext_CC("log.PedE"+(fjsLpad(_TE,2,"0"))).lpe(comp);
},
lpe_S:function(comp,opt){},
lpe_btnSav:function(btn,e,opt){fext_CC("log.PedES").lpe(btn);},
lpe_btnExt:function(btn,e,opt){btn.up("window").close();},
lpe_btnAdd:function(btn,e,opt){fext_CC("log.PedEBA").lpe(btn);},
lpe_btnSup:function(btn,e,opt){fext_CC("log.PedEBS").lpe(btn);},
lpe_Expand:function(cbo,opt){cbo.up("window").setF(true);},
lpe_grdLPDSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}}},
lpe_meiChg:function(cbo,newV,old,o){var _w=cbo.up("window");if(fjsIn_array(_w.getTE(),[1,2,12])&&_w.getF()){_w.setF(false);if(_w.getMI()==5137){fextbud_tareasLoad({pan:cbo.up("panel")});}else{fextbud_tareasATLoad({pan:cbo.up("panel"),ff_tr:"YES",obj:_w.down("#fftr_id"),type:"fftr",fftr_all:1});}}},
lpe_tkChg:function(cbo,newV,old,o){var _w=cbo.up("window");if(_w.getF()){_w.setF(false);var _t=cbo.up("#tabLP");fextbud_tareas_fftredLoad({pan:_t,obj:_t.down("#fftr_id"),setVal:false});}},
lpe_btnF:function(btn,e,opt){fext_CC("log.PedEBF").lpe(btn);},
lpe_ffi:function(filf,val,o){fext_CC("log.PedEF").lpe(filf);},
});