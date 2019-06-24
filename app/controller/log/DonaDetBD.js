Ext.define("Siace.controller.log.DonaDetBD",{extend:"Ext.app.Controller",
lddb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLDD":poP["grd"]);var _cte=(poP["cte"]==undefined?_comp:poP["cte"]);
	console.log(_cte);
	if(fextpub_uamoBtn("",7,_cte)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	Ext.Msg.confirm("Confirmación",trnslt.msg_qst_del,function(b){if(b=="yes"){var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_donaciones_det_delete.php",params:{xx0007:"YES",xxType_edit:7,xxDonadet_key:_r.data.donadet_key,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}
		});
	}});
}
});