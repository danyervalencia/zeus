Ext.define("Siace.controller.log.PedEBS",{extend:"Ext.app.Controller",
lpe:function(btn){var _w=btn.up("window");var _r=fext_grdSR(_w,"grdLPD");if(!_r){return false;}btn.disable();fext_GS(_w,"grdLPD").remove(_r);var _rLPTFTE=false;
	fext_GS(_w,"grdLPTF").findBy(function(r,id){if(r.data.espedet_id==_r.data.espedet_id){r.set("pedtareafte_monto",fjsRound(r.data.pedtareafte_monto*1 - _r.data.peddet_pretot*1,2));r.commit();if(r.data.pedtareafte_monto*1<=0){_rLPTFTE=r;}return true;}});
	if(_rLPTFTE){fext_GS(_w,"grdLPTF").remove(_rLPTFTE);}fext_CC("log.PedE").lpe_montoUpdate(_w,_r.data.peddet_pretot*(-1));
}
});