Ext.define("Siace.controller.log.ModBA",{extend:"Ext.app.Controller",
lvba:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdPM":poP["grd"]);
	if(fextpub_uamoBtn("",7,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	Ext.Msg.confirm("Confirmación",trnslt.msg_qst_del,function(b){if(b=="yes"){fext_mask(_comp);
		Ext.Ajax.request({url:"php/public_modelos_delete.php",params:{xx0007:"YES",xxType_edit:7,xxMod_key:_r.data.mod_key,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){fext_GS(_comp,_grd)..load({callback:function(){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}});
	}});
}
});