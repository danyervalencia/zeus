Ext.define("Siace.controller.bud.NotaBS",{extend:"Ext.app.Controller",
bns_Siaf:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBN":poP["grd"]);if(fextpub_uamoBtn("",5005,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_mask(_comp);
	fext_CC("bud.Notas_SiafE");var _w=fext_CW("bud.Notas_SiafE");_w.setTE(_r.data.siaf_nro*1>0?2:1);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"nota_key",_r.data.nota_key);_w.setMI(poP["mi"]);_w.show();fext_unmask(_comp);
}
});