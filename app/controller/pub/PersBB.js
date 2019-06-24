Ext.define("Siace.controller.pub.PersBB",{extend:"Ext.app.Controller",
ppb_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("pub_persb").getMI();if(_TE=="Cla"){fext_CC("pub.PersAcce").ppa_View({comp:_p,TE:1,mi:_mi});}else if(_TE=="Con"){fext_CC("pub.PersAcce").ppa_Constancy({comp:_p,mi:_mi});}else{fext_CC("pub.Personas").pp_View({comp:_p,TE:_TE,mi:_mi,oi:_TE});}}
});