Ext.define("Siace.controller.pub.UsurBT1B",{extend:"Ext.app.Controller",
pub:function(btn){var _t=btn.up("#tabPUA");var _TE=fext_btnTE(btn);
	if(_TE=="Tar"){fext_CC("bud.TareaUsurAcce").btua_Brow({comp:_t,grd:"grdPUA"});}else if(_TE=="Men"){fext_CC("pub.UsurAcce").pua_Menu({comp:_t});}else if(_TE=="Con"){fext_CC("pub.UsurAcce").pua_Constancy({comp:_t});}
	else{fext_CC("pub.UsurAcce").pua_View({comp:_t,TE:_TE,uk:fext_grdSR(_t.up("pub_usurb").down("#grdPU")).data.usur_key});}
}
});