Ext.define("Siace.controller.pub.PersBT4",{extend:"Ext.app.Controller",
ppb_btn:function(btn){var _t=btn.up("#tabLC");_TE=fext_btnTE(btn);
	if(_TE==8){fext_CC("log.Cotizaciones").lc_Printer({comp:_t})}else{fext_CC("log.Cotizaciones").lc_View({comp:_t,TE:3,oi:3});}},
ppb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLC");var _fg=r[0].data.coti_flga==98?true:"";fext_SDO(_t,"btnQuery","",3,_fg);fext_SDO(_t,"btnPrinter","",8,_fg);}}
});