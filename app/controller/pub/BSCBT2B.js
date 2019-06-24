Ext.define("Siace.controller.pub.BSCBT2B",{extend:"Ext.app.Controller",
pbscb:function(btn){var _t=btn.up("#tabM");var _TE=fext_btnTE(btn);var _pan=_t.up("pub_bscb").down("#panC");
	if(_TE=="Del"){ext_CC("pub.BSCMarcBD").pbscm({comp:btn.up("#tabM"),TE:7});}else{var _r=fext_grdSR(_pan,"");if(!_r){return false;}fext_CC("pub.BSCMarc").pbscm_View({comp:_t,TE:_TE,bsc_id:_r.data.bsc_id});}
}
});