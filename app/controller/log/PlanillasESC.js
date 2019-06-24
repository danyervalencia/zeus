Ext.define("Siace.controller.log.PlanillasESC",{extend:"Ext.app.Controller",views:["log.PlanillasESC"],
init:function(application){this.control({
"log_planesc":{beforeshow:this.lpesc_BS},"log_planesc #btnAccept":{click:this.lpesc_btn},"log_planesc #btnCancel":{click:this.lpesc_btnExt},
"log_planesc #grdLC":{select:this.lpesc_grdSel,deselect:this.lpesc_grdDeSel},
});},
lpesc_BS:function(comp,opt){var _vs=fextpub_sessVar();
	var _str=fext_CS("log.ComprasLPES");fext_BSG(comp,_str);_str.sort("comp_fecha","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_SV(comp,"monto",0);fext_PSEP(str,["xxYear_id","xxTiporden_id","xxFuefin_id","xxPers_key","xxType_record","vs","xxPag"],[comp.getYI(),"","","","grdLPES",fext_JE(_vs),1],comp,["","tiporden_id","fuefin_id","pers_key","","",""]);});_str.load();
},
lpesc_btn:function(btn,e,o){fext_CC("log.PlanESCB").lpe(btn);},
lpesc_btnExt:function(btn,e,opt){btn.up("window").close();},
lpesc_grdSel:function(comp,r,index,o){var _o=comp.view.up("window").down("#monto");_o.setValue(_o.getValue()*1 + r.data.comp_monto*1);},
lpesc_grdDeSel:function(comp,r,index,o){var _o=comp.view.up("window").down("#monto");_o.setValue(_o.getValue()*1 - r.data.comp_monto*1);},

});