Ext.define("Siace.controller.pub.BSCCompl",{extend:"Ext.app.Controller",
pbscc_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdCO":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}
	//var _pan=poC.up("pub_bscb").down("#panC");var _rec=fext_grdSR(_pan.down("#grdC"));if(!_rec){return false;}
	if(fjsIn_array(pcTE,[2,3])){var _r=fext_grdSR(poC,"grdCO");if(!_r){return false;}}fext_mask(poC);
	fext_CC("pub.Bienes_Servs_Clases_ComplementariosE");var _w=fext_CW("pub.Bienes_Servs_Clases_ComplementariosE");_w.setTE(_TE);_w.setMI(fext_GV(poC,"menu_id"));_w.setCS(fext_GS(poC,"grdCO"));fext_SV(_w,"bsc_id",_rec.data.bsc_id);
	if(fjsIn_array(pcTE,[2,3])){_w.setCK(_r.data.bsccompl_key);}_w.show();fext_unmask(poC);
},
pbscc_Delete:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdPBSCM":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}
	var _tab=btn.up("#tabCO");if(fextpub_uamoBtn(_tab.down("#opc_id"),7)){return false;}var _r=fext_grdSR(_tab,"");if(!_r){return false;}
	Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de Quitar el Complementario seleccionado?",function(b){if(b=="yes"){fext_mask(_tabCO);
		Ext.Ajax.request({url:"php/public_bienes_servs_clases_complementarios_delete.php",params:{xx0007:"YES",xxType_edit:7,xxBsccompl_key:_r.data.bsccompl_key,xxMenu_id:_tabCO.down("#menu_id").getValue(),vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_tabCO.down("#grdCO").getStore().load({callback:function(){fext_unmask(_tabCO);}});}else{fext_unmask(_tabCO);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_tabCO);fext_MsgE(resp.responseText);}
		});
	}});
}
});