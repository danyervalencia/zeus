Ext.define("Siace.controller.log.DonaBT1",{extend:"Ext.app.Controller",
ldb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_donab");_p=_pan.down("#panLD");_t=_pan.down("#tabLDD");var _cbo=_p.down("#opc_id");fext_SDO(_t,"btnModify",_cbo,2);fext_SDO(_t,"btnQuery",_cbo,3);fext_SDO(_t,"btnDelete",_cbo,7);}}
});