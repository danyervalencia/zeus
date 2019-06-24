Ext.define("Siace.controller.pub.IndivE02",{extend:"Ext.app.Controller",
pie:function(poC){var _frm=poC.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Registro de Identidad ::.");poC.down("#cntPdpd").setChangeEnabled(false);
	_frm.load({method:"POST",url:"php/public_individuos_json_records.php",params:{xxIndiv_key:poC.getCK(),xxType_record:"frm"},waitMsg:"Loading...",
		success:function(frm,act){
			try{var _mod=fext_CM("pub.IndividuoE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_mod.set(_d);_frm.loadRecord(_mod);if(_d.indiv_pdf!==""){poC.down("#ffiIndiv_pdf").hide();poC.down("#btnIndiv_pdfDelete").show();fext_SD(poC,"btnIndiv_pdfDownload",false);}
					fextpub_tipdocidentFilt({obj:poC.down("#tipdocident_id"),tdiei:1,val:_d.tipdocident_id,TR:"cboAP",AB:"NO"});fext_SD(poC,"indiv_dni",_d.tipdocident_id==99?true:false);
					if(_d.indiv_foto==""){poC.down("#imgIndiv_foto").setSrc("attach/sin_foto.jpg");}else{poC.down("#imgIndiv_foto").setSrc("attach/public_individuos_foto_"+_d.indiv_key+"_"+_d.indiv_foto);fext_SD(poC,"btnIndiv_fotoDelete",false);}
					poC.down("#cntPdpd").fireEvent("loaddata",poC.down("#cntPdpd"),false,_d.pais_id,_d.dpto_id,_d.prvn_id,_d.dstt_id);
				}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
}
});