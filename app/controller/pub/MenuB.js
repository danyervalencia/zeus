Ext.define("Siace.controller.pub.MenuB",{extend:"Ext.app.Controller",
pmb_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("bud.Proyectos").bm_View({comp:_p,TE:_TE,mi:_p.up("bud_proyb").getMI()});},
pmb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("pub_menub");var _p=_pan.down("#pan");var _p1=_pan.down("#panO");var _p2=_pan.down("#panU");fext_GSR(_p2);_pan.down("#pagU").disable();fext_Dsb(_p2,"",["btnH","btnD"]);
	Ext.Ajax.request({method:"POST",url:"php/public_menus_json_records.php",params:{xxMenu_id:r[0].data.menu_id,xxType_record:"win",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.MenuW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_p1,_md);fext_LR(_p2,_md);fext_GS(_p1).load();}});
}}
});