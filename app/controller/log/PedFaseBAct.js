Ext.define("Siace.controller.log.PedFaseBAct",{extend:"Ext.app.Controller",
lpfb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);if(fextpub_uamoBtn("",48,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_CC("log.PedidosAct");var _w=fext_CW("log.PedidosAct");_w.setCB(poP["btn"]);_w.setCK(_r.data.ped_key);_w.show();}
	else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_pedidos_fases_save_activate.php",params:{xx0005:"YES",xxPed_key:_opt.key,xxFase_key:_opt.fase_key,xxObserv:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",res);}});
	}
}
});