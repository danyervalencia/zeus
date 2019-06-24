Ext.define("Siace.controller.pub.Bienes_Servs_Clases_MarcasE",{extend:"Ext.app.Controller",views:["pub.Bienes_Servs_Clases_MarcasE"],
init:function(application){this.control({
"pub_bscmarce":{beforerender:this.pbscme_BR},"pub_bscmarce #btnSave":{click:this.pbscme_btnSav},"pub_bscmarce #btnUndo":{click:this.pbscme_btnExt},"pub_bscmarce #btnExit":{click:this.pbscme_btnExt},
"pub_bscmarce #bscmarc_estado":{change:this.pbscme_bscmarceChg}
});},
pbscme_BR:function(comp,opt){var _TE=comp.getTE();var _cboM=comp.down("#marc_key");var _me=this;
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_clases_json_records.php",params:{xxBsc_id:fext_GV(comp,"bsc_id"),xxType_record:"winPBSCME",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.Bien_Serv_ClaseWPBSCME");if(_res.success&&_res.data.length==1){var _dat=_res.data[0]; _md.set(_dat);fext_LR(comp.down("#panPBSC"),_md);}}
	});
	if(_TE==13){var _ico="icon_Add_90";var _tit="Agregar Marca en Clase ::.";_cboM.bindStore(fext_CS("pub.MarcasWPBSCME"));_cboM.getStore().load({params:{xxType_record:"WPBSCME",xxType_query:"NOT_IN_CLASE_"+fext_GV(comp,"bsc_id"),xxAdd_blank:"YES"}});}
	else if(fjsIn_array(_TE,[2,3])){var _frm=comp.down("#panPBSCM").down("form");fext_Dsb(comp,"marc_key");
		_frm.load({method:"POST",url:"php/public_bienes_servs_clases_marcas_json_records.php",waitMsg:"Loading...",params:{xxBscmarc_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _md=fext_CM("pub.Bien_Serv_Clase_MarcaE");var _d=fext_DJ(act).data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);_cboM.bindStore(fext_CS("pub.MarcasCbo"));_cboM.getStore().load({params:{xxMarc_key:_d.marc_key,xxType_record:"cbo"},callback:function(rec,oper,succ){_cboM.setValue(_d.marc_key);}});fext_SV(comp,"bscmarc_estado",_d.bscmarc_estado==1?true:false);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Marca en Clase ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Marca en Clase ::.";fext_Dsb(comp,"",["bscmarc_estado","bscmarc_observ","btnSave","btnUndo"]);fext_SD(comp,"btnExit",false);}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
pbscme_btnSav:function(btn,e,opt){fext_CC("pub.BSCMarcES").pbscmes(btn);},
pbscme_btnExt:function(btn,e,opt){var _w=btn.up("window");_w.hide();},
pbscme_bscmarceChg:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblBscmarc_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});