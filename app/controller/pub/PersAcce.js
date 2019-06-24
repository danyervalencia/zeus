Ext.define("Siace.controller.pub.PersAcce",{extend:"Ext.app.Controller",
ppa_Constancy:function(poP){var _comp=poP["comp"];var _oi=(poP["oi"]==undefined?62:poP["oi"]);var _grd=(poP["grd"]==undefined?"grdPP":poP["grd"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_pdf("","Constancia de Acceso","php/pdf/pdf_public_personas_accesos_constancia.php?xxPers_key="+_r.data.pers_key);
},
ppa_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPP":poP["grd"]);
	if(fextpub_uamoBtn("",5008,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_mask(_comp);
	fext_CC("pub.Personas_AccesosE");var _w=fext_CW("pub.Personas_AccesosE");_w.setMI(_mi);_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));
	fext_SV(_w,"pers_key",_r.data.pers_key);_w.down("#pers_ruc").setFieldLabel(_r.data.tipdocident_abrev);fext_SV(_w,"pers_ruc",_r.data.pers_ruc);fext_SV(_w,"pers_nombre",_r.data.pers_nombre);_w.show();fext_unmask(_comp);
}
});