Ext.define("Siace.controller.log.PedFaseRJ",{extend:"Ext.app.Controller",
lpfrj_RJ:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);if(fextpub_uamoBtn("",45,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de RECHAZAR el requerimiento seleccionado?",function(b){if(b=="yes"){fext_CC("log.PedidosPsw2");var _w=fext_CW("log.PedidosPsw2");
			_w.setCB(poP["btn"]);_w.setCK(_r.data.pedfase_key);_w.setTitle("Rechazar Requerimiento ::.");fext_SV(_w,"subtitle",_r.data.ped_documento);_w.down("#btnAccept").setText("Rechazar");_w.down("#warning").setValue("Se va a RECHAZAR el requerimiento visualizado por seguridad debe digitar su clave de confirmación");_w.setFT(45);_w.show();
		}});
	}else{var _w=_opt.win;var _pan=_comp.up("log_pedbvb");var _str=fext_GS(_comp,"");fext_mask(_comp);var _r=fext_grdSR(_comp,_grd);
		Ext.Ajax.request({url:"php/logistics_pedidos_fases_save_reject.php",params:{xx0005:"YES",xxPedfase_key:_opt.key,xxPed_key:_r.data.ped_key,xxFaseacce_key:fext_GV(_pan,"faseacce_key"),xxUsur_psw2:_opt.usur_psw2,xxPed_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}
		});
	}
}
});