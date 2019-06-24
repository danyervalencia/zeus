Ext.define("Siace.controller.log.PedFaseVB",{extend:"Ext.app.Controller",
lpfvb_VB:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);if(fextpub_uamoBtn(_comp.down("#opc_id"),41)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}
		fext_CC("log.PedidosPsw2");var _w=fext_CW("log.PedidosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.pedfase_key);_w.setFT(41);fext_SV(_w,"ped_key",_r.data.ped_key);_w.setTitle("VoBo de Requerimiento  ["+fext_GRV(_comp,"faseacce_key")+"]");fext_SV(_w,"subtitle",_r.data.ped_documento);_w.down("#btnAccept").setText(fext_GRV(_comp,"faseacce_key"));
		var recFE=fext_GS(_comp,"faseacce_key").findRecord("faseacce_key",fext_GV(_comp,"faseacce_key")).data["fase_key"];
		var _fk=fext_GS(_comp,"faseacce_key").findRecord("faseacce_key",fext_GV(_comp,"faseacce_key")).data["fase_key"];
		_comp.down("#faseextr_key").getStore().each(function(rec){var _d=rec.data;
			if(_d.fase_key==_fk&&_d.extr_id==12){_w.down("#certif_nro").setVisible(true);_w.down("#certif_nro").enable();}
			if(_d.fase_key==_fk&&_d.extr_id==13){var _cboUAK=_w.down("#usuracce_key");_cboUAK.setVisible(true);_cboUAK.enable();
				_cboUAK.bindStore(fext_CS("log.Fases_Accesos_Usuarios_AccesosUsuracceData"));_cboUAK.getStore().load({params:{xxFaseacce_key:fext_GV(_comp,"faseacce_key"),xxAdd_blank:(_d.faseextr_type==1?"":"YES"),xxType_record:"cboCTZDRS"},callback:function(rec){_cboUAK.setValue("");}});
			}
			if(_d.fase_key==_fk&&_d.extr_id==14){_w.down("#cntWeb").setVisible(true);_w.down("#pedweb_estado").enable();}
			if(_d.fase_key==_fk&&_d.extr_id==15){var _cboC=_w.down("#categ_id");_cboC.setVisible(true);_cboC.enable();fextpub_tabgenFilt({obj:_cboC,tgp:5050,AB:"NOT"});}
		});_w.show();
	}else{var _w=_opt.win;
		if(!_w.down("#categ_id").isDisabled()&&Ext.isEmpty(fext_GV(_w,"categ_id"))){fext_MsgA("Debe indicar la Categoria del requerimiento",_w.down("#categ_id"));return false;}
		if(!_w.down("#certif_nro").isDisabled()&&fext_GV(_w,"certif_nro")*1<=0){ fext_MsgA("Debe indicar el Número de Certificado SIAF",_w.down("#certif_nro"));return false;}
		if(!_w.down("#usuracce_key").isDisabled()&&(fext_GV(_w,"usuracce_key")==null||_w.down("#usuracce_key").getValue()==undefined)){fext_MsgA("Debe indicar el Cotizador al que se enviará el registro",_w.down("#usuracce_key"));return false;}
		if(!_w.down("#pedweb_dias").isDisabled()&&fext_GV(_w,"pedweb_dias")*1<=0){fext_MsgA("Debe indicar los dias de publicación en la Web",_w.down("#pedweb_dias"));return false;}
		var _str=_comp.down("#"+_grd).getStore();fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_pedidos_fases_save_vobo.php",params:{xx0005:"YES",xxPedfase_key:_opt.key,xxFaseacce_key:fext_GV(_comp,"faseacce_key"),xxPed_key:fext_GV(_w,"ped_key"),xxFase_type:1,xxUsur_psw2:_opt.usur_psw2,xxCateg_id:fext_GV(_w,"categ_id"),xxUsuracce_key:fext_GV(_w,"usuracce_key"),xxMenu_id:poP["mi"],xxPedweb_estado:(fext_GV(_w,"pedweb_estado")?1:0),xxPedweb_dias:fext_GV(_w,"pedweb_dias"),xxPed_observ:_opt.observ,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}
		});
	}
}
});