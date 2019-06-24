Ext.define("Siace.controller.log.DonaDetE",{extend:"Ext.app.Controller",
ldde_bbs:function(btn){var _w=btn.up("window");fext_CC("pub.Bienes_ServsS");_w.setCompPBSS(fext_compSearch({cc:_w,os:_w.getCompPBSS(),v:"Siace.view.pub.Bienes_ServsS",tit:"Búsqueda Catálogo de Bienes ::."}));var _cc=_w.getCompPBSS();_cc.setBst_id(1);fext_SVI(_cc,"bst_id",false);},
ldde_st:function(poC,pcT){var _c=fext_GV(poC,"donadet_cantid")*1;var _pu=fext_GV(poC,"donadet_preuni")*1;var _pt=fext_GV(poC,"donadet_pretot")*1;
	if(pcT=="cantid"){if(_pu>0){fext_SV(poC,"donadet_pretot",fjsRound(_c*_pu,2));}else if(_pt>0){fext_SV(poC,"donadet_preuni",fjsRound(_pt*_c,8));}}
	else if(pcT=="preuni"){if(_c>0){fext_SV(poC,"donadet_pretot",fjsRound(_c*_pu,2));}else if(_pt>0){fext_SV(poC,"donadet_cantid",fjsRound(_pt/_pu,3));}}
	else if(pcT=="pretot"){if(_c>0){fext_SV(poC,"donadet_preuni",fjsRound(_pt/_c,8));}else if(_pu>0){fext_SV(poC,"donadet_cantid",fjsRound(_pt/_pu,3));}}
}
});