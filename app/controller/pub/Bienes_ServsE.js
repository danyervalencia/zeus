Ext.define("Siace.controller.pub.Bienes_ServsE",{extend:"Ext.app.Controller",views:["pub.Bienes_ServsE"],
init:function(application){this.control({
"pub_bse":{beforeshow:this.pbse_BS},"pub_bse #btnSave":{click:this.pbse_btnSav},"pub_bse #btnUndo":{click:this.pbse_btnExt},"pub_bse #btnExit":{click:this.pbse_btnExt},
"pub_bse #bs_code":{blur:this.pbse_bs_codeBlur},"pub_bse #bs_estado":{change:this.pbse_bs_estadoChange},"pub_bse #bsc_id":{change:this.pbse_bsc_idChange},"pub_bse #bsf_id":{change:this.pbse_bsf_idChange},"pub_bse #bsg_id":{change:this.pbse_bsg_idChange},"pub_bse #bst_id":{change:this.pbse_bst_idChange},"pub_bse #marc_key":{change:this.pbse_marc_keyChange}
});},
pbse_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});fextpub_bscmarcParam({"pan":comp});fextpub_modParam({pan:comp});fextpub_unimedFilt({obj:comp.down("#unimed_id"),dsb:(fjsIn_array(_TE,[1,2,11,12])?false:true)});fext_removeAddCls(comp.down("#alma_key"),"myDisabledClass","x-item-disabled");fext_removeAddCls(comp.down("#xxxx"),"myDisabledClass","x-item-disabled");
	if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Bien/Servicio::.";fext_SV(comp,"bst_id",1);}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_bienes_servs_json_records.php",params:{xxBs_key:comp.getCK(),xxType_record:"frm"},waitMsg:"Loading...",
			success:function(frm,act){
			try{var _mod=fext_CM("pub.Bien_ServE");var _res=fext_DJ(act);var _d=_mod.data;
				if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);var _cboG=comp.down("#bsg_id");var _cboC=comp.down("#bsc_id");var _cboF=comp.down("#bsf_id");var _cboMK=comp.down("#marc_key");var _cboMod_key=comp.down("#mod_key");
					_cboG.getStore().load({callback:function(rec,oper,succ){
						if(rec.length>0){_cboG.setValue(_d.bsg_id);
							_cboC.getStore().load({callback:function(rec,oper,succ){
								if(rec.length>0){_cboC.setValue(_d.bsc_id);
									_cboF.getStore().load({callback:function(rec,oper,succ){if(rec.length>0){if(_d.bsf_id>0){_cboF.setValue(_d.bsf_id);}}else{_cboF.disable();_cboF.setValue("");}}});
									_cboMK.getStore().load({callback:function(rec,oper,succ){if(rec.length>1){_cboMK.setValue(_d.marc_key);_cboMod_key.getStore().load({callback:function(rec,oper,succ){if(rec.length>1){_cboMod_key.setValue(_d.mod_key);}else{_cboMod_key.disable();_cboMod_key.setValue("");}}});}else{_cboMK.disable();_cboMK.setValue("");}}});
								}else{_cboC.disable();_cboC.setValue("");}
							}});
						}else{_cboG.disable();_cboG.setValue("");}
					}});
					fext_SV(comp,"bs_estado_compl",_d.bs_estado_compl==1?true:false);fext_SV(comp,"bs_estado",_d.bs_estado==1?true:false);
				}
			}catch(x){fext_MsgC(x.Message);}
			},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==3){var _ico="icon_Query_90";var _tit="Consulta de Bien / Servicio ::.";fext_Dsb(comp,"",["bst_id","bsg_id","bsc_id","bsf_id","bs_code","bs_nombre","bs_abrev","unimed_id","bs_peso","marc_key","mod_key","alma_key","bsalma_code","ffiIndiv_foto","bs_observ","bs_estado_compl","bs_estado","partaran_codigo","btnPartaran_search","btnSave","btnUndo"]);comp.down("#btnExit").enable();
		}else{var _ico="icon_Modify_90";var _tit="Modificar Bien / Servicio ::.";}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
pbse_btnSav:function(btn,e,opt){fext_CC("pub.BSES").pbses(btn);},
pbse_btnExt:function(btn,e,opt){btn.up("window").close();},
pbse_bs_codeBlur:function(txtf,the,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}},
pbse_bs_estadoChange:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblBs_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
pbse_bsc_idChange:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==1||oldV!=undefined){fextpub_bsfLoad({pan:_w});fextpub_bscmarcLoad({pan:_w});}},
pbse_bsf_idChange:function(cbo,newV,oldV,opt){},
pbse_bsg_idChange:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==1||oldV!=undefined){fextpub_bscLoad({pan:_w});}},
pbse_bst_idChange: function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(fjsIn_array(_w.getTE(),[1,11])||oldV!=undefined){fextpub_bsgLoad({pan:_w});}},
pbse_marc_keyChange:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(fjsIn_array(_w.getTE(),[1,11])||oldV!=undefined){fextpub_modLoad({pan:_w});}},
});