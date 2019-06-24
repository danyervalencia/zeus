Ext.define("Siace.controller.log.PedidosEBC",{extend:"Ext.app.Controller",stores:["array.log.TipPlaz"],views:["log.PedidosEBC"],
init:function(application){this.control({
"log_pedebc":{beforeshow:this.lpe_BS},"log_pedebc #btnSave":{click:this.lpe_btnSav},"log_pedebc #btnUndo":{click:this.lpe_btnExt},"log_pedebc #btnExit":{click:this.lpe_btnExt},
"log_pedebc #btnAdd":{click:this.lpe_btn},"log_pedebc #btnModify":{click:this.lpe_btn},"log_pedebc #btnSuppress":{click:this.lpe_btn},"log_pedebc #btnBudget":{click:this.lpe_btn},
"log_pedebc #fftr_id":{change:this.lpe_cboChg,expand:this.lpe_Expand},"log_pedebc #grdLPD":{selectionchange:this.lpe_grdSelChg},"log_pedebc #meta_id":{change:this.lpe_cboChg,expand:this.lpe_Expand},"log_pedebc #tarea_key":{change:this.lpe_cboChg,expand:this.lpe_Expand},
"log_pedebc #btnF1Del":{click:this.lpe_btnF},"log_pedebc #btnF1Dow":{click:this.lpe_btnF},"log_pedebc #ffiF1":{change:this.lpe_ffi},
"log_pedebc #btnF2Del":{click:this.lpe_btnF},"log_pedebc #btnF2Dow":{click:this.lpe_btnF},"log_pedebc #ffiF2":{change:this.lpe_ffi}
});},
lpe_BS:function(comp,opt){var _TE=comp.getTE();var _t=comp.down("#tabLP");var _cbo=comp.down("#lugentr_id");
	fextpub_tabgenFilt({obj:_t.down("#tipped_id"),tgp:5005,tge:1,AB:"NO",dsb:true});_cbo.bindStore(fext_CS("log.Lugares_EntregaCbo"));
	var _strTF=fext_CS("log.Pedidos_Tareas_FftredE");var _grdTF=_t.down("#grdLPTF");_grdTF.bindStore(_strTF);_strTF.on("beforeload",function(str,oper){str.getProxy().setExtraParam("xxType_record","frm");str.getProxy().setExtraParam("xxOrder_by","pedtareafte_item");});
	var _strDTF=fext_CS("log.Pedidos_Det_Tareas_FftredE");var _grdDTF=_t.down("#grdLPDTF");_grdDTF.bindStore(_strDTF);
	fext_CC("log.PedEBC"+(fjsLpad(_TE,2,"0"))).lpe(comp);
},
lpe_btnSav:function(btn,e,opt){fext_CC("log.PedEBCS").lpe(btn);},
lpe_btnExt:function(btn,e,opt){btn.up("window").close();},
lpe_btn:function(btn,e,opt){fext_CC("log.PedEBCB").lpe(btn,opt);},
lpe_Expand:function(cbo,opt){cbo.up("window").setF(true);},

lpe_cboChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(_w.getTE()==2&&_w.getF()){_w.setF(false);var _t=cbo.up("#tabLP");var _ii=fext_oii(cbo,"",3);fext_GSR(_w,"grdLPTF");
	if(_ii=="met"){fextbud_tareasATLoad({pan:_t,ff_tr:"YES",obj:_w.down("#fftr_id"),type:"fftr",fftr_all:1});}
	else if(_ii=="tar"){fextbud_tareas_fftredLoad({pan:_t,obj:_t.down("#fftr_id"),type:"fftr"});}
	else if(!Ext.isEmpty(newV)&&!fext_IE(_w,"tarea_key")){var _r=fext_GS(_w,"grdLPD").getRange();
		for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;fext_CC("log.PedEBC").lpe_grdTFE(_w,{tk:fext_GV(_w,"tarea_key"),ffi:fext_GV(_w,"fftr_id").substr(0,3),tri:fext_GV(_w,"fftr_id").substr(4),edi:_d.espedet_id,edc:_d.espedet_codigo,edn:_d.espedet_nombre,pretot:_d.peddet_pretot,factor:1});}
	}
}},
lpe_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){fext_SD(_w,"",false,["btnModify","btnSuppress"]);if(fext_GV(_w,"fftr_id")*1<=0){_w.down("#btnBudget").enable();}}}},
lpe_btnF:function(btn,e,opt){fext_CC("log.PedEBF").lpe(btn);},
lpe_ffi:function(filf,val,o){fext_CC("log.PedEF").lpe(filf);}
});