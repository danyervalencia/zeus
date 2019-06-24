Ext.define("Siace.controller.pub.MarcBD",{extend:"Ext.app.Controller",
pmb:function(poP){var _comp=poP["comp"];var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdM":poP["grd"]);
	if(fextpub_uamoBtn("",7,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	Ext.Msg.confirm("Confirmación",trnslt.msg_qst_del,function(b){if(b=="yes"){fext_mask(_comp);
		Ext.Ajax.request({url:"php/public_marcas_delete.php",params:{xx0007:"YES",xxType_edit:7,xxMarc_key:_r.data.marc_key,xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){fext_GS(_comp,_grd).load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}
		});
	}});
}
});