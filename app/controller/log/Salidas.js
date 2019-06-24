Ext.define("Siace.controller.log.Salidas",{extend:"Ext.app.Controller",
ls_Annular:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLS":poP["grd"]);if(fextpub_uamoBtn("",10,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
		Ext.Msg.confirm("Confirmación",trnslt.msg_qst_anul,function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.sal_key);fext_SV(_w,"subtitle",_r.data.sal_documento);_w.setFT(10);_w.show();}});
	}else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_salidas_delete.php",params:{xx0010:"YES",xxType_edit:10,xxSal_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxSal_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}});
	}
},
ls_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLS":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_tit=_r.data.sal_documento;
	fext_pdf("",_tit,"php/pdf/pdf_logistics_salidas_printer"+(poP["aux"]==undefined?"":poP["aux"])+".php?xxSal_key="+_r.data.sal_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
ls_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLS":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);
	var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.SalidasE"+(_mi==5136?"N":""));var _w=fext_CW("log.SalidasE"+(_mi==5136?"N":""));_w.setTE(_TE);_w.setMI(_mi);
	if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.sal_key);}if(_nuk=="NoT"){_w.setNUk("NoT");}
	_w.show();fext_unmask(_comp);
}
});