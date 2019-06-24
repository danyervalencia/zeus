Ext.define("Siace.controller.pub.ComplB",{extend:"Ext.app.Controller",
pcb_sc:function(mod,r){if(r.length==1){var _p=mod.view.up("#panPC");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7);fext_CC("pub.ComplementariosB").pcb_tabsClean(_p.up("pub_complb"),false);}}
});