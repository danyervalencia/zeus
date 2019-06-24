Ext.define("Siace.controller.log.Val08",{extend:"Ext.app.Controller",
lv:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}_tit=_r.data.val_documento;
	fext_pdf("",_tit,"php/pdf/pdf_logistics_vales_printer.php?xxVal_key="+_r.data.val_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
});