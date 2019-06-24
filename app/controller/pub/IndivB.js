Ext.define("Siace.controller.pub.IndivB",{extend:"Ext.app.Controller",
pib_sc:function(mod,r){if(r.length==1){var _p=mod.view.up("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_CC("pub.IndividuosB").pib_tabsClean(_p.up("pub_indivb"),false);}}
});