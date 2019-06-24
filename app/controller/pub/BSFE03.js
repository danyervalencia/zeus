Ext.define("Siace.controller.pub.BSFE03",{extend:"Ext.app.Controller",
pbsfe:function(poC){poC.setIconCls("icon_Query_90");poC.setTitle("Consulta Registro de Familia ::.");var _frm=poC.down("form");
	_frm.load({method:"POST",url:"php/public_bienes_servs_familias_json_records.php",params:{xxBsf_id:poC.getCK(),xxType_record:"frm"},
		success:function(frm,act){
			try{var _mod=fext_CM("pub.Bien_Serv_FamiliaE");var _res=fext_DJ(act);var _d=_mod.data;
				if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);var _cboG=poC.down("#bsg_id");var _cboC=poC.down("#bsc_id");
					_cboG.getStore().load({callback:function(r,oper,succ){
						if(r.length>0){_cboG.setValue(_d.bsg_id);
							_cboC.getStore().load({callback:function(r,oper,succ){if(r.length>0){_cboC.setValue(_d.bsc_id);}else{_cboC.disable();_cboC.setValue("");}}});
							fextpub_tabgenFilt({obj:poC.down("#tipbsf_id"),tgp:1055,val:_d.tipbsf_id,dsb:true});
						}else{_cboG.disable();_cboG.setValue("");}
					}});
					//fext_SV(poC,"bs_estado",_d.bs_estado==1?true:false);
				}
			}catch(x){fext_MsgC(x.Message);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["bst_id","bsg_id","bsc_id","bsf_code","bsf_nombre","bsf_abrev","tipbsf_id","btnSave","btnUndo"]);fext_SRO(poC,"bsf_observ");poC.down("#btnExit").enable();
}
});