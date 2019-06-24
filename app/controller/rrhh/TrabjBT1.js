Ext.define("Siace.controller.rrhh.TrabjBT1",{extend:"Ext.app.Controller",
rtb_btn:function(btn){var _t=btn.up("#tabRT");var _pan=_t.up("rrhh_trabjb");var _TE=fext_btnTE(btn);var _mi=_pan.getMI();var _r=fext_grdSR(_pan,"grdPI");if(!_r){return false;}fext_CC("rrhh.Trabj").rt_View({comp:_t,TE:_TE,mi:_mi,oi:_TE,ik:_r.data.indiv_key});},
rtb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabRT");var _cbo=_t.up("rrhh_trabjb").down("#opc_id");fext_SDO(_t,"btnModify",_cbo,2);fext_SDO(_t,"btnQuery",_cbo,3);fext_SDO(_t,"btnDelete",_cbo,7);}}
});