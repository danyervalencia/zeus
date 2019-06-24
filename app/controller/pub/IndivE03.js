Ext.define("Siace.controller.pub.IndivE03",{extend:"Ext.app.Controller",
pie:function(poC){var _frm=poC.down("form");poC.setIconCls("icon_Query_90");poC.setTitle("Consulta Registro de Identidad ::.");poC.down("#cntPdpd").setChangeEnabled(false);	
	_frm.load({method:"POST",url:"php/public_individuos_json_records.php",params:{xxIndiv_key:poC.getCK(),xxType_record:"frm"},waitMsg:"Loading...",
		success:function(frm,act){
			try{var _mod=fext_CM("pub.IndividuoE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_mod.set(_d);_frm.loadRecord(_mod);if(_d.indiv_pdf!=""){fext_SD(poC,"btnIndiv_pdfDownload",false);}
					fextpub_tipdocidentFilt({obj:poC.down("#tipdocident_id"),tdiei:1,val:_d.tipdocident_id,TR:"cboAP",AB:"NO",dsb:true});
					if(_d.indiv_foto==""){poC.down("#imgIndiv_foto").setSrc("attach/sin_foto.jpg");}else{poC.down("#imgIndiv_foto").setSrc("attach/public_individuos_foto_"+_d.indiv_key+"_"+_d.indiv_foto);}
					poC.down("#cntPdpd").fireEvent("loaddata",poC.down("#cntPdpd"),true,_d.pais_id,_d.dpto_id,_d.prvn_id,_d.dstt_id);
				}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["tipdocident_id","indiv_dni","ffiIndiv_pdf","indiv_appaterno","indiv_apmaterno","indiv_nombres","tipsex_id","tipestaciv_id","indiv_fechanac","pais_id","dpto_id","prvn_id","dstt_id","ffiIndiv_foto","ffiIndiv_foto","indiv_mail","indiv_observ","btnSave","btnUndo"]);poC.down("#btnExit").enable();
}
});