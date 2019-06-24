Ext.define("Siace.controller.pub.BSCMarcBD",{extend:"Ext.app.Controller",
pbscm:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdM":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}
	if(fextpub_uamoBtn("",_TE,_comp)){return false;} var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de Quitar la Marca Comercial seleccionada?",function(b){if(b=="yes"){fext_mask(_comp);
		Ext.Ajax.request({url:"php/public_bienes_servs_clases_marcas_delete.php",params:{xx0007:"YES",xxType_edit:7,xxBscmarc_key:_r.data.bscmarc_key,xxMenu_id:_comp.down("#menu_id").getValue(),vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_comp.down("#grdM").getStore().load({callback:function(){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_tabM);fext_MsgE(resp.responseText);}
		});
	}});
}
});