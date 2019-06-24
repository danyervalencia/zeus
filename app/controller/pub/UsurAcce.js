Ext.define("Siace.controller.pub.UsurAcce",{extend:"Ext.app.Controller",
pua_Constancy:function(poP){var _comp=poP["comp"];var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPUA":poP["grd"]);
	var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_pdf("","Constancia de Acceso","php/pdf/pdf_public_usuarios_accesos_constancia.php?xxUsuracce_key="+_r.data.usuracce_key);
},
pua_Menu:function(poP){var _comp=poP["comp"];var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?25:poP["oi"]);var _grd=(poP["grd"]==undefined?"grdPUA":poP["grd"]);var _tit=(poP["tit"]==undefined?"Permisos de Menú según Acceso ::.":poP["tit"]);
	if(Ext.isEmpty(poP["uak"])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _uak=_r.data.usuracce_key}else{var _uak=poP["uak"]}
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}fext_mask(_comp);
	fext_CC("pub.Usuarios_Accesos_Menus_OpcionesB");var _w=fext_CW("pub.Usuarios_Accesos_Menus_OpcionesB");_w.setTitle(_tit);_w.setCK(_uak);_w.setMI(_mi);_w.show();fext_unmask(_comp);
},
pua_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPUA":poP["grd"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}else{if(Ext.isEmpty(poP["uk"])){return false;}}fext_mask(_comp);
	fext_CC("pub.Usuarios_AccesosE");var _w=fext_CW("pub.Usuarios_AccesosE");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));
	_w.down("#usur_key").setValue(poP["uk"]);if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.usuracce_key);}_w.show();fext_unmask(_comp);
}
});