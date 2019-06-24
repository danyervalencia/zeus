Ext.define("Siace.controller.pub.ModelosE",{extend:"Ext.app.Controller",views:["pub.ModelosE"],
init:function(application){this.control({
"pub_mode":{beforerender:this.ppmef_BeforeRender},"pub_mode #btnSave":{click:this.ppmef_btnSaveClick},"pub_mode #btnUndo":{click:this.ppmef_btnUndoClick},"pub_mode #btnExit":{click:this.ppmef_btnExitClick},
"pub_mode #btnMod_fileDownload":{click:this.ppmef_btnMod_fileDownloadClick},"pub_mode #btnMod_fileDelete":{click:this.ppmef_btnMod_fileDeleteClick},"pub_mode #btnMod_fotoDelete":{click:this.ppmef_btnMod_fotoDeleteClick},
"pub_mode #ffiMod_file":{change:this.ppmef_ffiMod_fileChange},"pub_mode #ffiMod_foto":{change:this.ppmef_ffiMod_fotoChange},
"pub_mode #mod_estado":{change:this.ppmef_mod_estadoChange}, //"pub_mode #ffiMod_file":{change:this.ppmef_ffiMod_file1Change},
});},
ppmef_BeforeRender:function(comp,opt){var _TE=comp.getTypeEdit(); var _panPBSF=comp.down("#panPBSF"); var _panPM=comp.down("#panPM"); var _cboM=comp.down("#marc_key"); var _vs=fextpub_sessionVariables(); var _me=this; fext_removeAddCls(comp.down("#xxx"),"myDisabledClass","x-item-disabled");
	_cboM.bindStore(fext_CS("pub.MarcasWPBSCME")); _cboM.getStore().load({params:{xxType_record:"WPBSCME",xxType_query:"IN_FAMILIA_"+comp.down("#bsf_id").getValue()}});
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_familias_json_records.php",params:{xxBsf_id:comp.down("#bsf_id").getValue(),xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp); var _mod=fext_CM("pub.Bien_Serv_FamiliaWindow"); if(_res.success&&_res.data.length==1){var _dat=_res.data[0]; _mod.set(_dat); _panPBSF.down("form").loadRecord(_mod);}}
	});
	if(_TE==1){var _icon="icon_New_90";var _title="Nuevo Modelo de Bien ::.";}
	else if(fjsIn_array(_TE,[2,3])){var _frm=_panPM.down("form");
		_frm.load({method:"POST", url:"php/public_modelos_json_records.php",waitMsg:"Loading...",params:{xxMod_key:comp.getCallKey(),xxType_record:"frm"},
			success:function(frm,act){
				try{var _mod=fext_CM("pub.ModeloEdit");var _res=fext_DJ(act);var _dat=_res.data[0];
					if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);_cboM.setValue(_dat.marc_key);comp.down("#mod_estado").setValue(_dat.mod_estado==1?true:false);comp.down("#ffiMod_file").setRawValue(_dat.mod_file);
						if(_dat.mod_file!=""){if(_TE==2){comp.down("#btnMod_fileDelete").enable();}comp.down("#btnMod_fileDownload").enable();}
						if(_dat.mod_foto==""){comp.down("#imgMod_foto").setSrc("attach/sin_imagen.jpg");}else{comp.down("#imgMod_foto").setSrc("attach/public_modelos_foto_"+_dat.mod+"_"+_dat.mod_foto);if(_TE==2){comp.down("#btnMod_fotoDelete").enable();}}
					}
				}catch(x){fext_MsgC(x.Message);}
			},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _icon="icon_Modify_90";var _title="Modificar Modelo de Bien ::.";}
		else{var _icon="icon_Query_90";var _title="Consulta Modelo de Bien ::.";comp.down("#marc_key").disable();comp.down("#mod_nombre").disable();comp.down("#mod_abrev").disable();comp.down("#mod_estado").disable();comp.down("#ffiMod_file").disable();comp.down("#mod_observ").disable();comp.down("#ffiMod_foto").disable();comp.down("#btnSave").disable();comp.down("#btnUndo").disable();comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_icon); comp.setTitle(_title);
},
ppmef_btnSaveClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("#panPM").down("form"); if(!_frm.getForm().isValid()){return false;}var _mk=_win.down("#marc_key").getValue();
	if(Ext.isEmpty(_mk)){fext_MsgA("Debe indicar la Marca Comercial a la que se asignara el modelo");return false;}
	if(fext_IE(_win.down("#mod_nombre"))){fext_MsgA("Debe indicar el nombre del modelo",_win.down("#mod_nombre"));return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_modelos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxMod_key:_win.getCallKey(),xxMarc_key:_mk,xxMenu_id:_win.getMenuId(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
ppmef_btnUndoClick:function(btn,e,opt){var _win=btn.up("window");_win.hide();}, //_win.close();
ppmef_btnExitClick:function(btn,e,opt){var _win=btn.up("window");_win.hide();}, //_win.close();
ppmef_btnMod_fileDownloadClick:function(btn,e,opt){var _w=btn.up("window"); var _file=_w.down("#ffiMod_file").fileInputEl.dom.files[0]; console.log(_file);
	var _src="php/resources/download_file.php?xxSchema_table=public.modelos&xxTable_field=mod_key&xxRecord_key="+_w.getCallKey()+"&xxRecord_id=mod_id&xxRecord_field=mod_file&xxTable=public_modelos&xxField=file";fext_FileDownload(_file,_src);
},
ppmef_btnMod_fileDeleteClick:function(btn,e,opt){var _win=btn.up("window");
	_win.down("#ffiMod_file").reset(); _win.down("#ffiMod_file").setValue(""); _win.down("#ffiMod_file").setRawValue(""); _win.down("#ffiMod_file").setReadOnly(false);
	_win.down("#mod_file").setValue(""); btn.disable(); _win.down("#btnMod_fileDownload").disable();
},
ppmef_btnMod_fotoDeleteClick:function(btn,e,opt){var _win=btn.up("window");
	_win.down("#imgMod_foto").setSrc(""); _win.down("#ffiMod_foto").reset(); _win.down("#mod_foto").setValue(""); btn.disable(); btn.setTooltip("");
},
ppmef_ffiMod_fileChange:function(filf,value,opt){var _win=filf.up("window");fext_FileReader(filf,/pdf/,"[PDF]",10485760,"10 MB",_win.down("#btnMod_fileDelete"),_win.down("#btnMod_fileDownload"),false);},
ppmef_ffiMod_fotoChange:function(filef,val,opt){var _r=fext_FileReader(filef,/image/,"[IMAGEN]",1048576,"1 MB","","");
	if(_r!==""){var _pict=filef.up("window").down("#imgMod_foto");_r.onload=function(e){_pict.setSrc(e.target.result);};var _btn=filef.up("form").down("#btnMod_fotoDelete");_btn.enable();_btn.setTooltip(" Quitar imagen ");}
},
ppmef_mod_estadoChange:function(chk,newVal,oldVal,opt){fext_removeAddCls(chk.up("window").down("#lblMod_estado"),newVal==true?"lbl00303":"lbl00003",newVal==true?"lbl00003":"lbl00303");}
});