Ext.define("Siace.controller.log.Buena_Pro_DetE",{extend:"Ext.app.Controller",views:["log.Buena_Pro_DetE"],
init:function(application){this.control({
"log_bpdete":{beforeshow:this.lbpde_BS},"log_bpdete #btnSave":{click:this.lbpde_btnSav},"log_bpdete #btnUndo":{click:this.lbpde_btnExt},
});},
lbpde_BS:function(comp,opt){var _str=fext_CS("bud.Tareas_FftredEspedet");var _cbo=comp.down("#espedet_id");_cbo.bindStore(_str);_str.pageSize=500;
	_cbo.getStore().load({params:{xxTarea_key:fext_GV(comp,"tarea_key"),xxFuefin_id:fext_GV(comp,"fuefin_id"),xxTiprecur_id:fext_GV(comp,"tiprecur_id"),xxTipped_id:(fext_GV(comp,"bs_codigo").substr(0,1)=="B"?5006:5007),ssNO_USK:"NoT",xxType_record:"ESPEDET_CHANGE",xxType_query:fext_GV(comp,"espedet")}});
},
lbpde_btnSav:function(btn,e,opt){var _w=btn.up("window");
	if(fext_IE(_w,"espedet_id")){fext_MsgA("Debe indicar el Clasificador Presupuestal");return false;}
	fext_CC("log.Buena_ProE").lbpe_grdLBPTFChgED(_w.getCC(),{espedet_id:fext_GV(_w,"espedet_id"),espedet_codigo:fext_GRV(_w,"espedet_id").substr(0,15),espedet_nombre:fext_GRV(_w,"espedet_id").substr(16)});_w.close();
},
lbpde_btnExt:function(btn,e,opt){btn.up("window").close();}
});