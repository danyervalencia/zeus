Ext.define("Siace.controller.log.PedFaseBVB",{extend:"Ext.app.Controller",
lpfb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);if(fextpub_uamoBtn("",41,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
		fext_CC("log.PedidosPsw2");var _w=fext_CW("log.PedidosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.pedfase_key);_w.setFT(41);_w.setTitle("VoBo de Requerimiento  ["+_comp.down("#faseacce_key").getRawValue()+"]");fext_SV(_w,"subtitle",_r.data.ped_documento);_w.down("#btnAccept").setText(_comp.down("#faseacce_key").getRawValue());
		var _fk=fext_GS(_comp,"faseacce_key").findRecord("faseacce_key",fext_GV(_comp,"faseacce_key")).data["fase_key"];
		fext_GS(_comp,"faseextr_key").each(function(rec){var _d=rec.data;
			if(_d.fase_key==_fk&&_d.extr_id==12){fext_SVI(_w,"certif_nro",true);_w.down("#certif_nro").enable();}
			if(_d.fase_key==_fk&&_d.extr_id==13){var _cboUAK=_w.down("#usuracce_key");_cboUAK.setVisible(true);_cboUAK.enable();
				_cboUAK.bindStore(fext_CS("log.Fases_Accesos_Usuarios_AccesosUsuracceData"));_cboUAK.getStore().load({params:{xxFaseacce_key:_comp.down("#faseacce_key").getValue(),xxAdd_blank:(_d.faseextr_type==1?"":"YES"),xxType_record:"cboCTZDRS"},callback:function(rec){_cboUAK.setValue("");}});
			}
			if(_d.fase_key==_fk&&_d.extr_id==14){fext_SVI(_w,"cntWeb",true);_w.down("#pedweb_estado").enable();}
			if(_d.fase_key==_fk&&_d.extr_id==15){var _cboC=_w.down("#categ_id");_cboC.setVisible(true);_cboC.enable();fextpub_tabgenFilt({obj:_cboC,tgp:5050,AB:"NOT"});}
		});_w.show();
	}else{var _w=_opt.win;
		if(!_w.down("#categ_id").isDisabled()&&fext_IE(_w,"categ_id")){fext_MsgA("Debe indicar la Categoria del requerimiento",_w.down("#categ_id"));return false;}
		if(!_w.down("#certif_nro").isDisabled()&&_fext_GV(w,"certif_nro")*1<=0){fext_MsgA("Debe indicar el Número de Certificado SIAF",_w.down("#certif_nro"));return false;}
		if(!_w.down("#usuracce_key").isDisabled()&&ffext_IE(_w,"usuracce_key")){fext_MsgA("Debe indicar el Cotizador al que se enviará el registro",_w.down("#usuracce_key"));return false;}
		if(!_w.down("#pedweb_dias").isDisabled()&&fext_GV(_w,"pedweb_dias")*1<=0){fext_MsgA("Debe indicar los dias de publicacion en la Web",_w.down("#pedweb_dias"));return false;}
		var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_pedidos_fases_save_vobo.php",params:{xx0005:"YES",xxPedfase_key:_opt.key,xxFaseacce_key:fext_GV(_comp,"faseacce_key"),xxFase_type:1,xxUsur_psw2:_opt.usur_psw2,xxCateg_id:fext_GV(_w,"categ_id"),xxCertif_nro:fext_GV(_w,"certif_nro"),xxUsuracce_key:fext_GV(_w,"usuracce_key"),xxMenu_id:poP["mi"],xxPedweb_estado:(fextr_GV(_w,"pedweb_estado")?1:0),xxPedweb_dias:fext_GV(_w,"pedweb_dias"),xxPed_observ:_opt.observ,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}
		});
	}
}
});