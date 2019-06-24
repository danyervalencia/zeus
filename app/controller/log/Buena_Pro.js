Ext.define("Siace.controller.log.Buena_Pro",{extend:"Ext.app.Controller",
lbp_PrinterCC:function(poP){var _comp=poP["comp"];var _oi=(poP["oi"]==undefined?5023:poP["oi"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _d=poP["d"];if(fextpub_uamoBtn("",_oi,_comp)){return false;}
	fext_pdf("","C.C."+_d.doc_abrev+"/ "+_d.ped_documento,"php/pdf/pdf_logistics_pedidos_comparative.php?xxPed_key="+_d.ped_key+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi+"&xxFormat="+(poP["f"]==undefined?32:poP["f"]));
},
lbp_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?1:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?5021:poP["oi"]);var _grd=(poP["grd"]==undefined?"grdLC":poP["grd"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_mask(_comp);
	fext_CC("log.Buena_ProE");var _w=fext_CW("log.Buena_ProE");_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));_w.setMI(_mi);
	fext_SV(_w,"coti_key",_r.data.coti_key);_w.down("#btnSave").setIconCls("icon_Vobo");_w.down("#btnSave").setText("Otorgar Buena Pro");_w.show();fext_unmask(_comp);
}
});