Ext.define("Siace.controller.log.Viaticos_DetE",{extend:"Ext.app.Controller",views:["log.Viaticos_DetE"],
init:function(application){this.control({
"log_viatdete":{beforeshow:this.lvde_BS},"log_viatdete #btnSave":{click:this.lvde_btn},"log_viatdete #btnUndo":{click:this.lvde_btn},"log_viatdete #btnExit":{click:this.lvde_btn},
"log_viatdete #bs_key":{change:this.lvde_ChgCbo}
});},
lvde_BS:function(comp,opt){var _TE=comp.getTE();var _frmV=comp.down("#panLV").down("form");var _vs=fextpub_sessVar();var _bsk=comp.down("#bs_key");
	var _str=fext_CS("pub.Bienes_Servs_Especificas_DetBalances");var _cbo=comp.down("#espedet_id");_cbo.bindStore(_str);
	_str.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxBs_key","xxBst_id","xxTarea_key","xxFuefin_id","xxTiprecur_id","xxBsespedet_estado","xxType_record"],["",2,comp.getTK(),comp.getFFI(),comp.getTRI(),1,"cbo"],comp,["bs_key","","","","","",""]);});
	_bsk.bindStore(fext_CS("log.Viaticos_ServsCbo"));_bsk.getStore().load({params:{xxType_record:"cbo"},callback:function(r){if(r.length>0){if(comp.getBSK()!=""){_bsk.setValue(comp.getBSK());_bsk.disable();}}}});
	if(_TE==13){var _ico="icon_Add_90";var _tit="Agregar Servicio en Solicitud de Viático ::.";}else{var _ico="icon_Modify_90";var _tit="Editar Detalle en Solicitud de Viático ::.";}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
lvde_btn:function(btn,e,o){fext_CC("log.ViatDetES").lvde(btn);},
lvde_ChgCbo:function(txtf,newV,oldV,o){var _w=txtf.up("window");fext_GSR(_w,"espedet_id");fext_GS(_w,"espedet_id").load({callback:function(r){if(_w.getEDI()*1>0){fext_SV(_w,"espedet_id",_w.getEDI());}}});}
});