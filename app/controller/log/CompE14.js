Ext.define("Siace.controller.log.CompE14",{extend:"Ext.app.Controller",
lce_pps:function(btn){var _w=btn.up("window");fext_CC("pub.PersonasS");_w.setCompPPS(fext_compSearch({cc:_w.down("#cntPers"),os:_w.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_w,"pers_key"),TQ:"ONLY_WITH_RUC"}));},
});