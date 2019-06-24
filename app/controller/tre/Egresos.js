Ext.define("Siace.controller.tre.Egresos",{extend:"Ext.app.Controller",
te_Annular:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdTE":poP["grd"]);if(fextpub_uamoBtn(_comp.down("#opc_id"),10)){return false;}
	var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}
	Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de Anular el Comprobante seleccionado?",function(b){if(b=="yes"){fext_mask(_comp);
		Ext.Ajax.request({url:"php/treasury_egresos_delete.php",params:{xx0010:"YES",xxType_edit:10,xxEgre_key:_r.data.egre_key,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_comp.down("#"+_grd).getStore().load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}});
	}});
},
te_Cheque:function(poP){var _comp=poP["comp"]; var _grd=(poP["grd"]==undefined?"grdTE":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?4005:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	Ext.Ajax.request({method:"POST", url:"php/treasury_egresos_printer_cheque.php",params:{xxEgre_key:_r.data.egre_key,xxType_rec:"printer_cheque"},success:function(resp,opt){_comp.down("#btnHide").fireEvent("click",_comp.down("#btnHide"),"",resp.responseText);}});
},
te_Printer:function(poP){var _comp=poP["comp"]; var _grd=(poP["grd"]==undefined?"grdTE":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	_title=(_r.data.egre_documento);
	fext_pdf("",_title,"php/pdf/pdf_treasury_egresos_printer.php?xxEgre_key="+_r.data.egre_key+"&xxType_rec=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
te_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdTE":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);
	var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(_oi!=""){if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}}fext_mask(_comp);
	fext_CC("tre.EgresosE");var _w=fext_CW("tre.EgresosE");_w.setTE(_TE);_w.setMI(_mi);if(_yi!=""){_w.down("#year_id").setValue(_yi);}
	if(_cs){_w.setCS(_comp.down("#"+_grd).getStore());}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.egre_key);}if(_nuk=="NoT"){_w.setNoUsk("NoT");}
	_w.show();fext_unmask(_comp);
}
});