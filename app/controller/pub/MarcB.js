Ext.define("Siace.controller.pub.MarcB",{extend:"Ext.app.Controller",
pmb_sc:function(mod,r){if(r.length==1){var _p=mod.view.up("#panM");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7);fext_CC("pub.MarcasB").pmb_tabsClean(_p.up("pub_marcb"),false);}}
});