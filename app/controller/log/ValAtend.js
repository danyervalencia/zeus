Ext.define("Siace.controller.log.ValAtend",{extend:"Ext.app.Controller",
lva_View:function(poP){var _comp=poP["comp"];if(fextpub_uamoBtn(_comp.down("#opc_id"),poP["oi"])){return false;}
	if(fjsIn_array(poP["TE"],[2,3])){if(poP["valatend_key"]==""){return false;}}fext_mask(_comp);
	fext_CC("log.Vales_AtendidosE");var _w=fext_CW("log.Vales_AtendidosE");_w.setCC(_comp);_w.setTE(poP["TE"]);_w.setMI(poP["mi"]);_w.setCK(poP["vak"]);_w.down("#val_key").setValue(poP["vk"]);
	_w.show();fext_unmask(_comp);
}
});