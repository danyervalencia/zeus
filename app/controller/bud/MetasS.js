Ext.define("Siace.controller.bud.MetasS",{extend:"Ext.app.Controller",views:["bud.MetasS"],
init:function(application){this.control({
"bud_metas":{beforerender:this.bms_BR},"bud_metas #btnAccept":{click:this.bms_btnAcc},"bud_metas #btnCancel":{click:this.bms_btnCan},
"bud_metas #grdBM":{itemdblclick:this.bms_grdItemDblclk,selectionchange:this.bms_grdSelChg},
"bud_metas #year_id":{change:this.bms_Chg},"bud_metas #secfunc_code":{change:this.bms_Chg,keypress:this.bms_KP},"bud_metas #secfunc_nombre":{change:this.bms_Chg,keypress:this.bms_KP}
});},
bms_BR:function(comp,opt){fext_Dsb(comp,"btnAccept");fextpub_yearFilt({obj:comp.down("#year_id"),TQ:"all_estado",val:fext_GV(comp,"year")});
	var _str=fext_CS("bud.MetasS");fext_BSGP(comp,_str);_str.sort("secfunc_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxYear_id","xxSecfunc_code","xxSecfunc_nombre","xxType_record","xxPag"],["","","","grdSearch",1],comp,["year_id","secfunc_code","secfunc_nombre","",""]);});
},
bms_Chg:function(txtf,newVal,oldVal,opt){this.bms_Clean(txtf.up("window"));},
bms_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
bms_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
bms_btnAcc:function(btn,e,opt){var _w=btn.up("window");var _r=fext_grdSR(_w,"");if(_r&&_r.data.meta_key!=_w.getCK()){var _cc=_w.getCC();
	if(_cc!=null){var _d=_r.data;fext_SV(_cc,"meta_key",_d.meta_key);if(_cc.down("#SECFUNC_CODE")){fext_SV(_cc,"SECFUNC_CODE",_d.sefunc_code);}if(_cc.down("#year_meta")){fext_SV(_cc,"year_meta",fext_GV(_w,"year_id"));}fext_SV(_cc,"secfunc_code",_d.secfunc_code);fext_SV(_cc,"secfunc_nombre",_d.secfunc_nombre);}
	_w.close();if(_w.getAD()){_w.destroy();}
}},
bms_btnCan:function(btn,e,opt){var _w=btn.up("window");_w.close();if(_w.getAD()){_w.destroy();}},
bms_grdItemDblclk:function(comp,r,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
bms_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.secfunc_code==_w.getCK()?true:false);}},
});