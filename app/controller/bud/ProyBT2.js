Ext.define("Siace.controller.bud.ProyBT2",{extend:"Ext.app.Controller",
bpb_btn:function(btn){var _t=btn.up("#tabD");_TE=fext_btnTE(btn);if(_TE==8){fext_CC("log.Ordenes").lo_Printer({comp:_t,grd:"grdD"});}else if(_TE=="Fas"){fext_CC("log.Ordenes").lo_Fases({comp:_t});}},
bpb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabD");var _pan=_t.up("bud_proyb");var _en=r[0].data.expe_nro;fext_SDO(_t,"btnPrinter","",8);fext_SDO(_t,"btnFases","",5029,_en*1<=0?true:"");
Ext.Ajax.request({method:"POST",url:"php/budget_liquidaciones_json_records.php",params:{xxTablex:r[0].data.tablex,xxKey:r[0].data._key,xxType_record:"win",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("bud.LiquidacionW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);fext_LR(_pan,_md,"tabDD");}}});
}},
});