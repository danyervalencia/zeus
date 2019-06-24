Ext.define("Siace.controller.pub.Usuarios",{extend:"Ext.app.Controller",
pu_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPU":poP["grd"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_TE)){return false;}if(fjsIn_array(_TE,[2,3,1001])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	if(_TE==1001){fext_CC("pub.UsuariosEPswav");var _w=fext_CW("pub.UsuariosEPswav");_w.setCK(_r.data.usur_key);_w.setMI(_mi);}
	else{fext_CC("pub.UsuariosE");var _w=fext_CW("pub.UsuariosE");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.usur_key);}}
	_w.show();fext_unmask(_comp);
}
});